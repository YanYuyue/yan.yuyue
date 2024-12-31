import fs from 'fs';
import path from 'path';
import { createFilter, FilterPattern, type Plugin } from 'vite';

interface PluginOptions {
  directory?: string;
  virtualModuleId?: string;
  include?: FilterPattern;
  exclude?: FilterPattern;
}

interface FileInfo {
  path: string;
  type: string;
}

function generateVirtualIndex(files: FileInfo[], virtualModuleId: string): string {
  const imports = files.map((file, index) => {
    const importPath = path.relative(path.dirname(virtualModuleId), file.path);
    return `import content${index} from '${importPath}';`;
  }).join('\n');

  const components = files.map((file, index) => {
    const componentName = `Component${index}`;

    switch (file.type) {
      case 'md':
        return `
          const ${componentName} = (): JSX.Element => {
            return <ReactMarkdown>{content${index}}</ReactMarkdown>;
          };
        `;
      case 'html':
        return `
          const ${componentName} = (): JSX.Element => {
            return <div dangerouslySetInnerHTML={{ __html: content${index} }} />;
          };
        `;
      case 'jsx':
      case 'tsx':
      case 'js':
      case 'ts':
        if (file.path.endsWith('.d.ts') || file.path.includes('index.')) {
          return '';
        }
        return `
          const ${componentName} = (): JSX.Element => {
            const Content = content${index};
            return typeof Content === 'function' ? <Content /> : Content;
          };
        `;
      default:
        return '';
    }
  }).join('\n');

  const exports = files.map((file, index) => {
    const fileName = path.basename(file.path).replace(/\.[^/.]+$/, '');
    return `export const ${fileName} = Component${index};`;
  }).join('\n');

  return `
    import React from 'react';
    import ReactMarkdown from 'react-markdown';
    
    ${imports}
    ${components}
    ${exports}
  `;
}

function scanDirectory(dir: string, filter: (id: string) => boolean): FileInfo[] {
  const files: FileInfo[] = [];

  const scan = (directory: string): void => {
    const entries = fs.readdirSync(directory);
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (filter(fullPath)) {
        const ext = path.extname(fullPath).slice(1);
        files.push({
          path: fullPath,
          type: ext
        });
      }
    }
  };

  scan(dir);
  return files;
}

export default function virtualIndexPlugin(options: PluginOptions = {}): Plugin {
  const {
    directory = 'src/pages',
    virtualModuleId = 'virtual:generated-index',
    include = '**/*.{md,html,jsx,tsx,js,ts}',
    exclude
  } = options;

  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  const filter = createFilter(include, exclude);

  return {
    name: 'vite-plugin-virtual-index',

    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return null;
    },

    async load(id: string) {
      if (id === resolvedVirtualModuleId) {
        const directoryPath = path.resolve(directory);
        
        if (!fs.existsSync(directoryPath)) {
          throw new Error(`Directory ${directoryPath} does not exist`);
        }

        const files = scanDirectory(directoryPath, filter);
        return generateVirtualIndex(files, resolvedVirtualModuleId);
      }
      return null;
    },

    configResolved(config) {
      // 确保必要的依赖已安装
      const deps = ['react', 'react-markdown'];
      const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'));
      const missingDeps = deps.filter(dep => 
        !pkg.dependencies?.[dep] && !pkg.devDependencies?.[dep]
      );

      if (missingDeps.length > 0) {
        throw new Error(
          `Missing required dependencies: ${missingDeps.join(', ')}. ` +
          `Please install them using: npm install ${missingDeps.join(' ')}`
        );
      }
    }
  };
}

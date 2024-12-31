import path from "path"
import fs from "fs"
import { PageContext } from "vike/types"

export function onBeforeRender(pageContext: PageContext) {

  const { filename } = pageContext.routeParams

  const articlesDirectory = path.join(process.cwd(), 'articles')
  const fullPath = path.join(articlesDirectory, `${filename}.md`)
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return {
    pageContext: {
      article: fileContents,
    }
  }
}

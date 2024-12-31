import { micromark } from 'micromark'

export function MarkdownRenderer({ children }: { children: string }) {
  const html = micromark(children)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default MarkdownRenderer
import { micromark } from 'micromark'
import { HTMLAttributes } from 'react'

export function MarkdownRenderer({ children, ...rest }: { children: string } & Omit<HTMLAttributes<HTMLDivElement>, 'children'>) {
  const html = micromark(children)
  return <div {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}

export default MarkdownRenderer
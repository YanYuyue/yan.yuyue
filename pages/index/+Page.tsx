import ReactMarkdown from 'react-markdown'

import content from './page.md'

export default function() {
  return (
    <>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
      <h1>Welcome</h1>
      This page is:
      test
    </>
  )
}

export { Page }

import { Counter } from './Counter'

import {styled} from '@linaria/react'

import ReactMarkdown from 'react-markdown'

const D = styled.div`
  color: red;
`

const content = `
# Test Title

test content

\`test blockquote\`
`;

function Page() {
  return (
    <D>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
      <h1>Welcome</h1>
      This page is:
      test
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </D>
  )
}

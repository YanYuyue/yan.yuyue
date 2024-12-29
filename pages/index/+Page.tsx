export { Page }

import { Counter } from './Counter'


import ReactMarkdown from 'react-markdown'

import content from './page.md'
import styled from 'styled-components'

const D = styled.div`
  color: red;
`
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

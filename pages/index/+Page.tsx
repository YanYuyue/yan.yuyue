import ReactMarkdown from 'react-markdown'

import content from './page.md'
import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  );
}

export default function() {
  return (
    <>
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
    </>
  )
}

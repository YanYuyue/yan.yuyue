import ReactMarkdown from 'react-markdown'

import content from './_about.md'
import { Container } from './Container'
import { PhotoBox } from './PhotoBox'

export default function () {
  return (
    <Container>
      <PhotoBox />
      <div>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>

        <h1>News</h1>
      </div>
    </Container>
  )
}

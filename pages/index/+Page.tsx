import ReactMarkdown from 'react-markdown'

import content from './page.md'
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
      </div>
    </Container>
  )
}

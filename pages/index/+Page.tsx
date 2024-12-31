import ReactMarkdown from 'react-markdown'

import content from './_about.md'
import { Container } from './Container'
import { PhotoBox } from './PhotoBox'
import NewsList from './NewsList'

export default function () {
  return (
    <Container>
      <PhotoBox />
      <div>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>

        <h1>News</h1>
        <NewsList />
      </div>
    </Container>
  )
}

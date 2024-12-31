import MarkdownRenderer from '../../utils/MarkdownRenderer'

import content from './_about.md'
import { Container } from './Container'
import { PhotoBox } from './PhotoBox'
import NewsList from './NewsList'

export default function () {
  return (
    <Container>
      <PhotoBox />
      <div>
        <MarkdownRenderer>
          {content}
        </MarkdownRenderer>

        <h1>News</h1>
        <NewsList />
      </div>
    </Container>
  )
}

import ReactMarkdown from "react-markdown";
import { Container } from "./components";

export default function (props: { article: string }) {
  const { article } = props
  return (
    <Container>
      <ReactMarkdown>{article}</ReactMarkdown>
    </Container>
  )
}

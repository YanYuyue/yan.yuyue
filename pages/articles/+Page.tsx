import { usePageContext } from "vike-react/usePageContext";
import { Container } from "./components";
import { useData } from "vike-react/useData";

export default function () {
  const { article } = useData() as unknown as { article: string };
  return (
    <Container article={article} />
  )
}

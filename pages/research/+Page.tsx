import MarkdownRenderer from "../../utils/MarkdownRenderer";
import { Topics } from "./Topics";
import summary from './_summary.md';

export default function() {
  return <>
    <MarkdownRenderer children={summary} />
    <h1>Individual Topics</h1>
    <Topics />
  </>;
}
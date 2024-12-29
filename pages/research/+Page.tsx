import ReactMarkdown from "react-markdown";
import cv from './cv.md';


export default function() {
  return <ReactMarkdown>{cv}</ReactMarkdown>
}
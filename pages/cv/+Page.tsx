import ReactMarkdown from "react-markdown";
import cv from './cv.md';
import cvPdf from '../../assets/cv.pdf?url';

import { FaDownload } from "react-icons/fa";
import { Container } from "./components";

export default function () {
  return (
    <Container>
      <div className="cv-dl clickable-icon" onClick={() => {
        const anchor = document.createElement("a");
        anchor.href = cvPdf;
        anchor.download = 'cv.pdf';
        anchor.click();
      }}>
        <FaDownload />
      </div>
      <ReactMarkdown>{cv}</ReactMarkdown>
    </Container>
  )
}
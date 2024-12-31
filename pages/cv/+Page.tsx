import cvPdf from '../../assets/cv.pdf?url';

import { FaDownload } from "react-icons/fa";
import { Container } from "./components";

const triggerDownload = () => {
  const anchor = document.createElement("a");
  anchor.href = cvPdf;
  anchor.download = 'cv.pdf';
  anchor.click();
}

export default function () {
  return (
    <Container>
      <h1>CV
        <div className="clickable-icon cv-dl" onClick={triggerDownload}>
          <FaDownload />
        </div>
      </h1>

      <object data={cvPdf} type="application/pdf" width='100%' height='800px'>
        Click the <FaDownload /> icon to download the PDF file.
      </object>
    </Container>
  )
}
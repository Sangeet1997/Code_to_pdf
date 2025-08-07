import { jsPDF } from 'jspdf';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('python', python);

export async function generateOrAppendPdf(code, existingBlob) {
  const doc = existingBlob ? await loadExistingPdf(existingBlob) : new jsPDF();

  const formattedCode = hljs.highlight(code, { language: 'python' }).value;

  doc.addPage();
  doc.setFont('Courier', 'normal');
  const lines = formattedCode
    .replace(/<\/?[^>]+(>|$)/g, '') // strip HTML tags
    .split('\n');

  let y = 10;
  lines.forEach((line) => {
    if (y > 280) {
      doc.addPage();
      y = 10;
    }
    doc.text(line || ' ', 10, y);
    y += 7;
  });

  const pdfBlob = doc.output('blob');
  return pdfBlob;
}

async function loadExistingPdf(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  return new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' }).loadFile(arrayBuffer);
}

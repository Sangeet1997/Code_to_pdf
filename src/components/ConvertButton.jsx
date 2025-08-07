import React from 'react';
import { generateOrAppendPdf } from '../utils/pdfGenerator';

function ConvertButton({ code, pdfBlobRef }) {
  const handleClick = async () => {
    if (!code.trim()) return alert('Please enter Python code!');
    pdfBlobRef.current = await generateOrAppendPdf(code, pdfBlobRef.current);
  };

  return (
    <button onClick={handleClick}>Convert to PDF</button>
  );
}

export default ConvertButton;

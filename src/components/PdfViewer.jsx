import React, { useState } from 'react';

function PdfViewer({ pdfBlobRef }) {
  const [url, setUrl] = useState('');

  const handleView = () => {
    if (!pdfBlobRef.current) return alert('No PDF generated yet!');
    const newUrl = URL.createObjectURL(pdfBlobRef.current);
    setUrl(newUrl);
    window.open(newUrl, '_blank');
  };

  return (
    <button onClick={handleView}>View PDF</button>
  );
}

export default PdfViewer;

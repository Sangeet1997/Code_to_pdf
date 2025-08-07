import React from 'react';

function CodeInput({ code, setCode }) {
  return (
    <textarea
      rows={20}
      cols={80}
      placeholder="Paste your Python code here..."
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
  );
}

export default CodeInput;

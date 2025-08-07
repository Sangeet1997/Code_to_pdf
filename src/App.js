// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef } from 'react';
import CodeInput from './components/CodeInput';
import ConvertButton from './components/ConvertButton';
import PdfViewer from './components/PdfViewer';

function App() {
  const [code, setCode] = useState('');
  const pdfBlobRef = useRef(null);

  return (
    <div className="app-container">
      <h1>Python to PDF Converter</h1>
      <CodeInput code={code} setCode={setCode} />
      <ConvertButton code={code} pdfBlobRef={pdfBlobRef} />
      <PdfViewer pdfBlobRef={pdfBlobRef} />
    </div>
  );
}

export default App;

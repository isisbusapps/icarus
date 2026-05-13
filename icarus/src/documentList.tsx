import React, { useState } from 'react'

const DocumentList = () => {
  // Replace this with pdf list
  const documents = [
    '1.pdf',
    '2.pdf',
    '3.pdf'
  ];

  return (
    <div style={{ padding: '25px', fontFamily: 'sans-serif' }} className='documentLibrary'>
      <h2>Document Library</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {documents.map((doc, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <a 
              href={`/documents/${doc}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}
            >
              📄 {doc.replace(/_/g, ' ')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
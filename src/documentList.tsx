import React, { useState, useEffect } from 'react';

const DocumentList = ({ data = [], selectedCategory }) => {
  // State to hold the filtered filenames
  const [documents, setDocuments] = useState([]);

  // Trigger filtering whenever selectedCategory or data changes
  useEffect(() => {
    console.log("in docList and have " + selectedCategory + " selected");
    
    // Filter relevant documents from data
    const relevantDocuments = [];
    for (let i = 0; i < data.length; i++) {
      console.log("Comparing " + data[i].Category + " with: " + selectedCategory);
      if (data[i].Category === selectedCategory) {
        relevantDocuments.push(data[i].Filename);
      }
    }

    // Update state to trigger a re-render
    setDocuments(relevantDocuments);
  }, [selectedCategory, data]); // Dependency array triggers the effect

  return (
    <div style={{ padding: "25px", fontFamily: "sans-serif" }} className="documentLibrary">
      <h2>Document Library</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {documents.map((doc, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <a 
              href={`/data/${doc}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}
            >
              📄 {doc.replace(/_/g, " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const DocLoader = ({data, setData}) => {
  
    //GF removed state variable defn from here

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const csvFilePath = '/data/docIndex.csv';

    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      skipEmptyLines: true, 
      complete: (results) => {
        setData(results.data);
        setIsLoading(false);
        console.log(results);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <p>Loading files...</p>;

  return (
    <div>
    </div>
  );
};

export default DocLoader;
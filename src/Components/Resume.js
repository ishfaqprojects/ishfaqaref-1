import React from 'react';
import cv from "../assets/MuhammadIshfaq-MERN.pdf"
import download from "../assets/download-svgrepo-com.svg"

const DownloadPDFButton = () => {
  const downloadPdf = () => {

    const pdfPath = cv;
    
    fetch(pdfPath)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ishfaq-reactjs-cv.pdf');

        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Error fetching PDF: ', error);
      });
  };

  return (
    <div className='flex justify-center'>
      <button onClick={downloadPdf} className='flex flex-row '>CV <img className='ml-2' src={download} width={20} height={16}/></button>
    </div>
  );
};

export default DownloadPDFButton;

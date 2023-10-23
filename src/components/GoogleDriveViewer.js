import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleDriveViewer = ({ folderLink }) => {
  const [folderContents, setFolderContents] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch folder contents using the Google Drive API
    const fetchFolderContents = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderLink}' in parents&key=AIzaSyArPRD7PSo2AZYhvH3qt59GX2U6vcq9Stw`
        );
        setFolderContents(response.data.files);
      } catch (error) {
        console.error('Error fetching folder contents:', error);
      }
    };

    if (folderLink) {
      fetchFolderContents();
    }
  }, [folderLink]);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const renderFileList = () => {
    return folderContents.map((file) => (
      <div key={file.id} onClick={() => handleFileClick(file)}>
        {file.name}
      </div>
    ));
  };

  const renderFileViewer = () => {
    if (selectedFile && selectedFile.mimeType === 'application/pdf') {
      return (
        <iframe
          src={`https://drive.google.com/file/d/${selectedFile.id}/preview`}
          title={selectedFile.name}
          width="100%"
          height="500px"
        />
      );
    } else {
      return <p>Select a PDF file to view.</p>;
    }
  };

  return (
    <div>
      <h1>Google Drive Folder Viewer</h1>
      <div className="file-list">{renderFileList()}</div>
      <div className="file-viewer">{renderFileViewer()}</div>
    </div>
  );
};

export default GoogleDriveViewer;

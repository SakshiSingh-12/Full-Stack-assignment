import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
      setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('http://localhost:8000/upload/', {
          method: 'POST',
          body: formData,
      });
      const data = await response.json();
      console.log(data);
  };

  return (
      <div>
          <h1>Document Upload</h1>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
      </div>
  );
}

export default App;

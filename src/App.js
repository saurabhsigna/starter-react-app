"use client";
import React, { useState } from "react";
import { uploadFile } from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;
const S3_BUCKET = process.env.REACT_APP_BUCKET_NAME;
const REGION = process.env.AWS_REGION;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then((data) => console.log(data + "i"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>React S3 File Upload</div>
      {
        <div>
          <div>bucket name {S3_BUCKET}</div>
          <div>region {REGION}</div>
          <div>ACCess key {ACCESS_KEY}</div>
        </div>
      }
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
  );
};

export default App;

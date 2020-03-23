import React, { useState } from "react";
import axios from "axios";
import {prod,dev} from 'utils/constants';
function App() {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const UPLOAD_ENDPOINT = `${prod.url.API_URL}/timezone`;

  const handleSubmit = async e => {
    e.preventDefault();
    //if await is removed, console log will be called before the uploadFile() is executed completely.
    //since the await is added, this will pause here then console log will be called
    let res = await uploadFile(file);
    console.log(res.data);
    setUploaded(true);
    console.log(uploaded);
  };

  const uploadFile = async file => {
    const formData = new FormData();
    formData.append("timezone-data", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  };

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const UploadedDiv = () => {
    if (uploaded) return <h6>File has been uploaded</h6>;
    else
    return <div></div>
  };

  return (
    <form onSubmit={handleSubmit}>
      <UploadedDiv/>
      <input type="file" onChange={handleOnChange} />
      <button type="submit">Upload File</button>
    </form>
  );
}

export default App;

//Modify the UPLOAD_ENDPOINT with the API URL.
//The uploaded file can be retreived via $_FILES['avatar'] on the server-side(PHP).

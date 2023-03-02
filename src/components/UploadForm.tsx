import { useState } from "react";


const UploadForm = () => {
  const [file, setFile] = useState<any>(null);
  const [error, setError] = useState("");

  const allowedTypes = ["image/png", "image/jpeg"];

  const changeHandler = (e: any) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;

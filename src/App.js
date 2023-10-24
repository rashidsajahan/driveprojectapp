import { useRef } from "react";

function App() {
  const fileInputRef = useRef(null);

  const handleFileUpload = async () => {
    const files = fileInputRef.current.files;

    if (files.length > 0) {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        console.log("files[i]", files[i]);
        formData.append("files", files[i]);
        console.log("formData", formData);
      }
      console.log("files", files);

      try {
        console.log("filestry", files);
        console.log("formDatatry", formData);

        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        console.log("response", response);

        const data = await response.json();
        console.log("uploaded files: ", data.files);
        fileInputRef(null)
      } catch (error) {
        console.log("error");
      }
    }
  };
  return (
    <div>
      <h1>Upload files</h1>
      <input type="file" multiple ref={fileInputRef} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default App;

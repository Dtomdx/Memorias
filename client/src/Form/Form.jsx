import React, { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData)
  }

  const convertToBase64 = (selectedFile) => {
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onload = () => {
      //console.log('called: ', reader)
      //setBase64IMG(reader.result)
      setPostData(prevData => ({...prevData, selectedFile:reader.result}))
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    //console.log(acceptedFiles[0])
    convertToBase64(acceptedFiles[0])
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ 
      onDrop,
      accept: {
        'image/*': ['jpeg', 'png', '.jpg', '.gif']
      },
      maxFiles: 1
    });

  return (
    <div className={`p-4 shadow-lg mt-8`}>
      <form
        action=""
        className={`p-1 flex flex-col justify-center gap-y-6`}
        onSubmit={handleSubmit}
      >
        <h4 className={`text-2xl`}>
          Creando una Memoria
        </h4>
        <input
          name="creator"
          className={`input_form`}
          placeholder="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          name="title"
          className={`input_form`}
          placeholder="Titulo"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          name="message"
          className={`input_form`}
          placeholder="Mensaje"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          name="tags"
          className={`input_form`}
          placeholder="Etiqueta"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div {...getRootProps()} className={`shadow-2xl`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Sube tu imagen</p>
          )}
        </div>
        <div>
          <button className={`mb-2.5 bg-blue-800 text-white uppercase w-full rounded-md py-1`}>
            Enviar
          </button>
        </div>
        <div>
          <button className={`mb-2.5 bg-red-700 text-white uppercase w-full rounded-md py-1`}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

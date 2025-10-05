import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* lib para subir imgs */
import { useDropzone } from "react-dropzone";

/* store redux */
import { useDispatch, useSelector } from "react-redux";
/* actions redux */
import { createPost, updatePost } from "../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      //Editando -> actualizar
      dispatch(updatePost(currentId, { ...postData, name: user?.result.name }));
    } else {
      //Creado -> Crear post
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const convertToBase64 = (selectedFile) => {
    //console.log(selectedFile.target.files[0])
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      
      setPostData((prevData) => ({ ...prevData, selectedFile: reader.result }));
    };
  };

  if(!user?.result?.name){
    return (
      <div className={`mt-4`}>
        <p className={`flex justify-center shadow-2xl rounded-2xl p-5`}>
          Por favor Inicia session para crear tus propias memorias
        </p>
      </div>
    )
  }

  

  return (
    <div className={`p-4 shadow-2xl mt-8 rounded-2xl`}>
      <form
        action=""
        className={`p-1 flex flex-col justify-center gap-y-4`}
        onSubmit={handleSubmit}
      >
        <h4 className={`text-2xl text-center`}>
          {currentId ? "Editando" : "Crear"} una Memoria
        </h4>

        <input
          name="title"
          className={`input_form`}
          placeholder="Titulo"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          name="message"
          className={`input_form`}
          placeholder="Mensaje"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          name="tags"
          className={`input_form`}
          placeholder="Etiqueta"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={`flex flex-col`}>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
          >
            Subir Imagen
          </label>
          <input
            name="selectedFile"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
            type="file"
            onChange={(e) => convertToBase64(e.target.files[0])}
          />
        </div>
          <div>
            <div>
            <button
              type="submit"
              className={`mb-2.5 bg-blue-800 text-white uppercase w-full rounded-md py-1`}
            >
              Enviar
            </button>
          </div>
          <div>
            <button
              type="button"
              className={`mb-2.5 bg-red-700 text-white uppercase w-full rounded-md py-1`}
              onClick={clear}
            >
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

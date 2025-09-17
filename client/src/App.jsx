import { useState } from "react";


import memorias from "./images/memories.png";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
/* componentes */
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts"/>}/>
        <Route path="/posts" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

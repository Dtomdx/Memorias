import { useState } from "react";


import memorias from "./images/memories.png";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
/* componentes */
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts"/>}/>
        <Route path="/posts" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

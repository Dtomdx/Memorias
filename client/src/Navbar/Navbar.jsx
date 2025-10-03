import { useEffect } from "react";
import { Link, useNavigate, useLocation, Links } from "react-router-dom";

import memoriesLogo from "../images/memoriesLogo.png";
import memoriesText from "../images/memoriesText.png";
import Auth from "../components/Auth/Auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Button } from "@mui/material";
import { jwtDecode } from "jwt-decode";


const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  

  const logout = () => {
    dispatch({type: "LOGOUT"})
    history("/")
    setUser(null);
  }

  useEffect(()=>{
        const token = user?.token;
        //jwt renueve
        if(token){
            const decodedToken = jwtDecode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
  return (
    <nav className={`flex md:flex-row md:justify-between border md:rounded-2xl md:mx-8 md:items-center md:px-2.5 md:py-5 flex-col`}>
      <Link
        to="/"
        className={`flex items-center`}
      >
        <img
          src={memoriesText}
          alt="icon"
          className={`h-11`}
        />
        <img
          src={memoriesLogo}
          alt="memorias"
          className={`h-10 ml-2.5 mt-1.5`}
        />
      </Link>
      {
        user ? (
          <div className={`flex md:justify-end md:w-48 md:items-center sm:w-auto sm:mt-5 sm:justify-center`}>
            <Avatar>
              {user.result.name.charAt(0)}
            </Avatar>
            <p className={`flex items-center text-center `}>
              {user.result.name}
            </p>
            <Button variant="contained" className={`ml-5`} onClick={logout} color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="contained" component={Link} className={`ml-5`} to="/auth" color="primary">
            Sign In
          </Button>
        )
      }
    </nav>
  );
};

export default Navbar;

import { Link, useNavigate, useLocation } from "react-router-dom";

import memoriesLogo from "../images/memoriesLogo.png";
import memoriesText from "../images/memoriesText.png";

const Navbar = () => {
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
      <div className={`flex md:justify-between md:w-96 md:items-center sm:w-auto sm:mt-5 sm:justify-center`}>
        <p className={`flex items-center text-center `}>
          User
        </p>
        <button className={`ml-5`}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

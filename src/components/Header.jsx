import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/images/logo.png";
const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/team",
    name: "Team",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="flex flex-row justify-between px-8 py-8 items-center">
      <a href="https://codetoproducts.com">
        <img
          src={logo}
          alt="Codetoproducts"
          className="w-[96px] aspect-square rounded-full"
        />
      </a>

      <nav className="flex-row justify-center items-center h-full gap-6 hidden lg:flex">
        {routes.map((routeObject, index) => (
          <Link to={routeObject.path} key={index}>
            <span
              className={`border-b-2 ${
                location.pathname === routeObject.path
                  ? "text-emerald-500 border-emerald-500"
                  : "text-white border-transparent"
              }  hover:text-emerald-500 `}
            >
              {routeObject.name}
            </span>
          </Link>
        ))}
        <Link to={"/contact"}>
          <button className="bg-emerald-500 text-slate-900 px-5 py-2 rounded-full hover:bg-emerald-400">
            Hire Us
          </button>
        </Link>
      </nav>
      <div className="flex flex-row justify-center items-center h-full gap-6 lg:hidden">
        <motion.div
          className="flex flex-col justify-start items-end h-full gap-6 fixed top-0 right-0 z-50 bg-slate-800 w-80 py-8 px-5"
          initial={{ x: "100%" }}
          exit={{ x: "100%" }}
          animate={{ x: menuOpen ? "0%" : "100%" }}
          transition={{ type: "linear" }}
        >
          <FontAwesomeIcon
            className="text-emerald-500"
            icon={faClose}
            size="2x"
            onClick={() => setMenuOpen(false)}
          />
          <Link to={"/"}>
            <h1 className="text-2xl text-white w-full left-0 pr-5 py-8">
              Codetoproducts{" "}
              <span className="text-2xl text-emerald-500">.</span>
            </h1>
          </Link>
          <nav className="flex flex-col justify-start items-center w-full gap-5">
            {routes.map((routeObject, index) => (
              <Link to={routeObject.path} key={index}>
                <span
                  className={`border-b-2 ${
                    location.pathname === routeObject.path
                      ? "text-emerald-500 border-emerald-500"
                      : "text-white border-transparent"
                  }  hover:text-emerald-500 `}
                >
                  {routeObject.name}
                </span>
              </Link>
            ))}
          </nav>
        </motion.div>
        <FontAwesomeIcon
          className="text-emerald-500"
          icon={faBars}
          size="2x"
          onClick={() => setMenuOpen(true)}
        />
      </div>
    </header>
  );
};

export default Header;

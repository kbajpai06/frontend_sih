import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All-Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  const [MobileNav, setMobileNav] = useState("hidden");

  return (
    <>
      <nav className="z-50 relative flex bg-green-900 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src="/logo1.png" alt="logo" />
        </Link>

        <div className="nav-links-hellscript block md:flex items-center gap-4">
          <div className="hidden md:flex font-thin gap-4">
            {links.map((items, i) => (
              <Link
                to={items.link}
                className="hover:text-green-300 transition-all duration-300"
                key={i}
              >
                {items.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/Login"
              className="px-4 py-1 font-thin border border-green-300 rounded hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              className="px-4 py-1 font-thin bg-green-600 rounded hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Sign
            </Link>
          </div>
          <button
            className="block md:hidden text-white text-2xl hover:text-green-300"
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      
      <div
        className={`${MobileNav} text-white glass absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}  
        style={{ height: "100vh", width: "100vw" }}
      >
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`${MobileNav}text-white text-4xl mb-8 font-thin hover:text-green-300 transition-all duration-300`}
            key={i}
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {items.title}
          </Link>
        ))}
        <Link
          to="/Login"
          className={`${MobileNav} px-8 pl-3 pr-3 text-white text-4xl mb-8 py-2 font-thin border border-green-300 rounded hover:bg-white hover:text-green-900 transition-all duration-300`}
        >
          Login
        </Link>
        <Link
          to="/SignUp"
          className={`${MobileNav} px-8 py-2 mb-8 pl-3 pr-3 text-4xl text-white font-thin bg-green-600 rounded hover:bg-white hover:text-green-900 transition-all duration-300`}
        >
          Signup
        </Link>
      </div>
    </>
  );
}

export default Navbar;

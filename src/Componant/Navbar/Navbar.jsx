import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [showMedia, setshowMedia] = useState(false);
  const [sticky, setsticky] = useState(false);
  const [search, setsearch] = useState(false);
  const [menuBack, setmenuBack] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setsticky(true) : setsticky(false);
    });
  }, []);
  return (
    <>
      <nav className={`main-nav ${sticky ? "dark-nav " : ""}`}>
        <div className={showMedia ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li className={menuBack === "home" ? "menu-back " : <></>}>
              <Link to="/" onMouseOver={() => setmenuBack("home")}>
                Home
              </Link>
            </li>

            <li className={menuBack === "contact" ? "menu-back" : <></>}>
              <Link to="/contact" onMouseOver={() => setmenuBack("contact")}>
                Contact Us
              </Link>
            </li>
            <li className={menuBack === "blog" ? "menu-back" : <></>}>
              <Link to="/blog" onMouseOver={() => setmenuBack("blog")}>
                Blogs
              </Link>
            </li>
            <li className={menuBack === "verification" ? "menu-back" : <></>}>
              <Link
                to="/verification"
                onMouseOver={() => setmenuBack("verification")}
              >
                Verification
              </Link>
            </li>
            <li className={menuBack === "course" ? "menu-back" : <></>}>
              <Link to="/course" onMouseOver={() => setmenuBack("course")}>
                Course Registration
              </Link>
            </li>
            <li className={menuBack === "database" ? "menu-back" : <></>}>
              <Link to="/database" onMouseOver={() => setmenuBack("database")}>
                Database System
              </Link>
            </li>
          </ul>
        </div>
        {/* search section */}
        <div className={search ? "search searchOpen" : "search"}>
          <input type="search" name="" id="" placeholder="Search here..." />
        </div>
        <div className="search-icon">
          <span>
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => setsearch(!search)}
            ></i>
          </span>
        </div>
        <div className="menu-icon">
          <a href="#" onClick={() => setshowMedia(!showMedia)}>
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

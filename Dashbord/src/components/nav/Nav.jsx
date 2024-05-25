import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const links = [
  { title: "Book table", path: "/" },
  { title: "Our Specials", path: "our-specials" },
  { title: "Top Dishe", path: "top-dishes" },
  { title: "Breakfast", path: "breakfasts" },
  { title: "Lunch", path: "lunches" },
  { title: "Dinner", path: "dinners" },
];

const ItemLinks = () => {
    return (
      <div className="flex flex-col ">
        {links.map((link, i) => (
          <NavLink
            key={i}
            className={({ isActive }) => `
    py-1 text-lg w-48 font-medium hover:bg-Secondary-tow  border-x-gray-800
    ${isActive && "bg-Secondary text-white"}
  `}
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    );
}

function Nav() {
  const [nav, setNav] = useState(false);
    const [active, setActive] = useState(null)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setActive(true);
        setNav(true);
      } else {
        setActive(false);
        setNav(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

    return (
      <nav
        className=" h-auto max-md:px-8 py-4 bg-Secondary-three  md:w-60 md:h-full text-center"
      >
        <div className="flex md:flex-col items-center justify-between ">
          <Link to="/">
            <img src="./src/assets/logo.svg" alt="" />
          </Link>
          {active && (
            <div
              onClick={() => setNav(!nav)}
              className="menu w-7 h-5 flex flex-col justify-between cursor-pointer"
            >
              <span className="h-1 w-full rounded-lg bg-black"></span>
              <span className="h-1 w-full rounded-lg bg-black"></span>
              <span className="h-1 w-full rounded-lg bg-black"></span>
            </div>
          )}
          <div
            className={`absolute md:relative links max-md:h-screen z-20 max-md:bg-Secondary-three ${
              nav && "active"
            }`}
          >
            {!nav && <ItemLinks />}
          </div>
        </div>
      </nav>
    );
}

export default Nav

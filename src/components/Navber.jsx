import React, { useState } from "react";
import { Link } from "react-router";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import Container from "./Container";

// menu item data with link , text and id
const menuItem = [
  {
    id: 1,
    text: "HOME",
    link: "/",
  },
  {
    id: 2,
    text: "about",
    link: "/about",
  },
  {
    id: 3,
    text: "PROJECT",
    link: "/project",
  },
  {
    id: 4,
    text: "PAGES",
    link: "/page",
  },
  {
    id: 5,
    text: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    text: "Services",
    link: "/service",
  },
  {
    id: 7,
    text: "BLOG",
    link: "/blog",
  },
];

// navber component
const Navber = () => {
  return (
    <nav className="shadow-md py-6 bg-white">
      <Container>
        <div className="flex items-center justify-between">
          {/* navber logo with link */}
          <Link to="/">
            <img src="./Logo.svg" alt="Logo" />
          </Link>
          {/* menuber  */}
          <ul className="flex items-center justify-center gap-5 uppercase text-sm">
            {menuItem.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>
                  {item.text} <i className="fa-solid fa-angle-down"></i>
                </Link>
              </li>
            ))}
          </ul>
          {/* search bar with icon that usually button*/}
          <div className="flex items-center gap-3">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              className="border  p-2 rounded"
            />
            {/* call it from inline Button Component */}
            <Button img={search} active={true} />
            <Button img={cart} active={false} />
          </div>
        </div>
      </Container>
    </nav>
  );
};

// button component for search and cart icon
function Button({ img, active }) {
  return (
    <button
      className={`${active ? "bg-[#25C6DA]" : "bg-[#F3F6FB]"} p-2 rounded`}
    >
      <img src={img} alt="Icon" />
    </button>
  );
}

export default Navber;

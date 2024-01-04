import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav bg-white h-28 w-full flex fixed p-4 shadow-xl">
        <img
          src="/assets/logo/logo-noBG.png"
          alt="logo"
          className="company-logo ml-16"
        />

        
        <a href="">Home</a>
        <a href="">Cateogry</a>
        <a href="">Wishlist</a>
        <a href="">Cart</a>
       < svg width="inherit" height="800autopx" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"/></svg>

      </nav>
    </div>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
import React from "react";

import logo from "../assets/logo.jpg";
import User from "../svg/User";
import Search from "../svg/Search";
import Heart from "../svg/Heart";
import Cart from "../svg/Cart";

function Navbar() {
  return (
    <nav className="md:flex md:justify-between md:align-middle md:items-center md:px-20 md:py-6">
      <div className="md:flex md:items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <h1 className="text-3xl">Furniro</h1>
      </div>
      <div>
        <ul className="md:flex  ">
          <li className="pr-[20px]">
            <a className="" href="">
              Home
            </a>
          </li>
          <li className="pr-[20px]">
            <a href="">Shop</a>
          </li>
          <li className="pr-[20px]">
            <a href="">About</a>
          </li>
          <li className="pr-[20px]">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="md:flex">
        <div className="pr-[20px]">
          <User />
        </div>
        <div className="pr-[20px]">
          <Heart />
        </div>
        <div className="pr-[20px]">
          <Search />
        </div>
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;

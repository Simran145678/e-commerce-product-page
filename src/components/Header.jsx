import React from "react";
import avatarIcon from "../assets/images/image-avatar.png";
import menuIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close.svg";

export default function Header({
  handleMenuClick,
  mobileMenu,
  handleCartClick,
  cartData,
}) {
  return (
    <header className="container relative flex justify-between items-center px-10 py-6 md:border-b-[1px] border-grayishBlue">
      <div className="flex items-center">
        <img
          className="w-4 h-4 md:hidden mr-4 mt-2"
          onClick={() => handleMenuClick()}
          src={mobileMenu ? closeIcon : menuIcon}
          alt="hamburger menu"
          aria-label="Click to expand the navigation menu"
        />
        {/* Expanded mobile menu */}
        <div
          className={`${
            !mobileMenu ? "hidden" : ""
          } fixed md:hidden top-0 left-0 w-2/3 bg-white p-10 h-screen z-50`}
        >
          <button className="mb-8" onClick={() => handleMenuClick()}>
            <img
              src={closeIcon}
              alt="cross"
              aria-label="Click on this image to close the navigation menu"
            />
          </button>
          <nav className="  ">
            <ul className=" ">
              <li className="my-4 font-bold">Collections</li>
              <li className="my-4 font-bold">Men</li>
              <li className="my-4 font-bold">Women</li>
              <li className="my-4 font-bold">About</li>
              <li className="my-4 font-bold">Contact</li>
            </ul>
          </nav>
        </div>
        {mobileMenu && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={() => handleMenuClick()}
          ></div>
        )}
        <p className="text-3xl font-bold mr-12">sneakers</p>
        <nav className="md:flex items-center hidden">
          <ul className="flex items-end ">
            <li className="mr-8 text-darkGrayishBlue underlineOnHover hover:text-black cursor-pointer">
              Collections
            </li>
            <li className="mr-8 text-darkGrayishBlue underlineOnHover hover:text-black cursor-pointer">
              Men
            </li>
            <li className="mr-8 text-darkGrayishBlue underlineOnHover hover:text-black cursor-pointer">
              Women
            </li>
            <li className="mr-8 text-darkGrayishBlue underlineOnHover hover:text-black cursor-pointer">
              About
            </li>
            <li className="mr-8 text-darkGrayishBlue underlineOnHover hover:text-black cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handleCartClick()}
          className="relative w-full h-full justify-center items-center mt-2 md:mt-0"
        >
          <svg
            className=" w-8 h-8 mt-2 cursor-pointer fill-[#69707D] hover:fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
          {cartData.quantity > 0 && (
            <div className="absolute bg-orange text-white text-[8px] top-1 right-7 px-2 rounded-md">
              {cartData.quantity}
            </div>
          )}
        </button>
        <button className="w-16">
          <img
            className="w-full cursor-pointer object-cover hover:border-2 hover:rounded-full hover:border-orange"
            src={avatarIcon}
            alt="your profile picture"
          ></img>
        </button>
      </div>
    </header>
  );
}

import React from "react";
import removeButton from "../assets/images/icon-delete.svg";

export default function Cart({ openCart, handleremoveFromCart, cartData }) {
  return (
    <div
      className={`${
        !openCart ? "hidden  " : "flex justify-center md:block"
      }  container  relative `}
    >
      <div className="shadow-xl absolute w-11/12 md:min-w-72 min-h-52 md:w-auto md:-top-4 md:right-6 bg-white rounded-lg p-3 mt-2 z-50">
        {/* Your content here */}

        <p className="font-bold">Cart</p>
        <div className="h-[1px] w-full bg-grayishBlue my-4"></div>
        {cartData.quantity === 0 ? (
          <div className="flex items-center justify-center my-2 font-bold  text-darkGrayishBlue">
            Your Cart is empty
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center">
                <img
                  className="w-14 h-14 rounded-md"
                  src={cartData.image}
                  alt=""
                />
                <div className="px-2 text-grayishBlue">
                  <p className="text-sm pr-2">{cartData.name}</p>
                  <p className="text-sm inline">
                    {`$${cartData.price * (cartData.discount / 100)} x 
                ${cartData.quantity} `}
                  </p>
                  <span className="inline text-sm text-black font-bold">
                    $
                    {cartData.price *
                      (cartData.discount / 100) *
                      cartData.quantity}
                  </span>
                </div>
              </div>
              <button onClick={() => handleremoveFromCart()}>
                <img src={removeButton} alt="" />
              </button>
            </div>
            <button className="font-bold text-sm w-full bg-orange my-4 rounded-lg py-3">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

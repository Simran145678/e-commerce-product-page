import React from "react";
import ProductGallery from "./ProductGallery";

export default function Main({
  cartData,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <section className="md:p-10 flex flex-col md:flex-row container">
      <ProductGallery />
      <div className="w-full md:w-1/2 p-6 xl:p-10">
        <small className="font-bold text-darkGrayishBlue text-xs tracking-widest my-4">
          SNEAKER COMPANY
        </small>
        <h2 className="text-4xl font-bold tracking-wider my-4">
          {cartData.name}
        </h2>
        <p className="text-xs text-darkGrayishBlue my-4 max-w-80">
          {cartData.description}
        </p>
        <div className="flex md:flex-col items-center md:items-start justify-between">
          <div className="">
            <p className="text-2xl font-bold tracking-wider inline-block my-2">
              ${cartData.price * (cartData.discount / 100)}
            </p>{" "}
            <p className="inline text-white bg-black px-2 rounded-md text-sm ml-2">
              {cartData.discount}%
            </p>
          </div>

          <small className=" md:block font-bold text-darkGrayishBlue line-through">
            ${cartData.price}
          </small>
        </div>
        <div className="flex flex-col md:flex-row  w-full my-4 ">
          <div className="flex w-full md:w-1/5 justify-between bg-lightGrayishBlue p-2 rounded-lg mr-4">
            <button onClick={() => handleDecrement()}>
              <svg
                className="bg-orange hover:bg-[#ffa866]"
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    id="a"
                  />
                </defs>
                <use fillRule="nonzero" xlink:href="#a" />
              </svg>
            </button>
            <p>{cartData.quantity}</p>
            <button onClick={() => handleIncrement()}>
              <svg
                className="svg-icon fill-current text-orange hover:text-[#ffa866]" // Tailwind classes
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use fill="currentColor" xlinkHref="#b" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => handleAddToCart()}
            className="w-full md:w-1/3 bg-orange hover:bg-[#ffa866] rounded-lg text-sm font-bold p-2 mt-4 md:mt-0"
          >
            <svg
              className="inline w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import shoeImg1 from "../assets/images/image-product-1.jpg";
import shoeImg2 from "../assets/images/image-product-2.jpg";
import shoeImg3 from "../assets/images/image-product-3.jpg";
import shoeImg4 from "../assets/images/image-product-4.jpg";

export default function ProductGallery() {
  const productImages = [
    { image: shoeImg1 },
    { image: shoeImg2 },
    { image: shoeImg3 },
    { image: shoeImg4 },
  ];
  const [currentImage, setCurrentImage] = React.useState(
    productImages[0].image
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const handleLargeImageClick = () => {
    setIsOpen(true);
  };
  const handleThumbnailClick = (largeImage, index) => {
    setCurrentImage(largeImage);
    setPhotoIndex(index);
  };

  const closeLightBox = () => {
    setIsOpen(false);
  };
  const goToPrev = () => {
    if (photoIndex === 0) {
      return;
    }
    setPhotoIndex(photoIndex - 1) % productImages.length;
  };
  const goToNext = () => {
    console.log(photoIndex);
    if (photoIndex === productImages.length - 1) {
      return;
    }
    setPhotoIndex(photoIndex + 1) % productImages.length;
  };
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center mr-2">
      <div className=" ">
        <div className="relative w-full md:hidden ">
          <button
            style={{
              top: "50%",
              left: "8%",
              transform: "translate(-50%, -50%)",
            }}
            className="absolute bg-white p-3 rounded-full w-12 h-12 "
            onClick={goToPrev}
          >
            <svg
              className="stroke-black hover:stroke-orange ml-1"
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <img
            className="w-full h-auto"
            src={productImages[photoIndex].image}
            alt={`Product ${photoIndex + 1}`}
          />

          <button
            style={{
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="absolute bg-white p-3 rounded-full w-12 h-12 -right-2 "
            onClick={goToNext}
          >
            <svg
              className="stroke-black hover:stroke-orange ml-2"
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2 1 8 8-8 8"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="w-full md:max-w-[330px] hidden md:block ">
          <img
            className="object-cover md:rounded-xl cursor-pointer"
            src={currentImage}
            alt="Product"
            onClick={handleLargeImageClick}
          />
        </div>
        <div className="hidden md:flex mt-6 justify-between">
          {productImages.map((images, index) => {
            return (
              <img
                key={index}
                className={`${
                  photoIndex === index
                    ? "opacity-80 border-2 border-orange"
                    : ""
                } flex w-16 h-16 rounded-lg cursor-pointer hover:border-2 hover:border-orange hover:opacity-80 `}
                src={images.image}
                alt={`image ${index + 1}`}
                onClick={() => handleThumbnailClick(images.image, index)}
              />
            );
          })}

          {isOpen && (
            <>
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  zIndex: 1000,
                }}
              >
                <button
                  className=" z-50 mb-4 translate-x-56"
                  onClick={closeLightBox}
                >
                  <svg
                    className="fill-white hover:fill-orange"
                    width="14"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex justify-center items-center">
                  <button
                    className="bg-white p-3 rounded-full w-12 h-12 translate-x-6"
                    onClick={goToPrev}
                  >
                    <svg
                      className="stroke-black hover:stroke-orange ml-1"
                      width="12"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        stroke-width="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                  <img
                    className="w-[450px] rounded-xl "
                    src={productImages[photoIndex].image}
                    alt="Large view of the product"
                  />
                  <button
                    className="bg-white p-3 rounded-full w-12 h-12 -translate-x-6"
                    onClick={goToNext}
                  >
                    <svg
                      className="stroke-black hover:stroke-orange ml-2"
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        stroke-width="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex mt-6 w-[450px] justify-evenly">
                  {productImages.map((images, index) => {
                    return (
                      <img
                        key={index}
                        className={`${
                          photoIndex === index
                            ? "opacity-80 border-2 border-orange"
                            : ""
                        } flex w-16 h-16 rounded-lg cursor-pointer hover:border-2 hover:border-orange hover:opacity-70 `}
                        src={images.image}
                        alt={`image ${index + 1}`}
                        onClick={() =>
                          handleThumbnailClick(images.image, index)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

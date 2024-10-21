import "./App.css";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Main from "./components/Main";
import shoeImg1 from "./assets/images/image-product-1.jpg";

function App() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const [cartData, setCartData] = React.useState({
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: "250",
    discount: "50",
    quantity: 0,
    image: shoeImg1,
  });

  const handleCartClick = () => {
    setOpenCart(!openCart);
    console.log(openCart);
  };
  const handleMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleAddToCart = () => {
    setCartData((prevData) => {
      return { ...prevData, quantity: 1 };
    });
  };
  const handleIncrement = () => {
    if (cartData.quantity >= 1) {
      setCartData((prevData) => {
        return { ...prevData, quantity: prevData.quantity + 1 };
      });
    }
  };
  const handleDecrement = () => {
    if (cartData.quantity === 0) {
      return;
    }
    setCartData((prevData) => {
      return { ...prevData, quantity: prevData.quantity - 1 };
    });
  };
  const handleremoveFromCart = () => {
    setCartData((prevData) => {
      return { ...prevData, quantity: 0 };
    });
  };
  return (
    <>
      <Header
        handleMenuClick={handleMenuClick}
        mobileMenu={mobileMenu}
        handleCartClick={handleCartClick}
        cartData={cartData}
      />
      <Cart
        openCart={openCart}
        cartData={cartData}
        handleremoveFromCart={handleremoveFromCart}
      />
      <Main
        cartData={cartData}
        handleAddToCart={handleAddToCart}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </>
  );
}

export default App;

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState("");

  const handleLoginClick = () => {
    setLoginVisible(!loginVisible);
  };
  const handleCartClick = (product) => {
    setCartItemCount(product);
  };

  return (
    <>
      <Header onLoginClick={handleLoginClick} />
      <Navbar />
      {loginVisible && <LoginForm />}
    </>
  );
}

export default App;

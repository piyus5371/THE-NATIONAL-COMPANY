// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
    <BrowserRouter>
      <Header onLoginClick={handleLoginClick} />
      <Navbar />
      <Routes>
        <Route path="/" element={loginVisible && <LoginForm />}/>
      </Routes>
      
    </BrowserRouter> 
  );
}

export default App;

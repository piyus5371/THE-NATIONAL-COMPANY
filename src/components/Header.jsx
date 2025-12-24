import React from "react";
import logo from "../assets/react.svg";
import {Cart} from "react-bootstrap-icons";
import { BsGeoAlt, BsSearch } from "react-icons/bs";
import { useState } from "react";
import LoginForm from "./LoginForm.jsx";


function Header(){
  const user= {
    name: "Piyush",
    address: "Malad"
  }
  const [ItemCount, setItemCount]= useState(0);
  const [loginVisible, setLoginVisible] = useState(false);
  const CartItem=()=>{
    setItemCount(ItemCount + 1);
  }
  const handleLoginClick = () => {
    setLoginVisible(!loginVisible);
  }
  

  return (
    <div>
     <div className="container-fluid header-container">
      <div className="row header-row">
        <div className="col-1 logoContainer">
          <img src={logo} alt="Logo" className="logo-image"/>
          <h1 className="brand-name">TNC</h1>
        </div>
         <div className="col-1 userDetails">
          <h2 className="userName">Delivery to {user.name}</h2>
          <div className="userAddressContainer">
          <BsGeoAlt className="location-icon"  />
          <p className="userAddress">{user.address}</p>
          </div>
        </div>
         <div className="col-8 searchBarContainer">
          <BsSearch className="search-icon"/>
          <input type="text" className="search-Bar" placeholder="Search for Products" />
         </div>
          <div className="col-2 login-cart-container">
          <button className="login-button" onClick= {handleLoginClick}>Login</button>
          <div className="cart-btn" onClick={CartItem}>
          <Cart className="cart-icon" />
          <span className="cart-text">{ItemCount} items</span>
          </div>
          </div>
     </div>
    </div>
    <div>
       {loginVisible && <LoginForm />}
    </div>
   
   </div>
  );
};

export default Header;

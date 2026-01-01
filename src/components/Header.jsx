import "./Header.css";
import logo from "../assets/tnc2.png";
import { Cart } from "react-bootstrap-icons";
import { BsGeoAlt, BsSearch } from "react-icons/bs";
import { useState } from "react";


function Header({ onLoginClick }) {
  const user = {
    name: "Piyush",
    address: "Malad",
  };
  const [ItemCount, setItemCount] = useState(0);

  const CartItem = () => {
    setItemCount(ItemCount + 1);
  };

  return (
    <div>
      <div className="container-fluid header-container">
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="brand-name">TNC</h1>
        </div>
        <div className="userDetails">
          <h2 className="userName">Delivery to {user.name}</h2>
          <div className="userAddressContainer">
            <BsGeoAlt className="location-icon" />
            <p className="userAddress">{user.address}</p>
          </div>
        </div>
        <div className="searchBarContainer">
          <BsSearch className="search-icon" />
          <input
            type="text"
            className="search-Bar"
            placeholder="Search for Products"
          />
        </div>
        <div className="login-cart-container">
          <button className="login-button" onClick={onLoginClick}>
            Login
          </button>
          <div className="cart-btn" onClick={CartItem}>
            <Cart className="cart-icon" />
            <span className="cart-text">{ItemCount} items</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

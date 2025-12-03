import React from "react";
import logo from "../assets/react.svg";
import {Cart} from "react-bootstrap-icons";

function Header(){
  const user= {
    name: "Piyush",
    address: "Malad"
  }
  return (
    
     <div className="container-fluid header-container">
      <div className="row header-row">
        <div className="col-1 logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="brand-name">TNC</h1>
        </div>
         <div className="col-2 userDetails">
          <h2 className="userName">Delivery to {user.name}</h2>
          <p className="userAddress">location {user.address}</p>
        </div>
         <div className="col-6 searchBar">
          <input type="text" className="search-input" placeholder="Search..." />
         </div>
          <div className="col-3 login-btn">
          <button className="btn btn-success login-button">Login</button>
          <Cart className="user-icon" size={32} />
          </div>
     </div>
    </div>
   
  );
};
export default Header;

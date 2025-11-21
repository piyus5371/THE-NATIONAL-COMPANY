import React from "react";
import logo from "../assets/react.svg";
function Home(){
  return (
    <div className="home-container">
     <div className="header">
      <div className="header-row">
        <div className="header-column logo">
          <img src="/TNC-WEB/src/assets/react.svg" alt="Logo" className="logo-image" />
        </div>
         <div className="header-column searchBar"></div>
          <div className="header-column login-btn"></div>
     </div>
    </div>
    </div>
  );
};
export default Home;
import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai"
import { BsBasket3Fill } from "react-icons/bs"

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <AiOutlineSearch className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <div className="header__option"> 
            <span 
            className="header__optionLineOne">Hello Guest</span>
            <span 
            className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option"><span 
            className="header__optionLineOne">Returns</span>
            <span 
            className="header__optionLineTwo">& Orders</span> 
        </div>
        <div className="header__option"> 
            <span 
            className="header__optionLineOne">Your</span>
            <span 
            className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
        <BsBasket3Fill /> 
            <span className="header__optionLineTwo header__basketCount">0</span>

            {/* CHECK WHY '0' IS NOT SHOWING ON THE HEADER */}
        </div>

      </div>

    </div>
  );
}

export default Header;

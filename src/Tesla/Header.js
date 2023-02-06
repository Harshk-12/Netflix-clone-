import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
  let [menu, setmenu] = useState(false);
  function Show() {
    setmenu(true);
  }
  function Hide() {
    setmenu(false);
  }

  return (
    <>
      {/* header */}
      <header className="flex navbar">
        <a href="">
          <img src="tesla_images/logo.svg" />
        </a>

        {/* mid-menu */}
        <ul className="flex mid-menu-parent ">
          <li > Model S</li>
          <li >Model 3</li>
          <li >Model X</li>
          <li >Model Y</li>
          <li >Solar roof</li>
          <li >Solar panel</li>
        </ul>

        {/* last menu */}
        <ul className="last-menu-parent flex">
          <li>Account</li>
          <li>Shop</li>
          <li onClick={Show}>
            Menu
          </li>
        </ul>

        {/*sidebar  */}
        <div
          className="sidebar"
          style={{ right: menu === false ? "-300px" : "0px" }}
        >
          <ul>
            
              <ClearIcon className="cross" onClick={Hide} />
            

            <li> <a href="">Used Inventory</a></li>
            <li> <a href="">Trade-In</a></li>
            <li> <a href="">Demo Drive  </a></li>
            <li> <a href="">Insurane</a></li>
            <li> <a href="">Cybertruck</a></li>
            <li> <a href="">Roadster</a></li>
            <li> <a href="">Semi</a></li>
            <li> <a href="">Charging</a></li>
            <li> <a href="">Powerwall</a></li>
            <li> <a href="">Commercial Energy</a></li>
            <li> <a href="">Utilities</a></li>
            <li> <a href="">Find Us</a></li>
            <li> <a href="">Support</a></li>
            <li> <a href="">Investor Relations</a></li>
         
            


          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

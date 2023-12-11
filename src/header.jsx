// Header.jsx

import React from "react";

const Header = () => {
  return (
    <header className="bg-red-800 text-amber-400 p-4 mb-4 border rounded-md">
      <img
        src="brewhouseLogo.svg"
        alt="Brew House Logo"
        width="100"
        height="100"
      ></img>

      {/* Add any additional header content here */}
    </header>
  );
};

export default Header;

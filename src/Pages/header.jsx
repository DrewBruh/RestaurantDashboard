// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-red-800 text-amber-400 font-bold p-4 mb-4 border rounded-md flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="brewhouseLogo.svg"
          alt="Brew House Logo"
          width="100"
          height="100"
        />
      </div>
      {/* Add any additional header content here */}
    </header>
  );
};

export default Header;

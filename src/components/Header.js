import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPerson ,IoMdBasket } from "react-icons/io";


const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-100 flex justify-between items-center px-5 h-[80px]">
      <Link>
        <IoMdPerson size={32} />
      </Link>
      <Link to="/">Online Shop</Link>
      <Link to="/shop">
        <IoMdBasket size={30} />
      </Link>
    </header>
  );
};

export default Header;

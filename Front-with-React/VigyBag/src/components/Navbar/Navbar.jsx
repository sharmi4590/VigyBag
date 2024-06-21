import React from 'react';
import { FaSearch, FaShoppingCart, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';
import logo from '../../assets/images/Logo.svg'
import Nav from '../Products/Navbar';
import { GoTriangleDown } from "react-icons/go";
import React, { useState } from 'react';
import { FaHome, FaGift, FaList, FaInfoCircle, FaSearch, FaShoppingCart, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isGiftsOpen, setIsGiftsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  const toggleGifts = () => {
    setIsGiftsOpen(!isGiftsOpen);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search functionality here
  };


          <div className="inline-block font-baloo  relative group"> {/* Add the group class here */}
            <NavLink to="/categories" className="mx-2 text-xl text-black flex hover:bg-gray-100 p-2 rounded">Categories <GoTriangleDown className='mt-1 size-6' /></NavLink>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded ml-2"> {/* This div will now show on hover */}
                  <NavLink to="/categories/fashion" className="block  px-10 py-2 text-black hover:bg-gray-100">Fashion</NavLink>
                  <NavLink to="/categories/bodycare" className="block px-10 py-2 text-black hover:bg-gray-100">Bodycare</NavLink>
                  <NavLink to="/categories/furniture" className="block px-10 py-2 text-black hover:bg-gray-100">Furniture</NavLink>
                  <NavLink to="/categories/stationary" className="block px-10 py-2 text-black hover:bg-gray-100">Stationary</NavLink>
                  <NavLink to="/categories/gifts" className="block px-10 py-2 text-black hover:bg-gray-100">Gifts</NavLink>
                </div>
                
          </div>

          {/* About Us Link */}
          <NavLink to="/about" className="mx-2 text-xl text-black">About Us</NavLink>

          {/* Contact Link */}
          <NavLink to="/contact" className="mx-2 text-xl text-black">Contact</NavLink>

          {/* Team Link */}
          <div className="inline-block relative">
            <NavLink to="/team" className="mx-2 text-xl text-black ">Team</NavLink>
=======
  return (
    <nav className="bg-[#ecd5c5] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="VigyBag Logo" style={{ height: '7vh' }} />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-large flex items-center"style={{fontSize:'20px'}}>
                {/* <FaHome className="mr-2"style={{fontSize:'27px'}} />*/}
                  Home
                </Link>
                
                <div className="relative">
                  <button
                    onClick={toggleGifts}
                    className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center focus:outline-none"
                  >
                    {/*<FaList className="mr-2" style={{fontSize:'23px'}}/>*/}
                    Gifts
                    <FaChevronDown className="ml-1" />
                  </button>
                  {isGiftsOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"style={{zIndex:'5'}} >
                      <div className="py-1">
                      <Link to="/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                  <Link to="/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                  <Link to="/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                  <Link to="/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                  <Link to="/body-care" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={toggleCategories}
                    className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center focus:outline-none"
                  >
                    {/*<FaList className="mr-2" style={{fontSize:'23px'}}/>*/}
                    Categories
                    <FaChevronDown className="ml-1" />
                  </button>
                  {isCategoriesOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"style={{zIndex:'5'}} >
                      <div className="py-1">
                      <Link to="/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                  <Link to="/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                  <Link to="/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                  <Link to="/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                  <Link to="/body-care" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/about" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                  {/*<FaInfoCircle className="mr-2" style={{fontSize:'23px'}}/>*/}
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="flex items-center rounded-full border-black border-2 bg-gray-200 px-4 py-2 w-72">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none w-full"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <FaSearch className="text-gray-600" />
                </div>
                <Link to="/cart" className="ml-4 text-black hover:text-gray-600">
                  <FaShoppingCart className="mx-2 cursor-pointer text-3xl" />
                </Link>
                <Link to="/login" className="ml-4 text-black hover:text-gray-600 flex items-center">
                  <FaUserCircle className="mr-2 text-3xl" />
                 
                  <button className="text-lg text-white bg-[#3d784aff] px-5 py-1 rounded-2xl"style={{fontSize:'19px'}}>Login</button>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none"
              >
                {isOpen ? (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex items-center rounded-full border-black border-2 bg-gray-200 px-4 py-2 w-full">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="text-gray-600" />
          </div>
          <Link to="/" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>
          
          <div className="relative">
            <button
              onClick={toggleGifts}
              className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center w-full focus:outline-none"
            >
              <FaGift className="mr-2" />
              Gifts
              <FaChevronDown className="ml-1" />
            </button>
            {isGiftsOpen && (
              <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"style={{zIndex:'5'}}>
                <div className="py-1">
                  <Link to="/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                  <Link to="/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                  <Link to="/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                  <Link to="/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                  <Link to="/body-care" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleCategories}
              className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center w-full focus:outline-none"
            >
              <FaList className="mr-2" />
              Categories
              <FaChevronDown className="ml-1" />
            </button>
            {isCategoriesOpen && (
              <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link to="/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                  <Link to="/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                  <Link to="/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                  <Link to="/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                  <Link to="/body-care" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaInfoCircle className="mr-2" />
            About Us
          </Link>
          <Link to="/cart" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>
          <Link to="/login" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaUserCircle className="mr-2" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import React from 'react';
// import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-sm border-b mx-auto flex items-center justify-between w-full px-8 py-4">
//     {/* Logo */}
//       <div className="flex items-center">
//       <img src="/logo.png" alt="Logo" className="h-10 w-15" />
//       <div className="text-2xl font-bold text-black">
//         <a href="/">Funiro</a>
//       </div>
//     </div>

//       {/* Navigation Menu */}
//       <nav className="hidden md:flex space-x-8 items-center">
//         <a href="/" className="text-gray-700 hover:text-black font-medium">Home</a>
//         <a href="/shop" className="text-gray-700 hover:text-black font-medium">Shop</a>
//         <a href="/blog" className="text-gray-700 hover:text-black font-medium">Blog</a>
//         <a href="/contact" className="text-gray-700 hover:text-black font-medium">Contact</a>
//       </nav>

//       {/* Icons */}
//       <div className="flex items-center space-x-6">
//         <FaUser className=" hover:text-black" />
//         <FaSearch className=" hover:text-black" />
//         <FaHeart className=" hover:text-black" />
//         <FaShoppingCart className=" hover:text-black" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex items-center justify-between w-full px-8 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-15" />
        <div className="text-2xl font-bold text-black ml-2">
          <a href="/">Funiro</a>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 items-center">
        <a href="/" className="text-gray-700 hover:text-black font-medium">Home</a>
        <a href="/shop" className="text-gray-700 hover:text-black font-medium">Shop</a>
        <a href="/blog" className="text-gray-700 hover:text-black font-medium">Blog</a>
        <a href="/contact" className="text-gray-700 hover:text-black font-medium">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <img src="/icons/user.png" alt="User" className="h-6 w-6 text-gray-700 hover:text-black" />
        <img src="/icons/search.png" alt="Search" className="h-6 w-6 text-gray-700 hover:text-black" />
        <img src="/icons/navheart.png" alt="Heart" className="h-6 w-6 text-gray-700 hover:text-black" />
        <img src="/icons/cart.png" alt="Cart" className="h-6 w-6 text-gray-700 hover:text-black" />
      </div>
    </header>
  );
};

export default Header;

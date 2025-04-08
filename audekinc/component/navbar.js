
// // import React, { useState } from 'react';
// // import Image from 'next/image';

// // function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handleDropdown = () => {
// //     setIsOpen((prev) => !prev);
// //   };

// //   return (
// //     <nav className="relative z-50 bg-white text-black p-4 shadow-md">
// //       <div className="flex items-center justify-between max-w-screen-xl mx-auto">
// //         {/* Logo */}
// //         <div className="flex-shrink-0">
// //           <Image
// //             src="/audeklogo.png"
// //             alt="Audek Logo"
// //             height={150}
// //             width={150}
// //             className="h-auto w-auto"
// //           />
// //         </div>

// //         {/* Navigation Menu */}
// //         <ul className="flex space-x-8 items-center">
// //           {/* Dropdown Menu for Hearing Solutions */}
// //           <li className="relative">
// //             <button
// //               onClick={handleDropdown}
// //               className="text-sm hover:text-red-500"
// //             >
// //               Hearing Solutions
// //             </button>

// //             {isOpen && (
// //               <ul className="absolute left-0 mt-2 bg-white shadow-lg w-52 text-black z-50 border border-gray-200">
// //                 <li className="p-2 hover:bg-gray-100 cursor-pointer">BTE Hearing Aids</li>
// //                 <li className="p-2 hover:bg-gray-100 cursor-pointer">RIC Hearing Aids</li>
// //                  <li className="p-2 hover:bg-gray-100 cursor-pointer">CIC Hearing Aids</li>
// //                 <li className="p-2 hover:bg-gray-100 cursor-pointer">Airbuds Hearing Aids</li>
// //               </ul>
// //             )}
// //           </li>

// //           {/* Other Menu Items */}
// //           <li className="text-sm hover:text-red-500 cursor-pointer">Software</li>
// //           <li className="text-sm hover:text-red-500 cursor-pointer">Contact Us</li>
// //           <li className="text-sm hover:text-red-500 cursor-pointer">Locations</li>
// //           <li className="text-sm hover:text-red-500 cursor-pointer">Support</li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// // components/Navbar.js
// import React, { useState } from 'react';
// import Image from 'next/image';

// import { menuItemsData } from './Menuitemsdata';
// import { MenuItem } from './simplemenu';

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const [openInnerSubMenu, setOpenInnerSubMenu] = useState(null);
//   const [isOpen,setisOpen]=useState(false)

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//     setOpenSubMenu(null);
//     setOpenInnerSubMenu(null);
//   };

//   const toggleSubMenu = (index) => {
//     setOpenSubMenu((prev) => (prev === index ? null : index));
//     setOpenInnerSubMenu(null); // close inner when switching outer
//   };

//   const toggleInnerSubMenu = (index) => {
//     setOpenInnerSubMenu((prev) => (prev === index ? null : index));
//   };

//   return (
//     <nav className="relative z-50 bg-white text-black p-4 shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl mx-auto">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Image src="/audeklogo.png" alt="Audek Logo" height={250} width={250} />
//         </div>

//         {/* Menu */}
//         <ul className="flex space-x-8 items-center">
//           <li className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-sm hover:text-red-500 flex items-center gap-1"
//             >
//               Hearing Solutions {isDropdownOpen ? '▴' : '▾'}
//             </button>
//             {isOpen && (
//               <div className="absolute z-10 bg-yellow-100 p-2 mt-2 rounded shadow-lg">
//                 <SimpleMenu items={menuItemsData} />
//               </div>
//             )}
          

//           </li>

//           {/* Other items */}
//           <li className="text-sm hover:text-red-500 cursor-pointer">Software</li>
//           <li className="text-sm hover:text-red-500 cursor-pointer">Contact Us</li>
//           <li className="text-sm hover:text-red-500 cursor-pointer">Locations</li>
//           <li className="text-sm hover:text-red-500 cursor-pointer">Support</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// Navbar.js
import React, { useState } from 'react';
import Image from 'next/image';
import { menuItemsData } from './Menuitemsdata';
import { SimpleMenu } from './simplemenu'; // ← Corrected import

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For "Hearing Solutions" dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-50 bg-white text-black p-4 shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/audeklogo.png" alt="Audek Logo" height={200} width={200} />
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 items-center">

          {/* Hearing Solutions Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-sm hover:text-red-500 flex items-center gap-1"
            >
              Hearing Solutions {isDropdownOpen ? '▴' : '▾'}
              {/*                ^^^^ Arrow points up when open */}
              {/*                             ^^^^ Arrow down when closed */}
            </button>

            {/* Show dropdown if open */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded border border-gray-200 z-50">
                <SimpleMenu items={menuItemsData} />
                {/* ^ Recursive component to render nested menu items */}
              </div>
            )}
          </li>

          {/* Other Menu Items */}
          <li className="text-sm hover:text-red-500 cursor-pointer">Software</li>
          <li className="text-sm hover:text-red-500 cursor-pointer">Contact Us</li>
          <li className="text-sm hover:text-red-500 cursor-pointer">Locations</li>
          <li className="text-sm hover:text-red-500 cursor-pointer">Support</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

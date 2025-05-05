// import React, { useState } from 'react';
// import Image from 'next/image';
// import { menuItemsData } from './Menuitemsdata';
// import { SimpleMenu } from './simplemenu';
// import { useTranslation } from 'react-i18next';
// import Link from 'next/link';

// function Navbar() {
//   const { t, i18n } = useTranslation();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(prev => !prev);
//   };

//   const toggleLangDropdown = () => {
//     setIsLangDropdownOpen(prev => !prev);
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setIsLangDropdownOpen(false); // Close dropdown after selecting
//   };

//   return (
//     <nav className="relative z-50 bg-white text-black p-4 shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl mx-auto">
//         {/* Logo */}
//         <div className="flex-shrink-0"> 
//           <Image src="/audekLogo.png" alt="Audek Logo" height={250} width={250} />
//         </div>

//         {/* Menu */}
//         <ul className="flex space-x-8 items-center">
//           <li className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-base font-medium hover:text-red-500 transition-colors"
//             >
//               {t('hearingSolutions')} {isDropdownOpen ? '▴' : '▾'}
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 bg-gray-400 border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
//                 <SimpleMenu items={menuItemsData} />
//               </div>
//             )}
//           </li>

//           <li className="text-base hover:text-red-500 cursor-pointer transition-colors">{t('software')}</li>
//           <li className="text-base hover:text-red-500 cursor-pointer transition-colors">{t('contactUs')}</li>     


// <Link href="/locations" passHref>
//   <li className="text-base hover:text-red-500 cursor-pointer transition-colors">
//     {t('locations')}
//   </li>
// </Link>

//           <li className="text-base hover:text-red-500 cursor-pointer transition-colors">{t('support')}</li>

//           {/* Language Dropdown */}
//           <li className="relative">
//             <button
//               onClick={toggleLangDropdown}
//               className="text-base font-medium hover:text-red-500 transition-colors"
//             >
//               {t('languages')} {isLangDropdownOpen ? '▴' : '▾'}
//             </button>
//             {isLangDropdownOpen && (
//               <div className="absolute left-0 mt-2 bg-gray-400 border-gray-200 rounded-lg shadow-lg p-4 w-32 z-50">
//                 <button onClick={() => changeLanguage('en')} className="block w-full hover:text-red-600 text-left p-2">English</button>
//                 <button onClick={() => changeLanguage('es')} className="block w-full hover:text-red-600 text-left p-2">Español</button>
//                 <button onClick={() => changeLanguage('fr')} className="block w-full hover:text-red-600 text-left p-2">Français</button>
//                 <button onClick={() => changeLanguage('mx')} className="block w-full hover:text-red-600 text-left p-2">Español (MX)</button>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import Image from 'next/image';
import { menuItemsData } from './Menuitemsdata';
import { SimpleMenu } from './simplemenu';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // optional icons package

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleLangDropdown = () => setIsLangDropdownOpen(prev => !prev);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="bg-white text-black p-4 shadow-md z-50 relative">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between">
    
    {/* Logo */}
    <div className="flex-shrink-0">
      <Image src="/audekLogo.png" alt="Audek Logo" height={80} width={150} />
    </div>

    {/* Hamburger for Mobile */}
    <button
      onClick={toggleMobileMenu}
      className="md:hidden text-black focus:outline-none"
    >
      {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-8 items-center">
      {/* Dropdown */}
      <li className="relative">
        <button onClick={toggleDropdown} className="font-medium hover:text-red-500">
          {t('hearingSolutions')} {isDropdownOpen ? '▴' : '▾'}
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-gray-400 border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
            <SimpleMenu items={menuItemsData} />
          </div>
        )}
      </li>

      <Link href="/About_us"><li className="hover:text-red-600 cursor-pointer">{t('About Us')}</li></Link>
      <li className="hover:text-red-500 cursor-pointer">{t('software')}</li>
      <li className="hover:text-red-500 cursor-pointer">{t('contactUs')}</li>
      <Link href="/locations"><li className="hover:text-red-500 cursor-pointer">{t('locations')}</li></Link>
      <li className="hover:text-red-500 cursor-pointer">{t('support')}</li>

      {/* Language Dropdown */}
      <li className="relative">
        <button onClick={toggleLangDropdown} className="font-medium hover:text-red-500">
          {t('languages')} {isLangDropdownOpen ? '▴' : '▾'}
        </button>
        {isLangDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-gray-400 border-gray-200 rounded-lg shadow-lg p-4 w-32 z-50">
            {['en', 'es', 'fr', 'mx'].map(lng => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className="block w-full text-left hover:text-red-600 p-2"
              >
                {lng === 'mx' ? 'Español (MX)' : lng === 'es' ? 'Español' : lng === 'fr' ? 'Français' : 'English'}
              </button>
            ))}
          </div>
        )}
      </li>
    </ul>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden mt-4 space-y-4">
      {/* Same mobile content as before */}
    </div>
  )}
</nav>

  );
}

export default Navbar;

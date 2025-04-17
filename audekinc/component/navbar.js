import React, { useState } from 'react';
import Image from 'next/image';
import { menuItemsData } from './Menuitemsdata';
import { SimpleMenu } from './simplemenu';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(prev => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false); // Close dropdown after selecting
  };

  return (
    <nav className="relative z-50 bg-white text-black p-4 shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0"> 
          <Image src="/audekLogo.png" alt="Audek Logo" height={250} width={250} />
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 items-center">
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-base font-medium hover:text-red-500 transition-colors"
            >
              {t('hearingSolutions')} {isDropdownOpen ? '▴' : '▾'}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-gray-400 border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
                <SimpleMenu items={menuItemsData} />
              </div>
            )}
          </li>

          <li className="text-base hover:text-red-500 cursor-pointer transition-colors">{t('software')}</li>
          <li className="text-base hover:text-red-500 cursor-pointer transition-colors">{t('contactUs')}</li>     


<Link href="/locations" passHref>
  <li className="text-base hover:text-red-500 cursor-pointer transition-colors">
    {t('locations')}
  </li>
</Link>

          <li className="text-base hover:text-red-500 cursor-pointer transition-colors">{t('support')}</li>

          {/* Language Dropdown */}
          <li className="relative">
            <button
              onClick={toggleLangDropdown}
              className="text-base font-medium hover:text-red-500 transition-colors"
            >
              {t('languages')} {isLangDropdownOpen ? '▴' : '▾'}
            </button>
            {isLangDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-gray-400 border-gray-200 rounded-lg shadow-lg p-4 w-32 z-50">
                <button onClick={() => changeLanguage('en')} className="block w-full hover:text-red-600 text-left p-2">English</button>
                <button onClick={() => changeLanguage('es')} className="block w-full hover:text-red-600 text-left p-2">Español</button>
                <button onClick={() => changeLanguage('fr')} className="block w-full hover:text-red-600 text-left p-2">Français</button>
                <button onClick={() => changeLanguage('mx')} className="block w-full hover:text-red-600 text-left p-2">Español (MX)</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

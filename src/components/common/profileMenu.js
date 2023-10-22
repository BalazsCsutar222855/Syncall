import React, { useState, useEffect, useRef } from 'react';
import { deleteTokenCookie } from './setCookies';

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Add the event listener when the menu is open
      document.addEventListener('mousedown', closeMenu);
    } else {
      // Remove the event listener when the menu is closed
      document.removeEventListener('mousedown', closeMenu);
    }

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 focus:outline-none "
          onClick={toggleMenu}
          id="options-menu"
        >
          <a href="#" className="relative block">
            <img alt="profile" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10" />
          </a>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-0">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>Profile</span>
              </span>
            </a>
            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>Settings</span>
              </span>
            </a>
            <button onClick={() => { deleteTokenCookie(); window.location.reload(); }} className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>Logout</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;

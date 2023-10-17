// src/components/Sidebar.js
import React, { useState } from 'react';
import '../../styles/layout/sideBar.css'; // Import your CSS file
import { MenuButton } from '../common/buttons';
import {HomeIcon, CalendarDaysIcon, ListBulletIcon, DocumentIcon} from "@heroicons/react/24/solid";
import { HomeIcon as OutlineHomeIcon, CalendarDaysIcon as OutlineCalendarDaysIcon, ListBulletIcon as OutlineListBulletIcon, DocumentIcon as OutlineDocumentIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ toggleDarkMode, changeView }) => {
    // Function to handle checkbox change
    const handleDarkModeToggle = (event) => {
      const isChecked = event.target.checked;
      toggleDarkMode(isChecked); // Call the toggleDarkMode function with the checkbox state
    };

    const [active, setActive] = useState('Home')


  return (
    <div className='sideBar'>
        <div class="relative  dark:bg-gray-800 border-gray-100 border-r-2">
            <div class="flex flex-col sm:flex-row sm:justify-around">
                <div class="h-screen w-72">
                    <div class="flex items-center justify-start mx-6 mt-4">
                        <span class="text-gray-600 dark:text-gray-300  text-2xl font-bold">
                            Syncall
                        </span>
                    </div>
                    <nav class="mt-8 px-6 text-gray-500 dark:text-gray-200">
                        <div className='flex'>

                            <span class=" text-xs font-bold text-gray-400">
                                    Dashboard
                            </span>
                            <span class=" text-xs font-bold flex-grow text-right text-indigo-400">
                            </span>

                        </div>
                        <MenuButton title="Home" link="/home" icon={HomeIcon} icon_alt={OutlineHomeIcon}></MenuButton>
                        <MenuButton title="Books" link="/books"  icon={DocumentIcon} icon_alt={OutlineDocumentIcon}></MenuButton>
                        <MenuButton title="Calendar" link="/calendar"  icon={CalendarDaysIcon} icon_alt={OutlineCalendarDaysIcon}></MenuButton>
                        <MenuButton title="Todo" link="/"  icon={ListBulletIcon} icon_alt={OutlineListBulletIcon}></MenuButton>

                    </nav>
                    <div class="absolute bottom-0 my-10">
                        <a class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8" href="#">
                        <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
                            </svg>
                            <span class="mx-4 text-base font-normal">
                                Dark
                            </span>
                            <span class="flex-grow text-right">
                                <label class="relative inline-flex cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onChange={handleDarkModeToggle} // Call the handleDarkModeToggle function when the checkbox changes
                                />
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-indigo-700 dark:peer-focus:ring-violet-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-700"></div>
                                
                                </label>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;

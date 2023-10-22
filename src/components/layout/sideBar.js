// src/components/Sidebar.js
import React, { useState } from 'react';
import '../../styles/layout/sideBar.css'; // Import your CSS file
import { MenuButton } from '../common/buttons';
import {HomeIcon, CalendarDaysIcon, ListBulletIcon, DocumentIcon, EllipsisVerticalIcon, ChartBarIcon} from "@heroicons/react/24/solid";
import { HomeIcon as OutlineHomeIcon, CalendarDaysIcon as OutlineCalendarDaysIcon, ListBulletIcon as OutlineListBulletIcon, DocumentIcon as OutlineDocumentIcon , ChartBarIcon as OutlineChartBarIcon} from "@heroicons/react/24/outline";
import SearchBar from "../common/searchBar";
import ProfileMenu from "../common/profileMenu";

const Sidebar = ({ toggleDarkMode, changeView, myEvents, setDate }) => {
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
                        <SearchBar myEvents={myEvents} setDate={setDate}></SearchBar>
                        <div className='flex mt-6'>

                            <span class=" text-xs font-bold text-gray-400">
                                    Dashboard
                            </span>

                        </div>
                        <MenuButton title="Home" link="/home" icon={HomeIcon} icon_alt={OutlineHomeIcon}></MenuButton>
                        <MenuButton title="Statistics" link="/home" icon={ChartBarIcon} icon_alt={OutlineChartBarIcon}></MenuButton>

                        <span className=" text-xs font-bold text-gray-400">
                            Editors
                        </span>
                        <MenuButton title="Books" link="/books"  icon={DocumentIcon} icon_alt={OutlineDocumentIcon}></MenuButton>
                        <MenuButton title="Calendar" link="/calendar"  icon={CalendarDaysIcon} icon_alt={OutlineCalendarDaysIcon}></MenuButton>
                        <MenuButton title="Todo" link="/"  icon={ListBulletIcon} icon_alt={OutlineListBulletIcon}></MenuButton>

                    </nav>
                    <div class="absolute bottom-0 w-full px-2 border-gray-300 border-t-[1px]">
                        <a class=" hover:bg-gray-200 my-2 rounded-md w-full text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center " href="#">
                            <ProfileMenu></ProfileMenu>
                            <div class="flex-grow text-left">
                                <p className="font-bold text-xs">Balazs Csutar</p>
                                <p className="text-xs text-gray-400">balazs.csutar@gmail.com</p>
                            </div>
                            <div className="text-right">
                                <EllipsisVerticalIcon className="text-gray-500"></EllipsisVerticalIcon>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;

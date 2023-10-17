// src/components/Sidebar.js
import React from 'react';
import '../../styles/layout/header.css'; 
import ProfileMenu from '../common/profileMenu';
import SearchBar from '../common/searchBar'
import NotificationMenu from '../common/notificationMenu';

const Header = ({myEvents, setDate}) => {
    return(
        <div className='header '>
            <header class="z-40 items-center w-full h-16 bg-white border-gray-100 border-b-2 dark:bg-gray-700 ">
            <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div class="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                        <SearchBar myEvents={myEvents} setDate={setDate}></SearchBar>
                    </div>
                    <div class="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">

                            <a href="#" class="relative block pr-2 mr-2 border-r-2">
                                <NotificationMenu></NotificationMenu>
                            </a>
                            <ProfileMenu></ProfileMenu>

                    </div>
                    </div>
                </div>
            </header>
        </div>
    )
} 

export default Header;
import React, { useState, useEffect, useRef } from 'react';
import { getTokenFromCookie } from './setCookies';
import axios from 'axios';

function NotificationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([])
  const dropdownRef = useRef(null);
  const token = getTokenFromCookie()
  

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

    // Get events from API
    useEffect(() => {
      // Make an HTTP GET request to your API
      axios.get('https://syncall.balage.top/notification/get/', {
        headers: {
          Authorization: `Token ${token}`,
        }
      })
        .then(response => {
          // Assuming the response.data is an array of events
          const formattedEvents = response.data.map(notification => ({
            id: notification.id,
            title: notification.title,
            description: notification.description,
            start: notification.start
          }));
    
          // Set the formatted events in the state
          setNotifications(formattedEvents);
          console.log(formattedEvents)
        })
        .catch(error => {
          console.error('Error fetching notifications:', error);
        });
    }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="relative w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 focus:outline-none "
          onClick={toggleMenu}
          id="options-menu"
        >
          <a href="#" className="relative block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-300 border-1 hover:stroke-gray-00 duration-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </a>
          <div class="absolute left-1 top-0 w-5 h-5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-5 w-5 bg-red-300"> 
                <span class="text-xs text-white p-1">{notifications.length}
              </span>
            </span>
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 w-96 h-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-0">
          <div className=" px-4 py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <span class=" text-xs font-bold text-gray-400">
              Notifications
            </span>
            <ul>
            {notifications.map((notification, index) => (
              <button key={index} className="text-gray-800 hover:bg-gray-100 duration-100 cursor-pointer overflow-hidden l flex w-full items-center">
                
                <div className={`p-2 mr-4 rounded-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                </div>
                
                <p>{notification.title}</p>
                <p>{notification.description}</p>
              </button>
            ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationMenu;

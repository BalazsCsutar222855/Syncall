import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import { getTokenFromCookie } from '../common/setCookies'


function SearchBar({setDate}) {
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState();
  const [myEvents, setEvents] = useState();

  const token = getTokenFromCookie()

  // Get events from API
  useEffect(() => {
    // Make an HTTP GET request to your API
    axios.get('https://syncall.balage.top/9d1cd87b-5caa-4314-a99e-5ff76a059751/', {
      headers: {
        Authorization: `Token ${token}`,
      }
    })
        .then(response => {
          // Assuming the response.data is an array of events
          const formattedEvents = response.data.map(event => ({
            id: event.id,
            title: event.title,
            description: event.description,
            start: event.start,
            end: event.end,
            color: event.color,
            calendar_key: event.calendar_key,
          }));

          // Set the formatted events in the state
          setEvents(formattedEvents);
          console.log(formattedEvents)
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
  }, []);



  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    const sortedAndFilteredEvents = myEvents
    .filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 5);
  
  setFilteredEvents(sortedAndFilteredEvents);
  
  };
  
  const highlightText = (text, query) => {
    const lowerCaseText = text.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    const startIndex = lowerCaseText.indexOf(lowerCaseQuery);
  
    if (startIndex !== -1) {
      const beforeQuery = text.substring(0, startIndex);
      const queryText = text.substring(startIndex, startIndex + query.length);
      const afterQuery = text.substring(startIndex + query.length);
  
      return (
        <p>
          {beforeQuery}
          <span className="bg-yellow-200">{queryText}</span>
          {afterQuery}
        </p>
      );
    } else {
      return <p>{text}</p>;
    }
  };

  const formatDate = (date) => {
    const startDate = new Date(date);
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it's 0-based
    const day = String(startDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;

  }

  const closeSearch = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      // Add the event listener when the menu is open
      document.addEventListener('mousedown', closeSearch);
    } else {
      // Remove the event listener when the menu is closed
      document.removeEventListener('mousedown', closeSearch);
    }

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      document.removeEventListener('mousedown', closeSearch);
    };
  }, [isFocused]);

  return (
    <div className="w-full h-full bg-white relative" onFocus={() => setIsFocused(true)} ref={dropdownRef}>
      <div className="relative flex items-center w-full h-full lg:w-full group focus:drop-shadow duration-100">
        <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
          <svg
            fill="none"
            className="relative w-4 h-4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <svg
          className="absolute left-0 hidden w-4 h-4 ml-4 text-gray-400 pointer-events-none fill-current group-hover:text-gray-500 sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
        <input
          type="text"
          className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-0 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange} // Handle input change
        />
        {isFocused && searchQuery.length >= 3 && (
          <div className="absolute top-full left-0 w-full mt-2 text-gray-500 bg-white rounded-md shadow-lg dark:bg-gray-800 ring-0 w-max-30">
            <ul>
              {filteredEvents.map((event, index) => (
                <button
                  onClick={() => {setDate(event.start);  setIsFocused(false)}}
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 duration-100 cursor-pointer overflow-hidden l flex w-full items-center"
                >
                  <div className={`p-2 mr-4 rounded-md ${event.color}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                
                  <div className=' w-full'>
                    <div className='flex w-full'>
                      <div className='flex-grow justify-between items-center flex w-full'>
                        <p className='font-semibold text-gray-600'>
                          {highlightText(event.title, searchQuery)}
                        </p>
                        <p className='text-xs font-semibold'>
                          {formatDate(event.start)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className='font-md text-gray-400 text-sm pr-1 overflow-hidden text-start'>
                        {highlightText(event.description, searchQuery)}
                      </p>
                    </div>
                  </div>
                </button>
             
              ))}
            </ul>

            {filteredEvents.length >= 5 ? 
              <div className=' flex justify-center items-center w-full  p-3 hover:text-gray-900 duration-100'>
                <button>View all</button>
              </div>
              :
              null
            }

          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

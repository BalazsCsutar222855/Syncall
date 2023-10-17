import React, { useState } from "react";

export const AddButton = ({title, clickEvent}) => {

    return (
        <button className="bg-gray-300  hover:bg-gray-400 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-white dark:text-gray-400 rounded-lg bg-gray-100  w-full" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>


            <span class="mx-4 text-sm font-bold">
                {title}
            </span>
        </button>
    )
    
}



export const MenuButton = ({title, clickEvent, link, icon: IconComponent, icon_alt: IconAltComponent}) => {

    const [active, setActive] = useState(window.location.pathname.substring(1));

    return (
        <a className={`hover:text-indigo-700 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 rounded-lg ${active == title.toLowerCase() ? 'text-indigo-700 dark:text-white bg-gray-100' : 'text-gray-500 dark:text-gray-200'}`}  href={link}
            >
            {active == title.toLowerCase() ? 
                <IconComponent className="w-5 h-5" />
            :
                <IconAltComponent className="w-5 h-5" />
            }
            <span class="mx-4 text-sm font-bold">
                {title}
            </span>
            <span class="flex-grow text-right">
            </span>
        </a>
    )
    
}
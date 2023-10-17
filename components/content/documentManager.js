import DocumentView from "./documentView"
import { Event, Favourite } from "../common/events";
import { useState } from "react";
import DocumentSelector from "./documentSelector";

const DocumentManager = () => {
    const [view, setView] = useState('Manager')
    const [branch, setBranch] = useState({Shelf: "", Book: "", Chapter: "", Page: ""})

    
    return (
        <div className="flex flex-col p-2 w-full gap-10">
            {view == "Manager" ? 
            <>
            <div className="flex gap-2 h-24 font-bold">
                <button onClick={() => {setView('Branches');}} className="bg-white text-red-500 text-xl w-full h-full rounded-md flex justify-start p-5 items-center hover:shadow-md duration-200 cursor-pointer">
                    <div className="p-2 bg-red-500 mr-5 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-8 h-8 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p>Shelfs</p>
                        <p className="text-xs text-gray-300">4 shelfes</p>
                    </div>
                    <div className="ml-auto text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </button>
                <button  onClick={() => {setView('Branches'); setBranch('Books')}} className="bg-white text-purple-500 text-xl w-full h-full rounded-md flex justify-start p-5 items-center hover:shadow-md duration-200 cursor-pointer">
                    <div className="p-2 bg-purple-500 mr-5 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p>Books</p>
                        <p className="text-xs text-gray-300">12 books</p>
                    </div>
                    <div className="ml-auto text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </button>
                <button  onClick={() => {setView('Branches'); setBranch('Chapters')}} className="bg-white text-green-500 text-xl w-full h-full rounded-md flex justify-start p-5 items-center hover:shadow-md duration-200 cursor-pointer">
                    <div className="p-2 bg-green-500 mr-5 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8">
                        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                        <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                        </svg>

                    </div>
                    <div className="flex flex-col ">
                        <p>Chapters</p>
                        <p className="text-xs text-gray-300">9 chapters</p>
                    </div>
                    <div className="ml-auto text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </button>
                <button  onClick={() => {setView('Branches'); setBranch('Pages')}} className="bg-white text-blue-500 text-xl w-full h-full rounded-md flex justify-start p-5 items-center hover:shadow-md duration-200 cursor-pointer">
                    <div className="p-2 bg-blue-500 mr-5 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8">
                        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p>Pages</p>
                        <p className="text-xs text-gray-300">45 pages</p>
                    </div>
                    <div className="ml-auto text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </button>

            </div>
            <div className="flex justify-between items-center">
                <span class=" text-xl font-bold text-gray-700">
                    Favourites
                </span>
                <span class=" text-xs font-semibold text-blue-500 underline">
                    See all
                </span>
            </div>

            <div className="w-full">
                <div className="flex gap-2 h-full w-full">
                    <Favourite></Favourite>
                    <Favourite></Favourite>
                    <Favourite></Favourite>
                    <Favourite></Favourite>
                    <Favourite></Favourite>
                </div>
            </div>



            <div className="flex justify-between items-center">
                <span class=" text-xl font-bold text-gray-700">
                    Recent activities
                </span>
                <span class=" text-xs font-semibold text-blue-500 underline">
                    See all
                </span>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className=" w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                        <thead  >
                            <tr>
                            <th
                                scope="col"
                                className="py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Location
                            </th>
                            <th
                                scope="col"
                                className="py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Members
                            </th>
                            <th
                                scope="col"
                                className="py-3 text-xs font-bold  text-gray-500 uppercase "
                            >
                                Updated
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Event></Event>
                            <Event></Event>
                            <Event></Event>
                            <Event></Event>
                            <Event></Event>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            </>
            : 
           <DocumentSelector branch={branch} setBranch={setBranch} setView={setView}/>
        
            }
        </div>
    )
}

export default DocumentManager 
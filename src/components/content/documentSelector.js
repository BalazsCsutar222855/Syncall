import { useEffect, useState } from "react";
import { Branches } from "../common/events";
import PopupElement from '../common/popUpElement'
import {TrashIcon, ArrowSmallLeftIcon} from "@heroicons/react/24/solid";
import axios from 'axios'; // Import Axios if you're using it
import { getTokenFromCookie } from '../common/setCookies'


const DocumentSelector = ({branch, setBranch, setView}) => {

    const token = getTokenFromCookie()
    const [branchList, setBranchList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        if (Object.values(branch).every(value => !value)) {
            axios.get('https://syncall.balage.top/editor/shelf', {
                headers: {
                  Authorization: `Token ${token}`,
                }
              })
                .then(response => {
                  // Assuming the response.data is an array of events
                  const formattedList = response.data.map(shelf => ({
                    id: shelf.id,
                    title: shelf.title,
                    description: shelf.description,
                    start: shelf.start,
                    end: shelf.end,
                  }));
            
                  setBranchList(formattedList);
                  console.log(formattedList)

                  setTimeout(() => {
                    setLoading(false)
                  }, 500);
                })
                .catch(error => {
                  console.error('Error fetching events:', error);
                });

        }
        else if(!branch.Book){
            axios.get('https://syncall.balage.top/editor/book', {
                headers: {
                  Authorization: `Token ${token}`,
                }
              })
                .then(response => {
                  // Assuming the response.data is an array of events
                  const formattedList = response.data.map(book => ({
                    id: book.id,
                    title: book.title,
                    description: book.description,
                    start: book.start,
                    end: book.end,
                  }));
            
                  setBranchList(formattedList);
                  console.log(formattedList)

                  setTimeout(() => {
                    setLoading(false)
                  }, 500);
                })
                .catch(error => {
                  console.error('Error fetching events:', error);
                });

        }
        else if(!branch.Chapter){
            axios.get('https://syncall.balage.top/editor/chapter', {
                headers: {
                  Authorization: `Token ${token}`,
                }
              })
                .then(response => {
                  // Assuming the response.data is an array of events
                  const formattedList = response.data.map(chapter => ({
                    id: chapter.id,
                    title: chapter.title,
                    description: chapter.description,
                    start: chapter.start,
                    end: chapter.end,
                  }));
            
                  setBranchList(formattedList);
                  console.log(formattedList)

                  setTimeout(() => {
                    setLoading(false)
                  }, 500);
                })
                .catch(error => {
                  console.error('Error fetching events:', error);
                });

        }
        else if(!branch.Page){
            axios.get('https://syncall.balage.top/editor/pages', {
                headers: {
                  Authorization: `Token ${token}`,
                }
              })
                .then(response => {
                  // Assuming the response.data is an array of events
                  const formattedList = response.data.map(page => ({
                    id: page.id,
                    title: page.title,
                    description: page.description,
                    start: page.start,
                    end: page.end,
                  }));
            
                  setBranchList(formattedList);
                  console.log(formattedList)

                  setTimeout(() => {
                    setLoading(false)
                  }, 500);
                })
                .catch(error => {
                  console.error('Error fetching events:', error);
                });

        }

    }, [branch])

    return(
        <div>
            <div className="w-full h-full flex items-center mb-5 gap-6 text-gray-300 cursor-pointer">
                <ArrowSmallLeftIcon className="h-5 w-5 text-gray-600" onClick={() => {
                    setView('Manager'); setBranch('')
                }}></ArrowSmallLeftIcon>

                <div className="flex gap-2 text-gray-400 items-center" onClick={() => {setLoading(true); setBranch('')} }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <p>All</p>
                </div>

                {
                    branch.Shelf ?

                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <div className="flex gap-2 text-red-400 items-center" onClick={() => {setLoading(true); setBranch(prevBranch => ({ Shelf: prevBranch.Shelf })) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                            </svg>

                            <p>{branch.Shelf}</p>
                        </div>
                    </>

                    :

                    null

                }

                {
                    branch.Book ?

                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <div className="flex gap-2 text-green-400 items-center" onClick={() => {setLoading(true); setBranch(prevBranch => ({ Shelf: prevBranch.Shelf, Book: prevBranch.Book })) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                            </svg>

                            <p>{branch.Book}</p>
                        </div>
                    </>

                    :
                    
                    null

                }

                {
                    branch.Chapter ?

                    <>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <div className="flex gap-2 text-purple-400 items-center" onClick={() => {setLoading(true); setBranch(prevBranch => ({ Shelf: prevBranch.Shelf, Book: prevBranch.Book, Chapter: prevBranch.Chapter })) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                            </svg>


                            <p>{branch.Chapter}</p>
                        </div>
                    </>

                    :
                    
                    null

                }

            </div>

            <div class="grid grid-cols-4 gap-4">

                {isLoading ? 
                    <>
                        <div role="status" class="flex items-center justify-center h-36 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                        </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div role="status" class="flex items-center justify-center h-36 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                        </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div role="status" class="flex items-center justify-center h-36 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                        </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div role="status" class="flex items-center justify-center h-36 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                        </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </>
                :
                    <>
                        <button role="status" class="flex flex-col gap-2 items-center justify-center h-36 max-w-sm bg-gray-200 text-gray-300 rounded-lg dark:bg-gray-700" onClick={() => setShowModal(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className="text-gray-400">Add new</p>
                        </button>
                    {branchList.map(item => (
                        
                        <Branches branch={branch} setBranch={setBranch} icon={TrashIcon} title={item.title} desc={item.description} id={item.id} setLoading={setLoading} ></Branches>
                    ))}
                    </>
                }

            </div>

            <PopupElement showModal={showModal} setShowModal={setShowModal} ></PopupElement>
        </div>
    )
}

export default DocumentSelector
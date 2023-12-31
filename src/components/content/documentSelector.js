import { useEffect, useState } from "react";
import { Branches } from "../common/events";
import {TrashIcon, XMarkIcon, TableCellsIcon, BookOpenIcon, DocumentDuplicateIcon, DocumentTextIcon} from "@heroicons/react/24/solid";
import axios from 'axios'; // Import Axios if you're using it
import { getTokenFromCookie } from '../common/setCookies'


const DocumentSelector = ({branch, setBranch, setView, branchTree, setBranchTree, setShowModal}) => {

    const token = getTokenFromCookie()
    const [isLoading, setLoading] = useState(false)
    const [isChecked, setChecked] = useState()
    const [checkedId, setCheckedId] = useState(null)
    const [activePage, setActivePage] = useState(1)

    const handleRadioChange = (id) => {
        setCheckedId(id); // Set the checkedId to the id of the checked radio button
        console.log(id)
    };


    return(
        <div className="flex flex-col h-full">
            <div className="w-full h-8 flex items-center gap-6 text-gray-300 cursor-pointer">
                <XMarkIcon className="h-5 w-5 text-gray-600" onClick={() => {
                    setView('Manager'); setBranchTree({}); setCheckedId({}); setChecked()
                }}></XMarkIcon>

                <div className="flex gap-2 text-gray-400 items-center" onClick={() => {setLoading(true); setBranchTree({})} }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <p>All</p>
                </div>

                <>
                {
                    branchTree.Shelf && branchTree.Shelf.id ?

                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <div className="flex gap-2 text-red-400 items-center" onClick={() => {setLoading(true); setBranchTree(prevBranch => ({ Shelf: prevBranch.Shelf })) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                            </svg>

                            <p>{branchTree.Shelf.title}</p>
                        </div>
                    </>

                    :

                    null

                }

                {
                    branchTree.Book  && branchTree.Book.id ?

                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <div className="flex gap-2 text-purple-400 items-center" onClick={() => {setLoading(true); setBranchTree(prevBranch => ({ Shelf: prevBranch.Shelf, Book: prevBranch.Book })) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                            </svg>

                            <p>{branchTree.Book.title}</p>
                        </div>
                    </>

                    :

                    null

                }

                {
                    branchTree.Chapter && branchTree.Chapter.id ?

                    <>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <div className="flex gap-2 text-green-400 items-center" onClick={() => {setLoading(true); setBranchTree(prevBranch => ({ Shelf: prevBranch.Shelf, Book: prevBranch.Book, Chapter: prevBranch.Chapter })) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                            </svg>


                            <p>{branchTree.Chapter.title}</p>
                        </div>
                    </>

                    :

                    null

                }
                </>


            </div>

            <div className="grid flex-grow items-start grid-cols-6 py-3 grid-rows-3 gap-4">

                    <>
                        <button role="status" class="flex flex-col gap-2 items-center justify-center h-36 max-w-sm bg-gray-200 text-gray-300 rounded-lg dark:bg-gray-700" onClick={() => setShowModal(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className="text-gray-400">Add new</p>
                        </button>

                        {branchTree.Shelf ?
                            branchTree.Book ?
                                branchTree.Chapter ?
                                    branch.Page
                                        .filter(item => branchTree.Chapter.id ? item.chapter_key === branchTree.Chapter.id : true)
                                        .slice((activePage - 1 )* 12, activePage * 12 + 11)
                                        .map(item => (
                                        <Branches
                                            key={item.id}
                                            branch={branch}
                                            setBranch={setBranch}
                                            icon={DocumentTextIcon}
                                            title={item.title}
                                            desc={item.description}
                                            id={item.id}
                                            start={item.start}
                                            end={item.end}
                                            setLoading={setLoading}
                                            branchTree={branchTree}
                                            setBranchTree={setBranchTree}
                                            isChecked={isChecked}
                                            handleRadioChange={() => handleRadioChange(item.id)}
                                            checkedId={checkedId}
                                        />
                                    ))
                                    :
                                    branch.Chapter
                                        .filter(item => branchTree.Book.id ? item.book_key === branchTree.Book.id : true)
                                        .slice((activePage - 1 )* 12, activePage * 12 + 11)
                                        .map(item => (
                                        <Branches
                                            key={item.id}
                                            branch={branch}
                                            setBranch={setBranch}
                                            icon={DocumentDuplicateIcon}
                                            title={item.title}
                                            desc={item.description}
                                            id={item.id}
                                            start={item.start}
                                            end={item.end}
                                            setLoading={setLoading}
                                            branchTree={branchTree}
                                            setBranchTree={setBranchTree}
                                            isChecked={isChecked}
                                            handleRadioChange={() => handleRadioChange(item.id)}
                                            checkedId={checkedId}
                                        />
                                    ))
                                :
                                branch.Book
                                    .filter(item => branchTree.Shelf.id ? item.shelf_key === branchTree.Shelf.id : true)
                                    .slice((activePage - 1 )* 12, activePage * 12 + 11)
                                    .map(item => (
                                        <Branches
                                            key={item.id}
                                            branch={branch}
                                            setBranch={setBranch}
                                            icon={BookOpenIcon}
                                            title={item.title}
                                            desc={item.description}
                                            id={item.id}
                                            start={item.start}
                                            end={item.end}
                                            setLoading={setLoading}
                                            branchTree={branchTree}
                                            setBranchTree={setBranchTree}
                                            isChecked={isChecked}
                                            handleRadioChange={() => handleRadioChange(item.id)}
                                            checkedId={checkedId}
                                        />
                                    ))
                            :
                            branch.Shelf
                                .slice((activePage - 1) * 18, (activePage - 1) * 18 + 17)
                                .map(item => (
                                <Branches
                                    key={item.id}
                                    branch={branch}
                                    setBranch={setBranch}
                                    icon={TableCellsIcon}
                                    title={item.title}
                                    desc={item.description}
                                    id={item.id}
                                    start={item.start}
                                    end={item.end}
                                    setLoading={setLoading}
                                    branchTree={branchTree}
                                    setBranchTree={setBranchTree}
                                    isChecked={isChecked}
                                    handleRadioChange={() => handleRadioChange(item.id)}
                                    checkedId={checkedId}
                                />
                            ))}



                            </>

            </div>

            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                    <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 tzext-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between gap-2">
                    <div>
                        <p className="text-sm text-gray-700 flex gap-1">
                            Showing
                            <span className="font-medium">{(activePage - 1) * 17}</span>
                            to
                            <span className="font-medium">{(activePage ) * 17}</span>
                            of
                            <span className="font-semibold">{branchTree.Shelf ? branchTree.Book ? branchTree.Chapter ? branch.Page.length : branch.Chapter.length : branch.Book.length : branch.Shelf.length}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                            <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span class="sr-only">Next</span>
                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DocumentSelector
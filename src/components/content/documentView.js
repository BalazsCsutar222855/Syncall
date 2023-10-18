import { useState, useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import "katex/dist/katex.css";
import {FolderArrowDownIcon, XMarkIcon} from "@heroicons/react/24/solid";
import axios from "axios";
import { getTokenFromCookie } from '../common/setCookies'

const DocumentView = () => {

    const [mode, setMode] = useState(false);
    const [description, setDescription] = useState();
    const token = getTokenFromCookie()
    const id = new URL(window.location.href).searchParams.get("id");

    const handleNoteChange = (val) => {
        setDescription(val)
    }

    useEffect(() => {
        axios.get('https://syncall.balage.top/editor/page/f306b4ab-1e52-46f8-bb07-aeb401774b27', {
            headers: {
                Authorization: `Token ${token}`,
            }
        })
            .then(response => {
                // Set the response data directly in the state
                setDescription(response.data.description);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    //The update is not working beacause it wants a object instead of the description, even tought the api is able to accept partial, therefore i have to list the fetching into an ojbject and then alter this object during the editing
    const handleSave = () => {
        axios
            .put(`https://syncall.balage.top/editor/page/update/f306b4ab-1e52-46f8-bb07-aeb401774b27/`, description, {
                headers: {
                    Authorization: `Token ${token}`,
                }})
            .then((response) => {
                // Handle the API response if needed
                console.log('Event updated successfully:', response.data);
            })
            .catch((error) => {
                console.log('Error updating event:', error);
            });
    }
    

    return (
        <>

            <div className="flex w-full"> 

            <div className="w-full bg-white h-full shadow-xl border-2 border-gray-100 p-5" id="paper">
            <MDEditor
                preview={mode ? "live" : "preview"}
                hideToolbar={!mode}
                height={700}
                highlightEnable={true}
                visibleDragbar={false}
                value={description}
                style={{border: '0px'}}
                onChange={(val) => handleNoteChange(val)}
                previewOptions={{
                    components: {
                    code: ({ inline, children = [], className, ...props }) => {
                        const txt = children[0] || '';
                        if (inline) {
                        if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
                            const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, '$1'), {
                            throwOnError: false,
                            });
                            return <code dangerouslySetInnerHTML={{ __html: html }} />;
                        }
                        return <code>{txt}</code>;
                        }
                        const code = props.node && props.node.children ? getCodeString(props.node.children) : txt;
                        if (
                        typeof code === 'string' &&
                        typeof className === 'string' &&
                        /^language-katex/.test(className.toLocaleLowerCase())
                        ) {
                        const html = katex.renderToString(code, {
                            throwOnError: false,
                        });
                        return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
                        }
                        return <code className={String(className)}>{children}</code>;
                    },
                    },
                }}
            />
            </div>
    
            <div className="w-72 h-full px-6">                    
            <nav>
                <div className='flex'>
                    <span class=" text-xm font-bold text-gray-400">
                            Options
                    </span>
                    <span class=" text-xs font-bold flex-grow text-right text-indigo-400">
                    </span>
    
                </div>
                {
                    mode ?
                        <div className="flex flex-col">
                            <a className="hover:bg-orange-500 bg-orange-400 flex items-center px-2 py-4 my-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-white dark:text-gray-200 rounded-lg  " href="#"
                               onClick={() => handleSave()}>

                                <FolderArrowDownIcon className="h-5 w-5"></FolderArrowDownIcon>
                                <span className="mx-4 text-sm font-bold">
                                Save
                            </span>
                            </a>
                            <a className="hover:bg-red-500 bg-red-400 flex items-center p-2  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-white dark:text-gray-200 rounded-lg  " href="#"
                               onClick={() => setMode(!mode)}>

                                <XMarkIcon className="h-5 w-5"></XMarkIcon>
                                <span className="mx-4 text-sm font-bold">
                                Cancel
                            </span>
                            </a>

                        </div>
                        :
                        <a className="hover:text-indigo-700 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-500 dark:text-gray-200 rounded-lg  " href="#"
                           onClick={() => setMode(!mode)}>


                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>



                            <span className="mx-4 text-sm font-bold">
                        Edit
                    </span>
                        </a>
                }
                <a class="hover:text-indigo-700 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-500 dark:text-gray-200 rounded-lg  " href="#"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>

    
                    <span class="mx-4 text-sm font-bold">
                        Move
                    </span>
                    <span class="flex-grow text-right">
                    </span>
                </a>
                <a class="hover:text-indigo-700 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-500 dark:text-gray-200 rounded-lg  " href="#"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
    
    
    
                    <span class="mx-4 text-sm font-bold">
                        Permissions
                    </span>
                    <span class="flex-grow text-right">
                    </span>
                </a>
                <a class="hover:text-indigo-700 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-500 dark:text-gray-200 rounded-lg  " href="#"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
    
    
    
                    <span class="mx-4 text-sm font-bold">
                        Delete
                    </span>
                    <span class="flex-grow text-right">
                    </span>
                </a>
    
            </nav>
            <nav className="border-t-2 border-gray-200 pt-3 text-gray-400">
                <div className="flex justify-between text-sm">
                    <p>Created:</p>
                    <p>2023.10.9</p>
                </div>
                <div className="flex justify-between text-sm">
                    <p>Updated:</p>
                    <p>2023.10.14</p>
                </div>
            </nav>
            </div>

            </div>
        </>
    )
}

export default DocumentView
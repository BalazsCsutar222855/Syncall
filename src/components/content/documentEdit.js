import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import "katex/dist/katex.css";

const DocumentView = () => {

    const [mode, setMode] = useState(true);
    const [value, setValue] = useState();

    const handleNoteChange = (val) => {
        setValue(val)
    }
    

    return (
        <>
            <div className="w-full h-full flex items-center p-3 gap-6 text-gray-300"> 
                <div className="flex gap-2 text-red-400 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                    </svg>

                    <p>Shelf</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <div className="flex gap-2 text-green-400 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>



                    <p>Book</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <div className="flex gap-2 text-purple-400 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                    </svg>


                    <p>Chapter</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <div className="flex gap-2 text-blue-400 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                    </svg>

                    <p>Book</p>
                </div>
            </div>

            <div className="flex w-full"> 

            <div className="w-full bg-white h-full shadow-xl border-2 border-gray-100 p-5" id="paper">
            <MDEditor
                preview={mode ? "live" : "preview"}
                hideToolbar={!mode}
                height={700}
                value={value}
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
                <a class="hover:text-indigo-700 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-500 dark:text-gray-200 rounded-lg  " href="#"
                    onClick={() => setMode(!mode)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
    
    
                    <span class="mx-4 text-sm font-bold">
                        Edit
                    </span>
                    <span class="flex-grow text-right">
                    </span>
                </a>
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
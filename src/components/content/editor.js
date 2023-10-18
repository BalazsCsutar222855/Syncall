import React, { useState, lazy } from "react";
import { Outlet, Route, Routes, Link } from 'react-router-dom';

const DocumentManager = lazy(() => import('./documentManager'));
const DocumentView = lazy(() => import('./documentView'));
const DocumentSelector = lazy(() => import('./documentSelector'));

const Editor = ({changeView}) => {

    const [page, setPage] = useState("Manager")

    return (
        <div className="w-full h-full" data-color-mode="{light}">
            <div>
            <Routes>
                <Route path="/" element={<DocumentManager />} />
                <Route path="preview/" element={<DocumentView />} />
                <Route path="editor/" element={<DocumentView />} />
            </Routes>
            </div>
        </div>
    )
}


export default Editor
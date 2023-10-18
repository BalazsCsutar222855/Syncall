import React, { useState, useEffect, Suspense } from 'react';
import Sidebar from './sideBar'; // Import the Sidebar component
import Header from './header'
import '../../styles/layout/layoutWorkbench.css'; // Import your CSS file
import { Outlet, Route, Routes, Link } from 'react-router-dom';

import CalendarElement from '../content/calendar'
import Editor from '../content/editor'
import {Home} from '../content/home'

const LayoutWorkbench = ({ toggleDarkMode }) => {
  const [activeView, setActiveView] = useState('view1');
  const [myEvents, setEvents] = useState([])
  const [date, setDate] = useState()

  const changeView = (viewName) => {
    setActiveView(viewName);
  };

  const PlaceholderView2 = () => (
    <div className="view">View 2 Content</div>
  );

  useEffect(() => {
    console.log(date)
  }, [setDate])

  return (
    <div className="layoutWorkbench overflow-hidden" style={{"height":"100vh"}}>
      <Sidebar changeView={changeView} toggleDarkMode={toggleDarkMode} myEvents={myEvents} setDate={setDate} />
      <div className="Content bg-gray-100">
        <div className="container overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='calendar' element={<CalendarElement myEvents={myEvents} setEvents={setEvents} date={date} setDate={setDate}/>}></Route>
          <Route path="books/*" element={<Editor />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default LayoutWorkbench;
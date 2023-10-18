import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LayoutWorkbench from './components/layout/layoutWorkbench';
import SignPage from './components/layout/signPage';
import axios from 'axios'; // Import Axios if you're using it
import { getTokenFromCookie } from './components/common/setCookies';
import Loader from './components/common/loader';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tokenValid, setTokenValid] = useState(); // Initially assume the token is valid
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const token = getTokenFromCookie();

    if (token) {
      axios
        .get('https://syncall.balage.top/check-token/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          // Token is valid
          console.log(response);
          setTokenValid(true);
        })
        .catch((error) => {
          // Token is invalid or expired
          console.log('Token is invalid:', error);
          setTokenValid(false); // Set token validity to false
        })
        .finally(() => {
            setIsLoading(false);
        });
    } else {
      // No token found
      setTokenValid(false); // Set token validity to false
      setIsLoading(false); // Set loading state to false
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Render different content based on the loading state
  return (
    <Router>
      <div>

        
        <Routes>
          <Route
            path="/*"
            element={isLoading ? (<Loader/>) : tokenValid ? (<LayoutWorkbench toggleDarkMode={toggleDarkMode} />) : (<SignPage />)}
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

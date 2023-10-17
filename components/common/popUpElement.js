import React, { useState, useEffect, useRef } from 'react';

export default function Modal({showModal, setShowModal, Content, elements, setElements, popUpTitle, details = null, deleteEvent, setDeleteEvent}) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    // Add event listener when modal is open
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when modal is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              ref={modalRef}
              className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden"
            >

          <div className="flex items-center justify-between px-4 pt-8 sm:px-8">
            <p className="font-semibold text-gray-600 text-xl">{popUpTitle}</p>
            
            <button className="text-gray-600 hover:text-red-500 duration-200" onClick={() => {setShowModal(false)}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

            <Content elements={elements} setElements={setElements} details={details} deleteEvent={deleteEvent} setDeleteEvent={setDeleteEvent}></Content>

            </div>
          </div>
        </>
      )}
    </>
  );
}

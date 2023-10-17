import React, { useState } from "react";

function FAB({ showModal, setShowModal }) {

  const [isOpen, setOpen] = useState(false)

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

    
  return (
    <div className={`absolute bottom-0 right-0 m-5 z-50 h-12 overflow-hidden rounded-full  duration-200 bg-indigo-700`}>
      <div className="relative duration-100 flex flex-col text-white">
        <button onClick={() => handleButtonClick()} className="p-0 w-12 h-12 bg-indigo-700 rounded-full hover:bg-indigo-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
      </div>
    </div>
  );
  
}

export default FAB; // Remove the parentheses here
// className={`relative duration-200 flex flex-col h-24 max-h-${isOpen ? 24 : 12} overflow-hidden bg-indigo-700 rounded-full`}
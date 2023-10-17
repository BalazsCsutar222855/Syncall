import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddEvent = ({ setElements, details }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date(details.start));
  const [endDate, setEndDate] = useState(new Date(details.end));


  const addNewEvent = () => {
    // Generate a random ID (e.g., UUIDv4)
    const newId = uuidv4();

    const colorPairs = [
        { bg: 'bg-red-200', text: 'text-red-500' },
        { bg: 'bg-blue-200', text: 'text-blue-500' },
        { bg: 'bg-indigo-200', text:'text-indigo-500'},
        { bg: 'bg-green-200', text: 'text-green-500' },
        { bg: 'bg-yellow-200', text: 'text-yellow-500' },
        { bg: 'bg-purple-200', text: 'text-purple-500' },
      ];

    // Select a random color pair from the array
    const randomPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];

    // Create a new event object with the generated ID and form values
    const newEvent = {
      title: title,
      description: description,
      start: startDate, // You can set the start date as needed
      end: endDate,   // You can set the end date as needed
      color: `${randomPair.bg} ${randomPair.text}`,
    };

    // Update the elements (events) state with the new event
    setElements((prevElements) => [...prevElements, newEvent]);

    // Clear the form fields
    setTitle("");
    setDescription("");
  };

  // Generate a random UUIDv4
  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-8">
        <div className="">
          <div className="w-full space-y-6">
            <div className="w-full">
              <div className="relative ">
                <input
                  type="text"
                  className="rounded-lg border-gray-100 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="flex space-x-4">
                <div className="rounded-lg border-gray-100 flex flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 mr-2 stroke-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>

                    <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Y/M/D H/M/S"
                    timeCaption="Time"
                    className="w-full" // Make DatePicker fit the parent div
                    />
                </div>

                <div className="rounded-lg border-gray-100 flex flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 mr-2 stroke-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>

                    <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Y/M/D H/M/S"
                    timeCaption="Time"
                    className="w-full" // Make DatePicker fit the parent div
                    />
                </div>
            </div>

            <div className="w-full">
                <div className="relative ">
                <textarea
                  className="h-32 resize-none rounded-lg border-gray-100 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>


            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="py-2 px-4 bg-indigo-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md"
                  onClick={addNewEvent}
                >
                  Add Event
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

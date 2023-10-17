import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DetailsEvent = ({ setElements, details, deleteEvent, setDeleteEvent}) => {
  const [title, setTitle] = useState(details.title);
  const [description, setDescription] = useState(details.description);
  const [startDate, setStartDate] = useState(new Date(details.start));
  const [endDate, setEndDate] = useState(new Date(details.end));
  const [color, setColor] = useState(new Date(details.color));

  const editElement = () => {
    // Create a new event object with the generated ID and form values
    const editedElement = {
      id: details.id,
      title: title,
      description: description,
      start: startDate.toISOString(), // You can set the start date as needed
      end: endDate.toISOString(),   // You can set the end date as needed
      calendar_key: details.calendar_key,
      color: color
    };

    setElements(editedElement);

    // Clear the form fields
    setTitle("");
    setDescription("");
  };

  const deleteElement = () => {
    setDeleteEvent(details.id)
    setTitle("");
    setDescription("");
  }


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

            <div className="flex items-center text-red-500 font-semibold justify-center text-sm pt-10">
              <button className="flex items-center gap-1" onClick={deleteElement}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>

              <p>Delete event</p>
              </button>
            </div>
            
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="py-2 px-4 bg-indigo-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md"
                  onClick={editElement}
                >
                  Update event
                </button>
              </span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEvent;

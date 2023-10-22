import React, { Fragment, useState, useCallback, useMemo, useEffect } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import '../../styles/content/calendar.css'
import FAB from '../common/FAB'
import PopupElement from '../common/popUpElement'
import AddEvent from '../content/addEvent';
import detailsEvent from '../content/detailsEvent'
import axios from 'axios'; // Import Axios if you're using it
import DetailsEvent from '../content/detailsEvent'
import { getTokenFromCookie } from '../common/setCookies'


const CalendarElement = ({setEvents, myEvents, date, setDate}) => {
    
    const DnDCalendar = withDragAndDrop(Calendar)
    const localizer = momentLocalizer(moment)
    const token = getTokenFromCookie()

    const [showModal, setShowModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const [details, setDetails] = useState({})

    const [updatedEvents, setUpdatedEvents] = useState([])

    const [editedEvent, setEditedEvent] = useState([])
    const [deleteEvent, setDeleteEvent] = useState([])
    //Make toolbar work with custom date

    const onNavigate = useCallback((newDate) => setDate(newDate), [setDate])

   // Add new event
    useEffect(() => {
      // Check if myEvents has changed (added a new event)
      if (myEvents != updatedEvents && updatedEvents != 0) {
        setShowModal(false)

        // Get the new event (you can access it based on your logic)
        const newEvent = updatedEvents[updatedEvents.length - 1]; // Assuming it's the last event
        setEvents((prevMyEvents) => [...prevMyEvents, ...updatedEvents]);
        // Make an API call to add the new event
        axios.post('https://syncall.balage.top/9d1cd87b-5caa-4314-a99e-5ff76a059751/add/', newEvent, {
          headers: {
            Authorization: `Token ${token}`,
          }
        })
          .then(response => {
            // Handle the API response if needed
            console.log('Event added successfully:', response.data);
          })
          .catch(error => {
            console.log('Error adding event:', error);
          });

          setUpdatedEvents([])
      }
    }, [updatedEvents]);

    // Edit existing event
    useEffect(() => {

      if(editedEvent != 0)
        {

          const indexOfEventToUpdate = myEvents.findIndex(event => event.id === editedEvent.id);

          // Check if the event with the specified id was found
          if (indexOfEventToUpdate !== -1) {
            // Update the event at the specified index with the new data
          // Merge the new editedEvent with the existing event using spread operator
           myEvents[indexOfEventToUpdate] = { ...myEvents[indexOfEventToUpdate], ...editedEvent };

            const event = {
              "title":editedEvent.title,
              "description":editedEvent.description,
              "start":editedEvent.start,
              "end": editedEvent.end,
            }

            axios
            .put(`https://syncall.balage.top/8bf2cfd1-d5af-405e-994c-616c147170a1/update/${editedEvent.id}/`, event, {
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

          } else {
            // Handle the case where the event with the specified id was not found
            console.log("Event with id not found");
          }

        } setShowDetails(false)
    }, [editedEvent]);
    
    // Delete an event
    useEffect(() => {
      if (deleteEvent !== 0) {

        const indexOfEventToDelete = myEvents.findIndex(event => event.id === deleteEvent);

        // Remove the event from your local state
        myEvents.splice(indexOfEventToDelete, 1); // Remove the event at the specified index
        setEvents([...myEvents]); // Update the state to trigger a re-render

        // Check if the event with the specified id was found
        if (indexOfEventToDelete !== -1) {
          axios
            .delete(`https://syncall.balage.top/9d1cd87b-5caa-4314-a99e-5ff76a059751/delete/${deleteEvent}/`, {
              headers: {
                Authorization: `Token ${token}`,
              }
            })
            .then((response) => {
              // Handle the API response if needed
              console.log('Event deleted successfully:', response.data);

            })
            .catch((error) => {
              console.log('Error deleting event:', error);
            });
        } else {
          // Handle the case where the event with the specified id was not found
          console.log("Event with id not found");
        }
        setShowDetails(false);
      }
    }, [deleteEvent]);

    // Get events from API
    useEffect(() => {
      // Make an HTTP GET request to your API
      axios.get('https://syncall.balage.top/9d1cd87b-5caa-4314-a99e-5ff76a059751/', {
        headers: {
          Authorization: `Token ${token}`,
        }
      })
        .then(response => {
          // Assuming the response.data is an array of events
          const formattedEvents = response.data.map(event => ({
            id: event.id,
            title: event.title,
            description: event.description,
            start: event.start,
            end: event.end,
            color: event.color,
            calendar_key: event.calendar_key,
          }));
    
          // Set the formatted events in the state
          setEvents(formattedEvents);
          console.log(formattedEvents)
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    }, []);



    const handleSelectEvent = useCallback(
        (event) => {
          setDetails(event)
          setShowDetails(true)
        },
        []
      )

    const handleSelectSlot = useCallback(
        (event) => {
          setDetails(event)
          setShowModal(true)
        },
        [setEvents]
      )

    const moveEvent = useCallback(
        ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {

          const updatedDate = {
            id: event.id,
            start: start,
            end: end
          }

          setEditedEvent(updatedDate)

          const { allDay } = event
          if (!allDay && droppedOnAllDaySlot) {
            event.allDay = true
          }
    
          setEvents((prev) => {
            const existing = prev.find((ev) => ev.id === event.id) ?? {}
            const filtered = prev.filter((ev) => ev.id !== event.id)
            return [...filtered, { ...existing, start, end, allDay }]
          })
        },
        [setEvents]
      )

    const resizeEvent = useCallback(
        ({ event, start, end }) => {

            const updatedDate = {
              id: event.id,
              start: start,
              end: end
            }

            setEditedEvent(updatedDate)
  

            setEvents((prev) => {
            const existing = prev.find((ev) => ev.id === event.id) ?? {}
            const filtered = prev.filter((ev) => ev.id !== event.id)
            return [...filtered, { ...existing, start, end }]
      })
    },
    [setEvents]
      )


      const [windowHeight, setWindowHeight] = useState(window.innerHeight);

      useEffect(() => {
        // Function to update the window height and set it in state
        const updateWindowHeight = () => {
          setWindowHeight(window.innerHeight);
        };
    
        // Add an event listener for the "resize" event to update the window height when the window is resized
        window.addEventListener('resize', updateWindowHeight);
    
        // Initial call to set the initial window height
        updateWindowHeight();
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', updateWindowHeight);
        };
      }, []);
    
      const eventPropGetter = useCallback(
        (event) => ({
          className: event.color,
        }),
        []
      )

    return (
        <div className='Calendar'>
            <DnDCalendar
                localizer={localizer}
                events={myEvents}
                onEventDrop={moveEvent}
                onEventResize={resizeEvent}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                date={date}
                onNavigate={onNavigate}
                draggableAccessor={(event) => true}
                startAccessor={(event) => { return new Date(event.start) }}
                endAccessor={(event) => { return new Date(event.end) }}
                style={{ height: windowHeight}}
                eventPropGetter={eventPropGetter}
            />


            <PopupElement showModal={showModal} setShowModal={setShowModal} Content={AddEvent} popUpTitle={"Add new Event"} elements={updatedEvents} setElements={setUpdatedEvents} details={details}></PopupElement>
            <PopupElement showModal={showDetails} setShowModal={setShowDetails} Content={DetailsEvent} editable popUpTitle={"Event details"} elements={editedEvent} setElements={setEditedEvent} details={details} deleteEvent={deleteEvent} setDeleteEvent={setDeleteEvent}></PopupElement>
            <FAB showModal={showModal} setShowModal={setShowModal}></FAB>
        </div>
    )


}

export default CalendarElement
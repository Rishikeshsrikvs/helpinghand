import React, { useState, useEffect } from 'react';
import api from '../../../api/api'; // Axios instance
import './Landevent.css';

const Landevent = () => {
  const [events, setEvents] = useState([]); // State to hold events data
  const [activeEvent, setActiveEvent] = useState(null); // State to track the active event

  // Fetch events data from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/getevent');
        const eventData = response.data.map((event) => ({
          id: event._id, // Assuming _id is the unique identifier
          title: event.event_name,
          description: event.event_desc,
          date: new Date(event.event_date).toLocaleDateString(), // Format the date as needed
          location: event.event_location,
          imageUrl: `${api.defaults.baseURL}/event/${event._id}` // Dynamically generate image URL using baseURL from Axios instance
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id); // Toggle active event on click
  };

  return (
    <div className='landeventparent'>
      <h1>Upcoming Events</h1>
      <div className="lecon">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className={`leitem ${activeEvent === event.id ? 'flipped' : ''}`} onClick={() => handleEventClick(event.id)}>
              <div className="lefront">
                {/* Use the dynamically generated image URL */}
                <img src={event.imageUrl} alt={event.title} />
              </div>
              <div className="leback">
                <h1>{event.title}</h1>
                <div className="letext">
                  <p>{event.description}</p>
                </div>
                <div className="ledown">
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </div>
    </div>
  );
};

export default Landevent;

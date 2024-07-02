import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css"; // Make sure this path is correct based on your project structure
import plusIcon from '../../assets/plusSign.png';
import clock from '../../assets/clockBlack.png';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const [showCalendar, setShowCalendar] = useState(false); // State for controlling calendar visibility
  const [popupDate, setPopupDate] = useState(new Date()); // State for date in the popup
  const [startTime, setStartTime] = useState("00:00"); // State for start time in the popup
  const [endTime, setEndTime] = useState("23:59"); // State for end time in the popup
  const [events, setEvents] = useState([]); // State for calendar events
  const [eventPopup, setEventPopup] = useState(null); // State for event popup visibility and position
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(date);
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
  };

  const handleCircleClick = () => {
    setPopupDate(selectedDate); // Set popup date initially to selectedDate
    setShowPopup(true);
  };

  const handlePopupDateClick = () => {
    setShowCalendar(!showCalendar); // Toggle calendar visibility
  };

  const handlePopupDateChange = (date) => {
    setPopupDate(date);
    setShowCalendar(false); // Hide calendar after date selection
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const addEvent = () => {
    const newEvent = {
      title: "Session", // You can customize this
      start: `${popupDate.toISOString().split('T')[0]}T${startTime}:00`,
      end: `${popupDate.toISOString().split('T')[0]}T${endTime}:00`,
      id: new Date().getTime() // Unique ID for the event
    };
    setEvents([...events, newEvent]);
    setShowPopup(false);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        times.push(formattedTime);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleEventClick = (arg) => {
    const { pageX, pageY } = arg.jsEvent;
    const offsetX = -400; // Adjust horizontal offset as needed
    const offsetY = 20; // Adjust vertical offset as needed
    setEventPopup({
      id: arg.event.id,
      title: arg.event.title,
      start: arg.event.start,
      end: arg.event.end,
      x: pageX + offsetX,
      y: pageY + offsetY
    });
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setEventPopup(null);
    const calendarApi = calendarRef.current.getApi();
    const calendarEvent = calendarApi.getEventById(id);
    if (calendarEvent) {
      calendarEvent.remove();
    }
  };

  const closeEventPopup = () => {
    setEventPopup(null);
  };

  return (
    <div className="calendar-container">
      <div className="columnContainer">
        <div className="circleContainer">
          <div className="circle" onClick={handleCircleClick}>
            <img src={plusIcon} alt="Plus Icon" className="plus-icon" />
          </div>
        </div>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <span className="close" onClick={closePopup}>&times;</span>
              <div className="popup-content">
                <div className="popup__header">
                  <img src={clock} alt="clock" className="clockIcon" />
                  <div className="popup__date" onClick={handlePopupDateClick}>
                    {formatDate(popupDate)}
                  </div>
                </div>
                {showCalendar && (
                  <div className="calendar-popup">
                    <DatePicker
                      selected={popupDate}
                      onChange={handlePopupDateChange}
                      inline
                    />
                  </div>
                )}
                <div className="popup__timeContent">
                  <div className="popup__timeOne">
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      list="startTimes"
                    />
                    <datalist id="startTimes">
                      {timeOptions.map((time) => (
                        <option key={time} value={time} />
                      ))}
                    </datalist>
                  </div>
                  <div className="popup__timeSeparator"> - </div>
                  <div className="popup__timeTwo">
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      list="endTimes"
                    />
                    <datalist id="endTimes">
                      {timeOptions.map((time) => (
                        <option key={time} value={time} />
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className="saveButton__container">
                  <button className="saveButton" onClick={addEvent}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="small-calendar">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
        </div>
      </div>
      <div className="main-calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={"90vh"}
          dateClick={handleDateClick}
          className="custom-calendar"
          events={events}
          eventClick={handleEventClick}
        />
      </div>
      {eventPopup && (
        <div 
          className="event-popup" 
          style={{ top: eventPopup.y, left: eventPopup.x }}
        >
          <div className="event-popup__content">
            <span className="close" onClick={closeEventPopup}>&times;</span>
            <span>{eventPopup.title}</span>
            <span>{new Date(eventPopup.start).toLocaleTimeString()} - {new Date(eventPopup.end).toLocaleTimeString()}</span>
            <button onClick={() => deleteEvent(eventPopup.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;

import React, { useState } from "react";
const App = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!eventName.trim()) {
      newErrors.name = "Event name is required";
    }
    if (!eventDate) {
      newErrors.date = "Event date is required";
    }
    if (!eventLocation.trim()) {
      newErrors.location = "Event location is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setEvents([
        ...events,
        { name: eventName, date: eventDate, location: eventLocation },
      ]);
      setEventName("");
      setEventDate("");
      setEventLocation("");
      setErrors({});
    }
  };

  const handleRemoveEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Event Management System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Organize and manage your events with style
          </p>
        </div>

        <div className="p-8 mb-16 border border-gray-100 shadow-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl dark:border-gray-700">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
            Create a New Event
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className={`w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="date"
                placeholder="Event Date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className={`w-full px-6 py-4 text-white bg-gray-50 dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.date
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
              {errors.date && (
                <p className="mt-2 text-sm text-red-500">{errors.date}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Event Location"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className={`w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.location
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
              {errors.location && (
                <p className="mt-2 text-sm text-red-500">{errors.location}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-4 text-lg font-medium text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl"
            >
              Create Event
            </button>
          </form>
        </div>

        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 border border-gray-100 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl hover:shadow-2xl dark:border-gray-700 group hover:-translate-y-1"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-blue-600">
                  {event.name}
                </h3>
                <p className="flex items-center mb-3 text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-2xl">📅</span>
                  {event.date}
                </p>
                <p className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-2xl">📍</span>
                  {event.location}
                </p>
                <button
                  onClick={() => handleRemoveEvent(index)}
                  className="px-4 py-2 mt-4 text-sm font-medium text-red-600 transition-all duration-300 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove Event
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

'use client'
import React, { useState, useEffect } from "react";

export default function NewEvent() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventCreated, setEventCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      name,
      date,
      location,
      description,
    };
    console.log(newEvent);

    setEventCreated(true);

    setName("");
    setDate("");
    setLocation("");
    setDescription("");

    setEventCreated(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        {eventCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Event Created
          </div>
        )}
        <div className="w-full max-w-md bg-rose-700 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Create New Event
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-800">Event Name:</span>
              <input
                required
                onChange={handleNameChange}
                value={name}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-800">Event Date:</span>
              <input
                type="date"
                required
                onChange={handleDateChange}
                value={date}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4 ">
              <span className="text-gray-800">Event Location:</span>
              <input
                required
                onChange={handleLocationChange}
                value={location}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-800">Event Description:</span>
              <textarea
                required
                onChange={handleDescriptionChange}
                value={description}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                rows="3"
              />
            </label>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-rose-950 hover:bg-rose-950 rounded-md text-white"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

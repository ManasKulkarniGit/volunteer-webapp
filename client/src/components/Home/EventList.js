import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ event }) => {
  const arrayBuffer = event?.event_image?.data?.data;
  const base64String = btoa(
    new Uint8Array(arrayBuffer).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, "")
  );
  return (
    <div>
      <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          class="object-cover w-full h-56"
          src={`data:image/png;base64,${base64String}`}
          alt="avatar"
        />
        <Link to={`/register/event/${event._id}`}>
          <div class="py-5 text-center bg-gray-300">
            <p
              href="#"
              class="block text-2xl  font-bold text-gray-800 dark:text-dark"
            >
              {event.title}
            </p>
            <span class="text-sm text-gray-700 dark:text-gray-700">
              {event.description}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventList;

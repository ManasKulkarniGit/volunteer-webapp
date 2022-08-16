import React from "react";

const UserEvents = ({ data, handleDelete }) => {
  const arrayBuffer = data?.event_image?.data?.data;
  const base64String = btoa(
    new Uint8Array(arrayBuffer).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, "")
  );

  const newDate = new Date(data.date);

  return (
    <div className="relative grid md:grid-cols-4 gap-3 bg-white rounded-xl">
      <img
        src={`data:image/png;base64,${base64String}`}
        className="rounded-xl md:m-5 object-cover w-full h-56"
        width="150px"
        height="80px"
        alt="event"
      />
      <div className="m-5 md:col-span-2 md:px-5">
        <h1 className="text-xl font-bold">{data.events}</h1>
        <h1 className="text-lg font-semibold">{newDate.toDateString()}</h1>
      </div>
      <div className="m-5 md:absolute bottom-0 right-0">
        <button
          className="btn btn-ghost"
          onClick={(e) => handleDelete(data._id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default UserEvents;

import React, { useEffect, useState } from "react";
import UserEvents from "./UserEvents";

const UserDashboard = () => {
  const [event, setEvent] = useState();
  const [eventFunc, getEventFunction] = useState();
  // const [ handleDelete, setHandleDelete] = useState();
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch("/volunteering", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  };

  const  handleDelete =(id) => {
    fetch("/volunteering/delete-volunteering/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Event deleted successfully");
        getEvents();
      });
  };

  return (
    <div className="w-2/3 mx-auto min-h-full my-24 ">
      <div className="max-w-xs mx-auto md:max-w-full overflow-hidden grid md:grid-cols-2 gap-5">
        {event?.map((data) => (
          <UserEvents key={data._id} data={data} handleDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;

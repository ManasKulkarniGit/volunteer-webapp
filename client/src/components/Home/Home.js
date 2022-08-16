import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Hero from "../header/Hero";
import EventList from "./EventList";

const Home = ({ setEventid }) => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("/event")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);
  return (
    <div className="">
      <Hero />

      <div id="events" className=" my-28 grid  md:grid-cols-3 gap-5 mx-auto w-3/4 -z-10 mt-20">
        {event?.map((event) => (
          <EventList key={event._id} event={event} setEventid={setEventid} />
        ))}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;

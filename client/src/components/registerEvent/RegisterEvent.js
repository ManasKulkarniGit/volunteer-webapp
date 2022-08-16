import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RegisterEvent = () => {
  const { id } = useParams();
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [events, setEvents] = useState();
  const [event_image, setEventImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/event/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEventImage(result.event_image);
        setEvents(result.title);
      });
  }, [id]);

  const handleSubmit = () => {
    fetch("/volunteering/add-volunteering", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        date,
        description,
        events,
        event_image,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("register successfully");
        navigate("/dashboard");
      });
  };

  return (
    <div className="my-10">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Register Event</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                value={name}
                  placeholder={sessionStorage.getItem("name")}
                  onChange={(e) => setName(e.target.value)}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder={sessionStorage.getItem("email")}
                  onChange={(e) => setEmail(e.target.value)}
                  class="input input-bordered"
                  value={email}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Date</span>
                </label>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onChange={(e) => setDate(e.target.value)}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Events</span>
                </label>
                <input
                  type="text"
                  placeholder={events}
                  onChange={(e) => setEvents(e.target.value)}
                  class="input input-bordered"
                  value={events}
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary" onClick={handleSubmit}>
                  Resgister
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;

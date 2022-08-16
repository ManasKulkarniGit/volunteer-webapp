import React, { useState } from "react";
import SideBar from "./SideBar";

const AddEvents = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [file, setFile] = useState();

  const handleEvent = (e) => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("date", date);
    data.append("event_image", file);

    fetch("/event/add-events", {
      method: "POST",
      credentials: "include",
      headers: {
        authorization: "Bearer " + sessionStorage.getItem("token"),
        // "Content-Type": "application/json"
      },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        alert("successfully add event");
        console.log(result);
      });
  };
  return (
    <div className="">
      <SideBar />
      <div class="min-h-full flex items-stretch justify-center py-12 px-4 sm:px-6 lg:px-8 absolute left-72 ">
        <div class="max-w-md w-full space-y-8">
          <div class="mt-8 space-y-6" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  placeholder="title"
                  onChange={(e) => setTitle(e.target.value)}
                  name="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label for="description" class="sr-only">
                  description
                </label>
                <input
                  id="description"
                  type="text"
                  placeholder="describtion"
                  onChange={(e) => setDescription(e.target.value)}
                  autocomplete="current-description"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label for="text" class="sr-only">
                  text
                </label>
                <input
                  id="text"
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onChange={(e) => setDate(e.target.value)}
                  autocomplete="current-text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label for="file" class="sr-only">
                  file
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  autocomplete="current-file"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleEvent}
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;

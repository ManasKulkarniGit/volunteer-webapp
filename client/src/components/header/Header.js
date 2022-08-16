import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

function Nav() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate("/admin/login");
  };

  return (
    <div className="">
      <div class="drawer ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar glass fixed z-10">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <Link to="/">
                {/* <img src="./Volunteering2.png" alt="" /> */}
              </Link>
            </div>
            <div class="flex-none hidden lg:block mr-5">
              <ul class="menu menu-horizontal">
                <li className="hover:text-primary ">
                  <Link to="/">Home</Link>
                </li>

                <li className="hover:text-primary ">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="hover:text-primary ">
                  <Link to="/donation">Donation</Link>
                </li>
              </ul>
            </div>
            <div class="flex-none  lg:block">
              <ul class="menu menu-horizontal">
                {token ? (
                  <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost ">
                      <div class="w-24 rounded  text-primary">
                        {sessionStorage.getItem("name")}
                      </div>
                    </label>
                    <ul
                      tabindex="0"
                      class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
                    >
                      <li>
                        {sessionStorage.getItem("email") ===
                        "jishan@gmail.com" ? (
                          <p
                            onClick={(e) => {
                              navigate("/admin");
                            }}
                          >
                            Admin
                          </p>
                        ) : (
                          <p onClick={(e) => {navigate("/dashboard")}}>Dashboard</p>
                        )}
                      </li>

                      <li>
                        <p
                          onClick={(e) => {
                            sessionStorage.clear();
                            navigate("/login");
                          }}
                          className=" "
                        >
                          Logout
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <Link to="/register" class="btn mr-3 ">
                      Register
                    </Link>
                    <button class="btn btn-accent" onClick={handleAdmin}>
                      Admin
                    </button>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* body */}
          <MainHeader />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay "></label>

          <ul class="menu p-4 overflow-y-auto w-80 glass">
            <div class="form-control">
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered"
              />
            </div>
            <li className="hover:text-primary mt-5">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="/donation">Events</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="/donation">Blog</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="/donation">Donation</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;

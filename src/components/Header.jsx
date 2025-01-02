import React from "react";
import settings from "../assets/settings.png";
import user from "../assets/user.png";

function Header() {
  return (
    <>
      <section className="header p-2 bg-white">
        <div className="container m-auto ring-2 ring-blue-500 px-4 py-1 rounded-full">
          <nav className="flex justify-between items-center">
            <ul className="flex items-center gap-3">
              <li>
                <a href="#jobs" className="font-inter font-medium text-lg">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#banner" className="font-inter font-medium text-lg">
                  Info
                </a>
              </li>
            </ul>
            <h1 className="font-inter font-extrabold text-3xl text-blue-500 pr-5">
              JobList
            </h1>
            <ul className="flex items-center gap-5">
              <li>
                <img src={settings} alt="settings" className="cursor-pointer" />
              </li>
              <li>
                <img src={user} alt="user" className="cursor-pointer" />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;

import React from "react";
import settings from "../assets/settings.png";
import user from "../assets/user.png";

function Header() {
  return (
    <>
      <section className="header p-2 absolute z-10 w-full">
        <div className="container m-auto">
          <nav className="flex justify-between items-center">
            <h1 className="font-inter font-extrabold text-3xl text-white pr-5">
              JobList
            </h1>
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="#jobs"
                  className="font-inter font-medium text-white text-lg transition-all hover:border-b-4 hover:border-indigo-500 pb-1"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#banner"
                  className="font-inter font-medium text-white text-lg transition-all hover:border-b-4 hover:border-indigo-500 pb-1"
                >
                  Info
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;

import React from "react";
import Arrow from "../assets/up-arrow.png";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function Footer() {
  return (
    <div>
      <section className="footer bg-blue-600 text-white py-6">
        <div className="container mx-auto grid grid-cols-12 items-center">
          <div className="col-span-4 text-center sm:text-left">
            <p className="text-sm font-inter font-medium">Copyright 2025 ©</p>
          </div>
          <div className="col-span-4 text-center sm:text-center">
            <h1 className="font-inter font-extrabold text-3xl text-white pr-5">
              JobList
            </h1>
          </div>
          <div className="col-span-4 text-center sm:text-right flex justify-end items-center gap-2">
            <p className="text-sm font-inter font-medium">GCMA CODE</p>
            <img
              src={Arrow}
              id="upArrow"
              className="w-full max-w-8"
              alt="Yukarı Git"
              onClick={handleScrollToTop}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from "react";
import video from "../assets/banner_video.mp4";

function Banner() {
  return (
    <section className="bg-hero-pattern min-h-screen relative">
      <video
        className="videoTag absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="container m-auto relative">
        <div className=" min-h-screen">
          <div className="grid-rows-1">
            {/* <h1 className="text-9xl drop-shadow-xl font-inter text-center">
              Shape Your Career, Realize Your Dreams
            </h1> */}
            <div className="button flex items-center justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
              <a
                href="#jobs"
                className="bg-blue-500 font-inter font-medium text-white rounded-md text-lg transition-all hover:bg-blue-600 px-5 py-3 w-full"
              >
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

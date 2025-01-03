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
        <div className="justify-around min-h-screen flex items-center">
          <div className="grid-rows-1">
            <h1 className="text-9xl drop-shadow-xl font-inter text-center">
              Shape Your Career, Realize Your Dreams
            </h1>
            <div className="button flex items-center justify-center">
              <button className="">Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

import React from "react";
import video from "../assets/banner_video.mp4";

function Banner() {
  return (
    <section className="bg-hero-pattern min-h-screen relative">
      <video
        className="videoTag absolute top-0 left-0 w-full h-full object-cover w-full"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="container m-auto relative">
        <div className="justify-around min-h-screen flex items-center">
          <div className="grid-rows-6">
            <h1 className="text-9xl text-aqua drop-shadow-xl">GET JOB</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

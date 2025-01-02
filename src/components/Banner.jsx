import React from "react";
import video from "../assets/banner_video.mp4";

function Banner() {
<<<<<<< HEAD
  return <></>;
=======
  return (
    <section className="bg-hero-pattern min-h-screen">
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container m-auto">
        <div className="justify-around min-h-screen flex items-center ">
          <div className="grid-rows-6">
            <h1 className="text-9xl text-aqua drop-shadow-xl">GET JOB</h1>
          </div>
          <div className="grid-rows-6"></div>
        </div>
      </div>
    </section>
  );
>>>>>>> 289043deef656b083dd3f64e58228def30139629
}

export default Banner;

import React, { useState } from "react";
import clock from "../assets/clock.png";

const JobCard = ({
  logo,
  company,
  title,
  type,
  location,
  description,
  email,
  clock,
}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible((prev) => !prev);
  };

  return (
    <div
      className="job-card justify-between flex items-center bg-cardBg w-full max-w-3xl rounded-lg drop-shadow-md cursor-pointer"
      onClick={toggleDetails} // Tıklama ile görünürlük değiştiriliyor
    >
      <div className="flex justify-center items-center">
        <div>
          <img
            src={logo}
            alt={`${company} logo`}
            className="job-logo w-full max-w-28 m-4 transition-all hover:-translate-y-1 drop-shadow-lg"
          />
        </div>
        <div className="m-4 flex flex-col">
          <h3 className="font-inter font-bold text-md text-blue-600 hover:text-slate-950 cursor-pointer transition-all">
            {company}
          </h3>
          <p className="font-inter font-medium text-2xl text-slate-950 hover:text-blue-600 transition-all hover:-translate-y-1 cursor-pointer">
            {title}
          </p>
          <p className="font-inter font-light text-sm flex items-center gap-2 cursor-pointer bg-blue-600 text-white p-2 rounded-md drop-shadow-sm justify-center mt-2 w-full min-w-56">
            <img src={clock} className="w-full max-w-5" alt="Clock icon" />
            {type}
          </p>
        </div>
      </div>
      <div className="m-4 font-inter">
        <p className="font-inter font-medium text-white bg-yellow-400 p-2 w-full min-w-32 text-center rounded-md drop-shadow-sm">
          {location}
        </p>
      </div>
      {/* isDetailsVisible durumuna bağlı olarak className dinamik hale getirildi */}
      <div className={isDetailsVisible ? "block" : "hidden"}>
        <p>{description}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default JobCard;

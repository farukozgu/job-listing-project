import React from "react";

const JobCard = ({
  logo,
  company,
  description,
  title,
  type,
  location,
  email,
}) => (
  <div className="job-card">
    <img src={logo} alt={`${company} logo`} className="job-logo" />
    <h3>{company}</h3>
    <p>{title}</p>
    <p>{type}</p>
    <p>{description}</p>
    <p>{location}</p>
    <p>{email}</p>
  </div>
);

export default JobCard;

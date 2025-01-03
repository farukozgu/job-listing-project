import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => (
  <div className="job-list">
    {jobs.map((job, index) => (
      <JobCard
        key={index}
        logo={job.logo}
        company={job.company}
        title={job.title}
        type={job.type}
        location={job.location}
        email={job.email}
        description={job.description}
      />
    ))}
  </div>
);

export default JobList;

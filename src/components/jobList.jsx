import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => (
  <div className="job-list flex justify-center items-center flex-col gap-8">
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

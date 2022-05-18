import styles from "./Jobs.module.scss";
import React from "react";
import ReactMarkdown from "react-markdown";

const CustomList = ({ children }) => <ul className="list-disc list-inside">{children}</ul>;

function JobCard(props) {
  return (
    <div className={`flex flex-col gap-4 bg-gray-100 p-8 py-4 rounded-lg ${styles["job-card"]}`}>
      {/* Position Title */}
      <h3 className="font-semibold text-xl text-center">{props.title}</h3>
      {/* Description */}
      <ReactMarkdown className="">
        {props.description}
      </ReactMarkdown>
      <h4 className="text-center text-lg font-semibold underline">Requirements</h4>
      {/* Requirements */}
      <ReactMarkdown components={{
        ul: ({ node, ...ulProps }) => <CustomList {...ulProps}/>,
      }}>
        {props.requirements}
      </ReactMarkdown>
    </div>
  );
}

export default function Jobs(props) {
  return (
    <div className="grid">
      {/* Job Cards */}
      {props.jobs.map((job) => (
        <JobCard key={job.id} title={job.title} description={job.description} requirements={job.requirements} />
      ))}
    </div>
  );
}

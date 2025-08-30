import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Jobs.module.scss";

const StyledList = ({ children }: { children?: React.ReactNode }) => (
  <ul className="list-disc list-inside">{children}</ul>
);

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string;
}

function JobCard(props: Job) {
  return (
    <div
      className={`flex flex-col gap-4 bg-gray-100 px-8 py-4 rounded-lg ${styles.jobCard}`}
    >
      <h3 className="font-semibold text-2xl text-center">{props.title}</h3>
      <ReactMarkdown>{props.description}</ReactMarkdown>
      <ReactMarkdown
        components={{
          ul: ({ node: _node, ...ulProps }) => <StyledList {...ulProps} />,
        }}
      >
        {props.requirements}
      </ReactMarkdown>
    </div>
  );
}

const Jobs: React.FC<{ jobs: Job[] }> = (props) => {
  if (props.jobs.length === 0) {
    return (
      <p className="text-lg">
        We are always seeking exceptional talent that is passionate about making
        a difference in the lives of patients with cancer or autoimmune
        disorders. If you share our mission, and are interested in joining our
        team, please reach out to us via email at{" "}
        <a href="mailto:contact@anwitabio.com">contact@anwitabio.com</a>.
      </p>
    );
  }
  return (
    <div className="grid gap-4">
      {/* Job Cards */}
      {props.jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default Jobs;

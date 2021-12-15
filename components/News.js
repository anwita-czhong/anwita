import React from "react";
import ReactMarkdown from "react-markdown";
import remarkSuperSub from "remark-supersub";

const nth = function(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

// Adapted from https://stackoverflow.com/a/33909265/10077280
function parseISOLocalDateOnly(s) {
  const b = s.split(/\D/);
  return new Date(b[0], b[1] - 1, b[2]);
}

function NewsItem(props) {

  // Adapted from https://stackoverflow.com/a/15397495/10077280
  const date = parseISOLocalDateOnly(props.date);
  const dateString = `**Date**: ${date.toLocaleDateString("en-US", { month: "long" })} ${date.getDate()}^${nth(date.getDate())}^, ${date.getFullYear()}`;

  return (
    <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
      {/* Date */}
      <ReactMarkdown
        plugins={[remarkSuperSub]}
        components={{
          sub: "sub",
          super: "super",
        }}
        className="mb-4"
      >
        {dateString}
      </ReactMarkdown>
      {/* Copytext */}
      <ReactMarkdown
        className="mb-4"
      >
        {props.description}
      </ReactMarkdown>
      {/* Press release link */}
      <p className="mt-auto"><b><a target='_blank' rel='noreferrer' href={props.pressReleaseLink}>Press Release</a></b></p>
    </div>
  );
}

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newsPreview: null };
  }

  handleNewsPressReleaseClick(event, clickedUrl) {
    // TODO
  }

  render() {
    const newsItems = this.props.newsItems.map(newsItem => {
      const { id, ...other } = newsItem;
      return <NewsItem
        key={id}
        onClick={(event) => this.handleNewsPressReleaseClick(event, newsItem.pressReleaseLink)}
        {...other}
      />;
    });

    return (
      <div className="text-xl grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {newsItems}
      </div>
    );
  }
}

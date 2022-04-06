import React from "react";
import ReactMarkdown from "react-markdown";

function Publication(props) {

  return (
    <li className="flex justify-center gap-4">
      <p className="font-bold">{props.title}</p>
      <ReactMarkdown
        className=""
      >
        {props.description}
      </ReactMarkdown>
    </li>
  );
}

export default class Publications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { publicationsPreview: null };
  }

  handlePublicationClick(event, clickedUrl) {
    // Potential TODO in the future: show on current page instead of in new tab
  }

  render() {
    return (
      <ul className="text-lg">
        {this.props.publications.map((publication) => (
          <Publication
            key={publication.id}
            title={publication.title}
            description={publication.description}
          />
        ))}
      </ul>
    );
  }
}

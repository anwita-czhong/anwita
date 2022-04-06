import React from "react";
import ReactMarkdown from "react-markdown";

function Publication(props) {

  return (
    <div className="flex flex-col bg-gray-100 p-6 rounded-lg">
      <p className="font-bold">{props.title}</p>
      <ReactMarkdown
        className=""
      >
        {props.description}
      </ReactMarkdown>
    </div>
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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {this.props.publications.map((publication) => (
          <Publication
            key={publication.id}
            title={publication.title}
            description={publication.description}
          />
        ))}
      </div>
    );
  }
}

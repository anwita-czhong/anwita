import styles from "./Publications.module.scss";
import React from "react";
import ReactMarkdown from "react-markdown";

function Publication(props) {

  return (
    <li className="flex">
      <ReactMarkdown
        components={{ p: "span" }}
        linkTarget="_blank"
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
      <ol className={styles.publications + " text-lg gap-4"}>
        {this.props.publications.map((publication) => (
          <Publication
            key={publication.id}
            description={publication.description}
          />
        ))}
      </ol>
    );
  }
}

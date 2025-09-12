import styles from "./Publications.module.scss";
import ReactMarkdown from "react-markdown";

export interface Publication {
  id: string;
  description: string;
}

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  );
}

const Publication: React.FC<{ item: Publication }> = ({ item }) => {
  return (
    <li className="flex">
      <ReactMarkdown
        components={{ p: "span", a: LinkRenderer }}
      >
        {item.description}
      </ReactMarkdown>
    </li>
  );
}

const Publications: React.FC<{ publications: Publication[] }> = ({ publications }) => {
  const sortedPublications = publications.toSorted((a, b) => parseInt(b.id) - parseInt(a.id));
  return (
    <ol className={styles.publications + " text-lg gap-4"}>
      {sortedPublications.map((item) => (
        <Publication key={item.id} item={item} />
      ))}
    </ol>
  );
};

export default Publications;

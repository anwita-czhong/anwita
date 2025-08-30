import ReactMarkdown from "react-markdown";
import remarkSuperSub from "remark-supersub";

export interface NewsItem {
  id: string;
  date: string;
  description: string;
  link: string;
}

function nth(d: number): string {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

// Adapted from https://stackoverflow.com/a/33909265/10077280
function parseISOLocalDateOnly(dateString: string): Date {
  const b = dateString.split(/\D/);
  if (b.length < 3) {
    return new Date(NaN); // Invalid date
  }
  const year = parseInt(b[0], 10);
  const month = parseInt(b[1], 10) - 1;
  const day = parseInt(b[2], 10);
  return new Date(year, month, day);
}

const NewsItem: React.FC<{ item: NewsItem }> = ({ item }) => {
  const { id, date: dateString, description, link } = item;
  // Adapted from https://stackoverflow.com/a/15397495/10077280
  const date = parseISOLocalDateOnly(dateString);
  const formattedDateString = `**Date**: ${date.toLocaleDateString("en-US", { month: "long" })} ${date.getDate()}^${nth(date.getDate())}^, ${date.getFullYear()}`;

  return (
    <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
      {/* Date */}
      <div className="mb-4">
        <ReactMarkdown
          remarkPlugins={[remarkSuperSub]}
          components={{
            sub: "sub",
            sup: "sup",
          }}
        >
          {formattedDateString}
        </ReactMarkdown>
      </div>
      {/* Copytext */}
      <div className="mb-4">
        <ReactMarkdown>
          {description}
        </ReactMarkdown>
      </div>
      {/* Press release link */}
      <p className="mt-auto"><b><a target='_blank' rel='noreferrer' href={link}>Press Release</a></b></p>
    </div>

  );
};

const News: React.FC<{ newsItems: NewsItem[] }> = ({ newsItems }) => {
  return (
    <div className="text-xl grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {newsItems.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default News;

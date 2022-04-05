// Requires environment variables `AIRTABLE_API_KEY` and `AIRTABLE_BASE` to be set
import Airtable from "airtable";
const base = new Airtable().base(process.env.AIRTABLE_BASE);

export function getAllNews(sort = [{ field: "Date", direction: "desc" }]) {
  return new Promise((resolve, reject) => {
    const allNews = [];

    base("News").select({
      sort: sort,
    }).eachPage(
      async function page(records, fetchNextPage) {
        for (const record of records) {
          allNews.push({
            id: record.get("ID"),
            date: record.get("Date"),
            description: record.get("Copytext"),
            pressReleaseLink: `/assets/news/pr-${record.get("ID")}.pdf`,
          });
        }

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve(allNews);
        }
      }
    );
  });
}

// Requires environment variables `AIRTABLE_API_KEY` and `AIRTABLE_BASE` to be set
import Airtable from "airtable";
const base = new Airtable().base(process.env.AIRTABLE_BASE);

export function getAllJobs(sort = [{ field: "ID", direction: "asc" }]) {
  return new Promise((resolve, reject) => {
    const allJobs = [];

    base("Jobs").select({
      sort: sort,
    }).eachPage(
      async function page(records, fetchNextPage) {
        for (const record of records) {
          allJobs.push({
            id: record.get("ID"),
            title: record.get("Title"),
            description: record.get("Description"),
            requirements: record.get("Requirements"),
          });
        }

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve(allJobs);
        }
      }
    );
  });
}

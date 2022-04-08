// Requires environment variables `AIRTABLE_API_KEY` and `AIRTABLE_BASE` to be set
import Airtable from "airtable";
const base = new Airtable().base(process.env.AIRTABLE_BASE);

export function getAllPublications(sort = [{ field: "ID", direction: "asc" }]) {
  return new Promise((resolve, reject) => {
    const allPublications = [];

    base("Publications").select({
      sort: sort,
    }).eachPage(
      async function page(records, fetchNextPage) {
        for (const record of records) {
          allPublications.push({
            id: record.get("ID"),
            description: record.get("Description"),
          });
        }

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve(allPublications);
        }
      }
    );
  });
}

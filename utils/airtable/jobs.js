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
        if (records.length === 0) return;
        for (const record of records) {
          if (record.get("ID") == null) continue;
          if (record.get("Title") == null) continue;
          allJobs.push({
            id: record.get("ID"),
            title: record.get("Title"),
            description: record.get("Description") || "",
            requirements: record.get("Requirements") || "No specific requirements.",
          });
        }

        try {
          fetchNextPage();
        } catch { return; }
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

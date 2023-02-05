// Requires environment variables `AIRTABLE_API_KEY` and `AIRTABLE_BASE` to be set
import Airtable from "airtable";
const base = new Airtable().base(process.env.AIRTABLE_BASE);

export function getAllPeople() {
  return new Promise((resolve, reject) => {
    const allPeople = [];

    base("People").select({
      view: "Grid view",
    }).eachPage(
      function page(records, fetchNextPage) {
        for (const record of records) {
          allPeople.push({
            id: record.get("ID"),
            name: record.get("Name"),
            qualifications: record.get("Qualifications"),
            position: record.get("Position"),
            biography: record.get("Biography"),
            image_path: ("/assets/people/" + record.get("Image Path")).replaceAll("..", ""),
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
          resolve(allPeople);
        }
      }
    );
  });
}

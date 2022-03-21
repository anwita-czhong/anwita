// Requires environment variable `AIRTABLE_API_KEY` to be set
import Airtable from "airtable";
const base = new Airtable().base(process.env.AIRTABLE_BASE);

export function getPartner(recordID) {
  return new Promise((resolve, reject) => {
    base("Partners").find(recordID, (err, record) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(record);
    });
  });
}

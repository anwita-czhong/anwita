// Requires environment variable `AIRTABLE_API_KEY` to be set
import Airtable from "airtable";
import { getPartner } from "./partner";
const base = new Airtable().base(process.env.AIRTABLE_BASE);

export function getAllPrograms() {
  return new Promise((resolve, reject) => {
    const allPrograms = [];

    base("Programs").select({
      view: "Grid view",
    }).eachPage(
      async function page(records, fetchNextPage) {
        for (const record of records) {
          let programData = {
            name: record.get("Name").replace("-", "&#8203;-") || "",
            description: record.get("Description") || "",
            target: record.get("Target") || "",
            indication: record.get("Indication") || "",
            progress: record.get("Progress") * 100 || 0,
          };
          // Handle partnership
          if (record.get("Partnership")) {
            const partnerData = await getPartner(record.get("Partnership"));
            const partnerLogo = partnerData.get("Logo")?.[0];
            programData = {
              ...programData,
              partner: {
                partnerName: partnerData.get("Name") || "",
                partnerLogoUrl: partnerLogo?.url || null,
                partnerLogoWidth: partnerLogo?.width || 0,
                partnerLogoHeight: partnerLogo?.height || 0,
              },
            };
          }

          allPrograms.push(programData);
        }

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve(allPrograms);
        }
      }
    );
  });
}

export function getProgram(recordID) {
  return new Promise((resolve, reject) => {
    base("Programs").find(recordID, (err, record) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(record);
    });
  });
}

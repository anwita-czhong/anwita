const withImages = require("next-images");

module.exports = {
  ...withImages(),
  output: "export",
  images: {
    domains: ["v5.airtableusercontent.com"],
  },
};

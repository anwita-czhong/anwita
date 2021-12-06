const withImages = require("next-images");

module.exports = {
  ...withImages(),
  webpack5: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

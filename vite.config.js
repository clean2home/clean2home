const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = "/";
const { resolve } = require("path");

module.exports = {
  envDir: "../",
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cleaners: resolve(__dirname, "src/cleaners.html"),
        about: resolve(__dirname, "src/about-us.html"),
        comofunciona: resolve(__dirname, "src/como-funciona.html"),
        underconstruction: resolve(__dirname, "src/under-construction.html"),
        haztecleaner: resolve(__dirname, "src/hazte-cleaner.html"),
        cleanerprofile: resolve(__dirname, "src/cleaners-profile.html")
      }
    }
  }
};

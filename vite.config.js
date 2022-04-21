const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = "/";

module.exports = {
  envDir: "../",
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  },
};

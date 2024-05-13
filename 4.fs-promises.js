// const { promisify } = require("node:util")
// const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");

console.log("Reading first file...");
fs.readFile("./file.txt", "utf-8").then((text) => {
  console.log(`Firt Text: ${text}`);
});

console.log("-----> Do things while reading the file");

console.log("Reading second file.. .");
fs.readFile("./file2.txt", "utf-8").then((text) => {
  console.log(`Second Text: ${text}`);
});

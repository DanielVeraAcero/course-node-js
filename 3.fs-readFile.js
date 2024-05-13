const fs = require("node:fs");

console.log("Reading first file...");
fs.readFile("./file.txt", "utf-8", (err, text) => {
  console.log(`Firt Text: ${text}`);
});

console.log("-----> Do things while reading the file");

console.log("Reading second file...");
fs.readFile("./file2.txt", "utf-8", (err, text) => {
  console.log(`Second Text: ${text}`);
});

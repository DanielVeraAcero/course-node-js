// const { promisify } = require("node:util")
// const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression
(async () => {
  console.log("Reading first file...");
  const text = await fs.readFile("./file.txt", "utf-8");
  console.log(`Firt Text: ${text}`);

  console.log("-----> Do things while reading the file");

  console.log("Reading second file.. .");
  const text2 = await fs.readFile("./file2.txt", "utf-8");
  console.log(`Second Text: ${text2}`);
})();

const path = require("node:path");

//  folder separator bar according to os
console.log(path.sep);

const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename("dev/doc/secrets/password.txt");
console.log(base);

const filename = path.basename("dev/doc/secrets/password.txt", ".txt");
console.log(filename);

const extension = path.extname("file.name.image.webp");
console.log(extension);

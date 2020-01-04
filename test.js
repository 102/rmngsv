const assert = require("assert");
const fs = require("fs");

const binPath = "./bin/rmngsv.js";

const bin = fs.readFileSync(binPath);

[
  [bin, "is not empty"],
  [bin.includes("Roman Gusev"), "includes the name"],
  [bin.includes("rgusev2@gmail.com"), "includes the email address"],
  [bin.includes("https://github.com/102"), "includes the GitHub link"]
].forEach(([conditon, message]) => {
  assert(conditon, message);

  console.log("✔ " + message);
});

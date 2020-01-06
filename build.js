const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");

const accentColor = "#ef82ff";
const mainColor = "#efa";
const linkColor = "#cba";

const mainChalk = chalk.hex(mainColor);
const accentChalk = chalk.hex(accentColor);
const linkChalk = chalk.hex(linkColor);

const generateLinks = () => {
  const links = {
    GitHub: "https://github.com/102",
    npm: "https://npmjs.com/~3",
    Twitter: "https://twitter.com/9z3",
    Email: "rgusev2@gmail.com",
    LinkedIn: "https://linkedin.com/in/gusev-roman"
  };
  const entries = Object.entries(links);
  const maxKey = entries.reduce(
    (max, [{ length }]) => (max < length ? length : max),
    0
  );

  return entries
    .map(([key, value]) => {
      return [mainChalk(key.padStart(maxKey)), linkChalk(value)].join(": ");
    })
    .join("\n");
};

const links = generateLinks();
const maxLink = links
  .split("\n")
  .reduce((max, { length }) => (max < length ? length : max), 0);

const headingParts = {
  name: "Roman Gusev",
  separator: "/",
  title: "Software Engineer"
};

const heading = [
  mainChalk(headingParts.name),
  accentChalk(headingParts.separator),
  mainChalk(headingParts.title)
].join(" ");

const text = `${" ".repeat(7)}${heading}

${links}`;

fs.writeFileSync(
  "./bin/rmngsv.js",
  `#!/usr/bin/env node

console.log(\`${boxen(text, {
    padding: 1,
    borderStyle: "round",
    borderColor: accentColor
  })}\`);
`
);

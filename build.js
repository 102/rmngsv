const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");

fs.writeFileSync(
  "./bin/rmngsv.js",
  `#!/usr/bin/env node

console.log(\`${chalk.hex("#ef82ff")(
    boxen(
      `Roman Gusev, Software Engineer

GitHub: https://github.com/102
Email: rgusev2@gmail.com`,
      { padding: 1, borderStyle: "round" }
    )
  )}\`);
`
);

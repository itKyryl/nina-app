const { spawn } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
const testFile = args[args.length - 1];

// Convert to relative POSIX path
const relative = path.relative(process.cwd(), testFile).split(path.sep).join("/");

const finalArgs = [...args.slice(0, -1), relative];

spawn("node", ["./node_modules/jest/bin/jest.js", ...finalArgs], {
  stdio: "inherit",
  env: process.env,
});
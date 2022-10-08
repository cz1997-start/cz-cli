const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const { prompt } = require("inquirer");
const config = require("./config");
const { downloadGitRepo } = require("./utils.js");

async function create(projectName, options) {
  const { template } = await prompt(config.templateList);
  const { force = false, merge = false } = options;
  const cwd = options.cwd || process.cwd();
  const inCurrent = projectName === ".";
  const targetDir = path.resolve(cwd, projectName || ".");

  if (fs.existsSync(targetDir) && !merge) {
    if (force) {
      await fs.remove(targetDir);
    } else {
      if (inCurrent) {
        const { ok } = await prompt([
          {
            name: "ok",
            type: "confirm",
            message: `Generate project in current directory?`,
          },
        ]);
        if (!ok) {
          return;
        }
      } else {
        const { action } = await prompt([
          {
            name: "action",
            type: "list",
            message: `Target directory ${chalk.cyan(
              targetDir
            )} already exists. Pick an action:`,
            choices: [
              { name: "Overwrite", value: "overwrite" },
              { name: "Merge", value: "merge" },
              { name: "Cancel", value: false },
            ],
          },
        ]);
        if (!action) {
          return;
        } else if (action === "overwrite") {
          console.log(`\nRemoving ${chalk.cyan(targetDir)}...`);
          await fs.remove(targetDir);
        }
      }
    }
  }
  if (template) {
    downloadGitRepo(config.templateUrlMap[template], targetDir);
  }
}

module.exports = {
  create,
};

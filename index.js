#!/usr/bin/env node

// ꜛ make sure you add shebang (#!) line above.
// It will execute the file in the terminal without need to explicitly use node

// execa lets you run a shell command via JavaScript
const execa = require('execa');

// fs is a module that allows you to work with the OS file system
const fs = require('fs');

// cwd is a function that returns the current working directory
const cwd = process.cwd();

// Immediately invoked function expression executes the function immediately without need to call it
// It's syntax is (function(){})();
(async () => {
    // run npx conduct to generate code of conduct file
    await execa.command(`npx conduct`);

    // run npx license mit to generate license file
    await execa.command(`npx license MIT`);

    // run touch shell command to create readme file
    await execa.command(`touch readme.md`);

    // run touch shell command to create gitignore file
    await execa.command(`touch .gitignore`);

    const gitIgnore = `node_modules\n.DS_Store\n.vscode\n`;

    // write to gitignore file
    fs.writeFile(`${cwd}/.gitignore`, gitIgnore, function (err) {
        console.log(err);
    });
})();

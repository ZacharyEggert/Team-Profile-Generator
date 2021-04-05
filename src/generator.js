const fs = require('fs');
const inquirer = require('inquirer');
const userPrompt = require('./prompt.js');
const templater = require('./templater.js');

let StringAccumulator = ``;
let objectAccumulator = {};

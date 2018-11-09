/**
 * npm requires a shebang to execute a file
 * https://github.com/npm/cmd-shim/blob/f59af911f1373239a7537072641d55ff882c3701/index.js#L22
 */
const fs = require('fs');

const filename = process.argv[2];
const fileContent = fs.readFileSync(filename, 'utf8');

const shebang = '#!/usr/bin/env node';

const updatedContent = shebang + '\n' + fileContent;

fs.writeFileSync(filename, updatedContent);

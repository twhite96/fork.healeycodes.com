// Creates a note in ./shorts/ with the schema `${TIMESTAMP}.md`

const fs = require('fs')
const path = require('path')
const shortsDir = './shorts'

if (!fs.existsSync(shortsDir)) {
    fs.mkdirSync(shortsDir);
}

const filepath = path.join(shortsDir, `${Date.now()}.md`)
fs.writeFileSync(filepath, '')

// This can be cmd+clicked from VS Code's terminal to open/edit it!
console.log(filepath)

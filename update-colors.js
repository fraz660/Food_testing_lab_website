const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'client', 'src');

const replacements = [
  // Gradients
  {
    regex: /bg-gradient-to-[a-z]+ from-blue-\d+ via-purple-\d+ to-blue-\d+/g,
    replace: 'bg-gradient-to-br from-green-700 via-green-800 to-green-900'
  },
  {
    regex: /bg-gradient-to-[a-z]+ from-blue-600 to-purple-600/g,
    replace: 'bg-gradient-to-r from-green-700 to-green-900'
  },
  {
    regex: /from-purple-900 to-purple-800/g,
    replace: 'from-green-900 to-green-800'
  },
  {
    regex: /from-purple-[^ ]+/g,
    replace: 'from-green-700'
  },
  {
    regex: /bg-purple-100 text-purple-800/g,
    replace: 'bg-green-100 text-green-800'
  },
  {
    regex: /text-purple-\d+/g,
    replace: 'text-green-600'
  },
  {
    regex: /bg-purple-\d+/g,
    replace: 'bg-green-600'
  },
  // Home page specifics
  {
    regex: /bg-gradient-to-r from-green-500 to-teal-500/g,
    replace: 'bg-green-600'
  },
  {
    regex: /hover:from-green-600 hover:to-teal-600/g,
    replace: 'hover:bg-green-700'
  },
  {
    regex: /bg-gradient-to-r from-blue-600 to-green-600/g,
    replace: 'bg-green-700'
  },
  {
    regex: /from-green-500 to-blue-600/g,
    replace: 'bg-green-600'
  }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const rule of replacements) {
        if (rule.regex.test(content)) {
          content = content.replace(rule.regex, rule.replace);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in ${file}`);
      }
    }
  }
}

processDir(srcDir);
console.log('Color updates complete.');

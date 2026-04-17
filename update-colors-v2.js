const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'client', 'src');

const replacements = [
  // Typography
  { regex: /text-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'text-green-$2' },
  { regex: /text-gray-900 hover:text-blue-600/g, replace: 'text-gray-900 hover:text-green-600' },
  
  // Backgrounds
  { regex: /bg-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'bg-green-$2' },
  
  // Borders & Rings
  { regex: /border-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'border-green-$2' },
  { regex: /ring-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'ring-green-$2' },
  { regex: /focus:ring-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'focus:ring-green-$2' },
  { regex: /hover:bg-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'hover:bg-green-$2' },
  { regex: /hover:text-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'hover:text-green-$2' },
  
  // Gradients
  { regex: /from-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'from-green-$2' },
  { regex: /via-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'via-green-$2' },
  { regex: /to-(purple|yellow|blue|red|orange|indigo|pink|teal|cyan)-(100|200|300|400|500|600|700|800|900)/g, replace: 'to-green-$2' },
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
        console.log(`Updated all colors to green in ${file}`);
      }
    }
  }
}

processDir(srcDir);
console.log('Global green/white unification complete.');

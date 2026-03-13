const fs = require('fs');
const files = ['src/pages/Home.tsx', 'src/pages/GenericPage.tsx', 'src/components/Header.tsx', 'src/components/Layout.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/bg-\[#000000\]/g, 'bg-accent');
  content = content.replace(/text-\[#f0ede6\]/g, 'text-primary');
  content = content.replace(/selection:bg-\[#f0ede6\]/g, 'selection:bg-primary');
  content = content.replace(/selection:text-\[#000000\]/g, 'selection:text-accent');
  content = content.replace(/bg-\[#1a2e23\]/g, 'bg-primary/10');
  content = content.replace(/bg-\[#112218\]/g, 'bg-accent');
  content = content.replace(/hover:bg-white/g, 'hover:bg-secondary');
  content = content.replace(/hover:text-\[#000000\]/g, 'hover:text-accent');
  content = content.replace(/hover:text-\[#112218\]/g, 'hover:text-accent');
  content = content.replace(/border-white\/10/g, 'border-primary/20');
  content = content.replace(/border-white\/20/g, 'border-primary/30');
  content = content.replace(/border-white\/30/g, 'border-primary/40');
  content = content.replace(/border-white\/60/g, 'border-primary/60');
  content = content.replace(/border-white/g, 'border-primary');
  content = content.replace(/text-white\/50/g, 'text-primary/50');
  content = content.replace(/text-white\/30/g, 'text-primary/30');
  content = content.replace(/text-white/g, 'text-primary');
  content = content.replace(/bg-black\/60/g, 'bg-accent/80');
  content = content.replace(/bg-black\/40/g, 'bg-accent/60');
  fs.writeFileSync(file, content);
});
console.log('Done');

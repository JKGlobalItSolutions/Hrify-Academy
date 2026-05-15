import fs from 'fs';
import path from 'path';
import babel from '@babel/core';

const srcDir = path.resolve('./src');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      const isTsx = fullPath.endsWith('.tsx');
      const ext = isTsx ? '.jsx' : '.js';
      const newPath = fullPath.replace(/\.tsx?$/, ext);

      console.log(`Processing ${fullPath} -> ${newPath}`);

      const code = fs.readFileSync(fullPath, 'utf-8');
      
      try {
        const result = babel.transformSync(code, {
          filename: fullPath,
          presets: [
            ['@babel/preset-typescript', { isTSX: isTsx, allExtensions: true }]
          ],
          retainLines: true,
          compact: false
        });

        if (result && result.code) {
          fs.writeFileSync(newPath, result.code);
          fs.unlinkSync(fullPath);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Conversion complete!');

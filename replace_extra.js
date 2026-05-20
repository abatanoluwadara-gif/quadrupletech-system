import fs from 'fs';
import path from 'path';

function replaceColors(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceColors(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(/#23365a/gi, '#232B32');
            content = content.replace(/#2B354D/gi, '#2B353F');
            fs.writeFileSync(fullPath, content);
        }
    }
}

replaceColors('./src');
console.log('Extra colors replaced!');

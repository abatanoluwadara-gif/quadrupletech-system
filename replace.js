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
            content = content.replace(/#1B2B4B/gi, '#313B44');
            content = content.replace(/#F5A623/gi, '#F39C12');
            content = content.replace(/#1E88E5/gi, '#0072BB');
            content = content.replace(/#D32F2F/gi, '#DA291C');
            fs.writeFileSync(fullPath, content);
        }
    }
}

replaceColors('./src');
console.log('Colors replaced!');

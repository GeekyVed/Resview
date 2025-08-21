const fs = require('fs');
const path = require('path');
require('dotenv').config();

function replaceEnvVariables(content) {
    return content.replace(/\$\{([^}]+)\}/g, (match, varName) => {
        return process.env[varName] || match;
    });
}

function buildFiles() {
    const srcDir = path.join(__dirname, 'src');
    const distDir = path.join(__dirname, 'dist');

    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    const files = ['index.html', 'script.js', 'style.css'];

    files.forEach(file => {
        const srcPath = path.join(srcDir, file);
        const distPath = path.join(distDir, file);

        if (fs.existsSync(srcPath)) {
            let content = fs.readFileSync(srcPath, 'utf8');
            content = replaceEnvVariables(content);
            fs.writeFileSync(distPath, content);
            console.log(`✓ Built ${file}`);
        }
    });

    console.log('Build completed! Files are in the dist/ directory');
}

buildFiles();
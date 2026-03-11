import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple env loader to fetch VITE_GOOGLE_DOC_ID from .env
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            let val = match[2].trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.substring(1, val.length - 1);
            }
            if (!process.env[key]) {
                process.env[key] = val;
            }
        }
    });
}

const docId = process.env.VITE_GOOGLE_DOC_ID;

if (!docId || docId === '${GOOGLE_DOC_ID}') {
    console.error("VITE_GOOGLE_DOC_ID is not set in environment or .env file.");
    process.exit(1);
}

const url = `https://docs.google.com/document/d/${docId}/export?format=pdf`;
const outputPath = path.resolve(__dirname, '../public/resume.pdf');

console.log(`Downloading resume PDF from Google Docs...`);

try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`Successfully saved optimized resume PDF to ${outputPath}`);
} catch (error) {
    console.error('Error downloading resume:', error);
    process.exit(1);
}

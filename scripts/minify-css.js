const fs = require('node:fs');
const CleanCSS = require('clean-css');

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
    throw new Error('Usage: node scripts/minify-css.js <input> <output>');
}

const source = fs.readFileSync(inputPath, 'utf8');
const result = new CleanCSS({ level: 2 }).minify(source);

if (result.errors.length) {
    throw new Error(result.errors.join('\n'));
}

fs.writeFileSync(outputPath, result.styles);

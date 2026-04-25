const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const imageDir = path.join(rootDir, 'assets', 'image');
const inputFile = path.join(imageDir, 'FOTO-DIRI.png');
const widths = [240, 320, 484];

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function generateProfileVariants() {
    if (!(await fileExists(inputFile))) {
        throw new Error(`Input image not found: ${inputFile}`);
    }

    for (const width of widths) {
        const baseName = `FOTO-DIRI-${width}`;
        const webpOut = path.join(imageDir, `${baseName}.webp`);
        const avifOut = path.join(imageDir, `${baseName}.avif`);
        const pngOut = path.join(imageDir, `${baseName}.png`);

        await sharp(inputFile).resize({ width, withoutEnlargement: true }).webp({ quality: 72 }).toFile(webpOut);
        await sharp(inputFile).resize({ width, withoutEnlargement: true }).avif({ quality: 48 }).toFile(avifOut);
        await sharp(inputFile).resize({ width, withoutEnlargement: true }).png({ compressionLevel: 9, quality: 80 }).toFile(pngOut);
    }
}

generateProfileVariants().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});

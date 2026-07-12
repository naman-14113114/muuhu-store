const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public/images/products/muuhu-hair-dryer/muuhu-logo.png');
const outputPath = path.join(__dirname, 'public/images/products/muuhu-hair-dryer/muuhu-logo-cropped.png');

async function trimLogo() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error("Input file not found at", inputPath);
      return;
    }
    
    await sharp(inputPath)
      .trim()
      .toFile(outputPath);
    console.log("Successfully trimmed muuhu-logo.png");
    
    // Replace the original with the cropped one
    fs.copyFileSync(outputPath, inputPath);
    console.log("Replaced original logo with cropped logo.");
  } catch (error) {
    console.error("Error trimming image:", error);
  }
}

trimLogo();

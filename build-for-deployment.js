#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

console.log('Building for deployment...');

// Step 1: Run the original build command
console.log('Step 1: Running vite build...');
execSync('vite build', { stdio: 'inherit' });

console.log('Step 2: Running esbuild for server...');
execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

// Step 3: Move frontend files from dist/public to dist
console.log('Step 3: Moving frontend files to deployment location...');
const sourceDir = path.resolve('dist/public');
const targetDir = path.resolve('dist');

if (fs.existsSync(sourceDir)) {
  // Copy all files from dist/public to dist
  fs.copySync(sourceDir, targetDir, { overwrite: true });
  
  // Remove the public directory since files are now in dist
  fs.removeSync(sourceDir);
  
  console.log('✅ Frontend files moved to dist/ for deployment');
} else {
  console.log('⚠️  dist/public directory not found, skipping file move');
}

console.log('✅ Build for deployment complete!');
console.log('Frontend files are now in dist/ ready for static deployment');
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Running Vercel Monorepo Build...');

// 1. Execute Vite build in portfolio package
execSync('pnpm --filter @workspace/portfolio run build', { stdio: 'inherit' });

// 2. Locate built output
const possibleOutputs = [
  path.resolve(process.cwd(), 'artifacts/portfolio/dist/public'),
  path.resolve(process.cwd(), 'artifacts/portfolio/dist'),
  path.resolve(process.cwd(), 'public'),
  path.resolve(process.cwd(), 'dist'),
];

let srcDir = possibleOutputs.find((dir) => fs.existsSync(dir) && fs.readdirSync(dir).length > 0);

if (!srcDir) {
  console.error('❌ Could not locate built output files.');
  process.exit(1);
}

console.log(`✅ Build generated at: ${srcDir}`);

// 3. Mirror output to all expected Vercel target directories
const targetDirs = [
  path.resolve(process.cwd(), 'public'),
  path.resolve(process.cwd(), 'dist'),
  path.resolve(process.cwd(), 'artifacts/portfolio/dist/public'),
];

for (const target of targetDirs) {
  if (target !== srcDir) {
    fs.mkdirSync(target, { recursive: true });
    fs.cpSync(srcDir, target, { recursive: true });
    console.log(`📦 Mirrored output to: ${target}`);
  }
}

console.log('🎉 Build completed successfully for Vercel deployment!');

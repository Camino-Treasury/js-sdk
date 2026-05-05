import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { build } from 'esbuild';

// Read package.json to get external dependencies
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

const buildOptions = {
  entryPoints: [
    'src/index.ts',
  ],
  outdir: 'dist',
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  external,
  sourcemap: false,
  alias: {
    '@': resolve('./src'),
  },
  tsconfig: './tsconfig.json',
};
try {
  // 1. Run esbuild
  await build(buildOptions);
  console.log('✅ esbuild completed successfully.');

  // 2. Create a clean package.json for the 'dist' directory
  const distPackageJson = {
    "name": packageJson.name,
    "version": packageJson.version,
    "description": packageJson.description,
    "license": packageJson.license,
    "homepage": packageJson.homepage,
    "bugs": packageJson.bugs,
    "keywords": packageJson.keywords,
    "type": packageJson.type,
    "peerDependencies": packageJson.peerDependencies
  };

  distPackageJson

  // 3. Write the new package.json to the 'dist' directory
  writeFileSync(
    './dist/package.json',
    JSON.stringify(distPackageJson, null, 2)
  );
  console.log('📦 package.json created in dist directory.');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { build } from 'esbuild';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

const buildOptions = {
  entryPoints: [
    'src/index.ts',
    'src/data.ts',
    'src/actions.ts',
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
  await build(buildOptions);
  console.log('✅ esbuild completed successfully.');

  const distPackageJson = {
    "name": packageJson.name,
    "version": packageJson.version,
    "description": packageJson.description,
    "license": packageJson.license,
    "homepage": packageJson.homepage,
    "bugs": packageJson.bugs,
    "keywords": packageJson.keywords,
    "type": packageJson.type,
    "peerDependencies": packageJson.peerDependencies,
    "exports": {
      ".": {
        "import": "./index.js",
        "types": "./index.d.ts"
      },
      "./data": {
        "import": "./data.js",
        "types": "./data.d.ts"
      },
      "./actions": {
        "import": "./actions.js",
        "types": "./actions.d.ts"
      }
    }
  };

  writeFileSync(
    './dist/package.json',
    JSON.stringify(distPackageJson, null, 2)
  );
  console.log('📦 package.json created in dist directory.');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Fix single quote interpolation in plugins virtual module
  if (content.includes("from '${plugin}';")) {
    content = content.replaceAll("from '${plugin}';", "from ${JSON.stringify(plugin)};");
    changed = true;
  }

  // 2. Fix polyfill import interpolation
  if (content.includes("`import '${p}';`")) {
    content = content.replaceAll("`import '${p}';`", "`import ${JSON.stringify(p)};`");
    changed = true;
  }

  // 3. Fix server handlers interpolation
  if (content.includes("from '${handler}';")) {
    content = content.replaceAll("from '${handler}';", "from ${JSON.stringify(handler)};");
    changed = true;
  }

  // 4. Fix lazy server handlers interpolation
  if (content.includes("() => import('${handler}')")) {
    content = content.replaceAll("() => import('${handler}')", "() => import(${JSON.stringify(handler)})");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('[SedinTraders Patch] Safely escaped Windows paths in:', path.basename(filePath));
  }
}

const nitroRollup = path.join(rootDir, 'node_modules', 'nitropack', 'dist', 'rollup', 'index.mjs');
patchFile(nitroRollup);

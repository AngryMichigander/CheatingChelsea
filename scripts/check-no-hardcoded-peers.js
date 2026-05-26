#!/usr/bin/env node
/**
 * Verify no peer URLs from network-manifest are hardcoded in src/.
 * Peer URLs must only come from vendor/network-manifest/network.json.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const manifest = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', 'vendor', 'network-manifest', 'network.json'),
    'utf8'
  )
);

// Only check that OTHER members' URLs aren't hardcoded — self-references are expected
const SELF_NAME = 'CheatingChelsea';
const peers = manifest.sites.filter((s) => s.role === 'member' && s.name !== SELF_NAME);
let failed = false;

for (const site of peers) {
  const url = site.url;
  try {
    const result = execSync(
      `grep -r --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l "${url}" src/`,
      { cwd: path.join(__dirname, '..'), encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
    ).trim();
    if (result) {
      console.error(`ERROR: Hardcoded peer URL "${url}" found in:\n  ${result.split('\n').join('\n  ')}`);
      failed = true;
    }
  } catch {
    // grep exits non-zero when no matches — that's the success case
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('✓ No hardcoded peer URLs found in src/.');
}

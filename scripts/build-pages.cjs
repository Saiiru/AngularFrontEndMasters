// Legacy Angular 8/webpack4 uses OpenSSL APIs incompatible with modern Node defaults.
// Run the old builder in a subprocess; never modify system-wide NODE_OPTIONS.
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const major = Number(process.versions.node.split('.')[0]);
const env = { ...process.env, NG_CLI_ANALYTICS: 'false' };
if (major >= 17 && !(env.NODE_OPTIONS || '').includes('--openssl-legacy-provider')) {
  env.NODE_OPTIONS = ((env.NODE_OPTIONS || '') + ' --openssl-legacy-provider').trim();
}
const cli = require.resolve('@angular/cli/bin/ng');
const output = path.resolve(__dirname, '..', 'dist', 'AngularFrontEndMasters');
const args = [
  cli, 'build', '--prod', '--base-href=/AngularFrontEndMasters/',
  '--output-path=' + output
];
const result = spawnSync(process.execPath, args, {
  cwd: path.resolve(__dirname, '..'), env, stdio: 'inherit'
});
process.exit(result.status === null ? 1 : result.status);

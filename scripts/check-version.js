const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const gitHeadPath = path.resolve(__dirname, '../.git/HEAD');

try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.version;

  const gitHead = fs.readFileSync(gitHeadPath, 'utf8').trim();
  const versionFilePath = path.resolve(__dirname, '../.version');

  if (fs.existsSync(versionFilePath)) {
    const lastVersion = fs.readFileSync(versionFilePath, 'utf8').trim();
    if (lastVersion === version) {
      console.error('Error: Version in package.json has not been updated.');
      process.exit(1);
    }
  }

  fs.writeFileSync(versionFilePath, version);
  console.log('Version check passed.');
} catch (error) {
  console.error('Error during version check:', error);
  process.exit(1);
}

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the short commit hash
  const gitCommit = execSync('git rev-parse --short HEAD').toString().trim();
  
  // Create .env.local file with the commit hash
  const envContent = `NEXT_PUBLIC_GIT_COMMIT=${gitCommit}\n`;
  const envPath = path.join(process.cwd(), '.env.local');
  
  // Read existing .env.local if it exists
  let existingContent = '';
  if (fs.existsSync(envPath)) {
    existingContent = fs.readFileSync(envPath, 'utf8');
    // Remove any existing NEXT_PUBLIC_GIT_COMMIT line
    existingContent = existingContent.split('\n')
      .filter(line => !line.startsWith('NEXT_PUBLIC_GIT_COMMIT='))
      .join('\n');
    if (existingContent && !existingContent.endsWith('\n')) {
      existingContent += '\n';
    }
  }
  
  // Write the updated content
  fs.writeFileSync(envPath, existingContent + envContent);
  
  console.log(`Git commit hash set: ${gitCommit}`);
} catch (error) {
  console.error('Error setting git commit:', error.message);
  process.exit(1);
}
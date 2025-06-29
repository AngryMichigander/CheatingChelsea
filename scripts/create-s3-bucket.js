#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    console.log('🚀 Setting up S3 bucket for static website hosting\n');

    // Get bucket name
    const bucketName = await askQuestion('Enter your S3 bucket name (must be globally unique): ');
    
    if (!bucketName) {
      console.error('❌ Bucket name is required');
      process.exit(1);
    }

    // Get AWS region
    const region = await askQuestion('Enter AWS region (default: us-east-1): ') || 'us-east-1';

    console.log(`\n📦 Creating S3 bucket: ${bucketName} in region: ${region}`);

    // Create bucket
    try {
      if (region === 'us-east-1') {
        execSync(`aws s3 mb s3://${bucketName} --no-cli-pager`, { stdio: 'inherit' });
      } else {
        execSync(`aws s3 mb s3://${bucketName} --region ${region} --no-cli-pager`, { stdio: 'inherit' });
      }
      console.log('✅ Bucket created successfully');
    } catch (error) {
      console.error('❌ Failed to create bucket. It might already exist or you might not have permissions.');
      console.error('Error:', error.message);
    }

    // Enable static website hosting
    console.log('\n🌐 Enabling static website hosting...');
    try {
      execSync(`aws s3 website s3://${bucketName} --index-document index.html --error-document error.html --no-cli-pager`, { stdio: 'inherit' });
      console.log('✅ Static website hosting enabled');
    } catch (error) {
      console.error('❌ Failed to enable static website hosting');
      console.error('Error:', error.message);
    }

    // Create bucket policy for public read access
    const bucketPolicy = {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": `arn:aws:s3:::${bucketName}/*`
        }
      ]
    };

    // Write policy to temporary file
    require('fs').writeFileSync('/tmp/bucket-policy.json', JSON.stringify(bucketPolicy, null, 2));

    console.log('\n🔓 Setting bucket policy for public read access...');
    try {
      execSync(`aws s3api put-bucket-policy --bucket ${bucketName} --policy file:///tmp/bucket-policy.json --no-cli-pager`, { stdio: 'inherit' });
      console.log('✅ Bucket policy applied');
    } catch (error) {
      console.error('❌ Failed to apply bucket policy');
      console.error('Error:', error.message);
    }

    // Disable block public access
    console.log('\n🔐 Configuring public access settings...');
    try {
      execSync(`aws s3api put-public-access-block --bucket ${bucketName} --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" --no-cli-pager`, { stdio: 'inherit' });
      console.log('✅ Public access configured');
    } catch (error) {
      console.error('❌ Failed to configure public access');
      console.error('Error:', error.message);
    }

    // Get website URL
    const websiteUrl = `http://${bucketName}.s3-website-${region}.amazonaws.com`;

    console.log(`\n🎉 Setup complete!`);
    console.log(`\n📋 Next steps:`);
    console.log(`1. Set your bucket name as an environment variable:`);
    console.log(`   export S3_BUCKET_NAME=${bucketName}`);
    console.log(`\n2. Deploy your site:`);
    console.log(`   npm run deploy:s3`);
    console.log(`\n3. Your website will be available at:`);
    console.log(`   ${websiteUrl}`);
    console.log(`\n💡 Pro tip: Add S3_BUCKET_NAME=${bucketName} to your .env.local file`);

    // Clean up
    require('fs').unlinkSync('/tmp/bucket-policy.json');

  } catch (error) {
    console.error('❌ An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();

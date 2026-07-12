
const fs = require('fs');
const urls = ['1320', '1321', '1322', '1323'];
for (const id of urls) {
  const path = 'C:/Users/NAMAN KHARBANDA/.gemini/antigravity/brain/bae37e9d-fc03-49bd-a916-e1e80336af76/.system_generated/steps/' + id + '/content.md';
  const content = fs.readFileSync(path, 'utf8');
  const bodyText = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const index = bodyText.indexOf('Title:');
  const text = index !== -1 ? bodyText.slice(index, index + 4000) : bodyText.slice(0, 4000);
  console.log('\n\n--- SITE ' + id + ' ---');
  console.log(text);
}


import { uploadProjectFolder } from '../lib/utils/cloudinaryUploader';
import path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'assets');
const PROJECTS = ['haus-der-kunst', 'shoah-memorial-frankfurt', 'internet-changed-my-life', 'hilti', 'kampnagel', 'magenta-musik','design-hfbk', 'umlaut', 'scamming-interfaces', ];

const CLOUDINARY_URL = 'https://res.cloudinary.com/dk2ozewvs/image/upload';
const CLOUDINARY_URL_VIDEO = 'https://res.cloudinary.com/dk2ozewvs/video/upload';

async function main() {
  for (const project of PROJECTS) {
    const projectPath = path.join(ASSETS_DIR, project);
    console.log(`\n📁 ${project.toUpperCase()}`);
    console.log('='.repeat(50));
    
    try {
      const results = await uploadProjectFolder(project, projectPath);
      
      console.log(`\n// Copy this into projects.ts for ${project}:`);
      console.log(`media: [`);
      
      results.forEach(result => {
        const isVideo = result.resource_type === 'video';
        const url = isVideo 
          ? `\${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/${result.public_id}`
          : `\${CLOUDINARY_URL}/f_auto,q_auto/${result.public_id}`;
          
        console.log(`    {
        type: '${isVideo ? 'video' : 'image'}',
        publicId: '${result.public_id}',
        url: \`${url}\`${!isVideo ? ',' : ''}
        ${!isVideo ? `alt: '${project} - Add description'` : ''}
    },`);
      });
      
      console.log(`],`);
      console.log(`\n✅ Total: ${results.length} files\n`);
      
    } catch (error) {
      console.error(`❌ Error:`, error);
    }
  }
}

main().catch(console.error);
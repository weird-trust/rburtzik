import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      sveltekit(),
      paraglide({
        project: './project.inlang',
        outdir: './src/lib/paraglide'
      })
    ],
    define: {
      'process.env.VITE_CLOUDINARY_CLOUD_NAME': JSON.stringify(env.VITE_CLOUDINARY_CLOUD_NAME),
      'process.env.VITE_CLOUDINARY_URL': JSON.stringify(env.VITE_CLOUDINARY_URL)
    }
  }
});
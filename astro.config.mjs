// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ada.newblockagency.com',
  build: {
    // One-page site: inline the CSS so the page renders in a single request.
    inlineStylesheets: 'always',
  },
});

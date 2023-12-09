// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  name: 'TCHA',
  title: 'TCHA',
  projectId: 'fzxx7ejh',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});

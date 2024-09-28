import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    title: "Mohit Nair"
  },
  plugins: [pluginReact()],
});

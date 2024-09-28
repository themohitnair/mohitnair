import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    title: "Mohit Nair",
    favicon: "public/favicon/skywalker.svg"
  },
  plugins: [pluginReact()],
});

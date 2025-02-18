import { defineConfig } from "astro/config";

export default defineConfig({
  site:'https://github.io/infraestructura-it/redessociales',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});

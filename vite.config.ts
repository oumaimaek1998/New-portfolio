import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:math";
        @import "./src/scss/variables.scss";
        @import "./src/scss/fonts.scss";
        @import "./src/scss/mixins.scss";
        `,
      },
    },
  },
});

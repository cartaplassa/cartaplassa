import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

let faviconURL = "/favicon.svg";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cartaplassa",
  plugins: [react(), tsconfigPaths()],
});

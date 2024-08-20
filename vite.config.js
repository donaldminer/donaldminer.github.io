import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const aliases = {
  "/@/": path.resolve(__dirname, "./src/"),
  "@components": path.resolve(__dirname, "src/components"),
  "@app": path.resolve(__dirname, "src/app"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});

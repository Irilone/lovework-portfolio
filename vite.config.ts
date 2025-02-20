import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development"
      ? (() => {
          try {
            return require("lovable-tagger").componentTagger();
          } catch (e) {
            console.warn("Warning: 'lovable-tagger' could not be loaded.");
            return null;
          }
        })()
      : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


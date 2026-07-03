import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    base: env.VITE_GHPAGES_BASE ? `${env.VITE_GHPAGES_BASE}` : "/",
    plugins: [react()],
    server: {
      // Consente a tool esterni (es. anteprima) di assegnare una porta diversa da 5173
      port: process.env.PORT ? Number(process.env.PORT) : 5173
    },
    build: {
      outDir: "dist",
      sourcemap: mode === "development"
    }
  };
});

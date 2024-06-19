import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      open: false,
      port: 3000,
    },
    build: {
      outDir: "build",
    },
    define: {
      "process.env": process.env,
      VITE_BUILD_NUMBER: process.env.VITE_BUILD_NUMBER,
    },
    optimizeDeps: {
      include: ["tailwind.config.js"],
    },
  });
};

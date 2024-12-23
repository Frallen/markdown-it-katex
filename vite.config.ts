/// <reference types="vitest" />
import { defineConfig } from "vite";
import dotenv from "dotenv";
import path from "path";
import terser from "@rollup/plugin-terser";
import dts from "vite-plugin-dts";

dotenv.config();

export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: true,
    target: "esnext",
    chunkSizeWarningLimit: 2000,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "md-katex-ts",
      fileName: "build",
      formats: ["es", "umd" /*"cjs",*/],
    },
    //https://rollupjs.org/tutorial/#code-splitting
    //При множественных входных точках обязательно выделяет чанки
    rollupOptions: {
      output: {
        compact: true,
        plugins: [terser()],
        // manualChunks: undefined,
        // preserveModules: false,
        // inlineDynamicImports: false,
        // experimentalMinChunkSize: 9999999,
        //chunkFileNames: "wikilectChunk.js",
      },
    },
    //sourcemap: true,
  },
  // optimizeDeps: {
  //   include: undefined,
  //   noDiscovery: true,
  // },
  define: { "process.env.NODE_ENV": '"production"' },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "happy-dom",
  },
  plugins: [
    dts({
      rollupTypes: true,
      //entryRoot: path.resolve(__dirname, "src/components"),
      exclude: ["./src/**/*.test.ts"],
    }),
  ],
});

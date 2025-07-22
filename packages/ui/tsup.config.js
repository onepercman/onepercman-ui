import { defineConfig } from "tsup";
export default defineConfig((options) => (Object.assign({ entryPoints: ["src/button.tsx"], format: ["cjs", "esm"], dts: true, external: ["react"] }, options)));

import { dirname, join, resolve } from "path";

import { mergeConfig } from "vite";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    // Dynamic import for ES module
    const tailwindcss = (await import("@tailwindcss/vite")).default;

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: resolve(__dirname, "../../../packages/ui/src"),
          },
        ],
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
      },
      optimizeDeps: {
        include: ["react", "react-dom"],
        esbuildOptions: {
          target: "esnext",
        },
      },
      build: {
        target: "esnext",
      },
    });
  },
};

export default config;

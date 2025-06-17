// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import storybookConfig from "eslint-config/storybook.mjs";
import tsParser from "@typescript-eslint/parser";

export default [...storybookConfig, {
  files: ["**/*.stories.tsx"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  rules: {
    // Thêm các rule cơ bản nếu cần
  },
}, ...storybook.configs["flat/recommended"]];

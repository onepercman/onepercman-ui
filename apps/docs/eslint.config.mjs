import storybookConfig from "@repo/eslint-config/storybook.mjs";
import tsParser from "@typescript-eslint/parser";

export default [
  ...storybookConfig,
  {
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
  },
];

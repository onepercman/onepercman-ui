import { dirname, join } from "path";
import { findUpSync } from "find-up";
import { outputFile, remove, copy } from "fs-extra";
import { Project } from "ts-morph";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = dirname(findUpSync("pnpm-lock.yaml")!);
const registryDir = join(root, "packages", "ui", "registry");

async function publishRegistry() {
  // Create a new directory for the registry
  const publishDir = join(root, "registry-publish");
  await remove(publishDir);

  // Copy all components
  await copy(registryDir, join(publishDir, "components"));

  // Create package.json for the registry
  const packageJson = {
    name: "onepercman-ui-registry",
    version: "1.0.0",
    private: false,
    files: ["components"],
    sly: {
      name: "onepercman-ui",
      directory: "./components",
    },
  };

  await outputFile(
    join(publishDir, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  // Create README.md
  const readme = `# OnePercman UI Registry

This is the component registry for OnePercman UI. You can use it with Sly CLI:

\`\`\`bash
npx @sly-cli/sly add onepercman-ui
\`\`\`

## Available Components

${await getComponentsList()}
`;

  await outputFile(join(publishDir, "README.md"), readme);

  console.log("✅ Registry published to:", publishDir);
}

async function getComponentsList(): Promise<string> {
  const project = new Project({});
  project.addSourceFilesAtPaths(join(registryDir, "**/*.tsx"));

  const components = project.getSourceFiles().map((file) => {
    const name = file.getBaseNameWithoutExtension();
    return `- ${name}`;
  });

  return components.join("\n");
}

publishRegistry().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

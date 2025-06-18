import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths configuration
const COMPONENTS_DIR = path.join(__dirname, "../../packages/ui/src");
const REGISTRY_DIR = path.join(
  __dirname,
  "../../apps/docs/public/registry/onepercman-ui"
);

// Type definitions
interface ComponentFile {
  name: string;
  content: string;
}

interface ComponentRegistry {
  name: string;
  meta: {
    name: string;
    source: string;
    description: string;
    license: string;
    tags: string[];
  };
  files: ComponentFile[];
}

// Ensure registry directory exists
if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}

/**
 * Get package version from package.json
 * @returns {string} Package version
 */
function getPackageVersion(): string {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "../../packages/ui/package.json"),
        "utf-8"
      )
    );
    return packageJson.version;
  } catch (error) {
    console.error("Error reading package version:", error);
    return "0.0.0";
  }
}

/**
 * Read component information from a file
 * @param {string} componentPath - Path to the component file
 * @returns {ComponentRegistry} Component registry information
 */
function readComponentInfo(componentPath: string): ComponentRegistry {
  const content = fs.readFileSync(componentPath, "utf-8");
  const componentName = path.basename(componentPath, ".tsx");

  // Extract description from component comment
  const descriptionMatch = content.match(/\/\*\*\s*\n\s*\*\s*([^*\n]+)/);
  const description = descriptionMatch ? descriptionMatch[1].trim() : "";

  return {
    name: `${componentName}.tsx`,
    meta: {
      name: "onepercman-ui",
      source: `https://github.com/onepercman/onepercman-ui/blob/main/packages/ui/src/${componentName}.tsx`,
      description: description,
      license: "https://github.com/onepercman/onepercman-ui",
      tags: ["ui"],
    },
    files: [
      {
        name: `${componentName}.tsx`,
        content: content,
      },
    ],
  };
}

/**
 * Generate component registry
 * This function:
 * 1. Creates index.tsx in components directory
 * 2. Reads all component files
 * 3. Updates index.tsx with component list
 * 4. Generates JSON files for each component
 */
function generateRegistry() {
  // Create initial index.tsx file
  const indexContent = `/**
 * Component registry index for onepercman-ui
 */
export const index = {
  version: "${getPackageVersion()}",
  components: []
};`;

  const indexPath = path.join(COMPONENTS_DIR, "index.tsx");
  fs.writeFileSync(indexPath, indexContent);

  // Read all component files
  const components = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => {
      const componentPath = path.join(COMPONENTS_DIR, file);
      return readComponentInfo(componentPath);
    });

  // Update index.tsx with component list
  const updatedIndexContent = `/**
 * Component registry index for onepercman-ui
 */
export const index = {
  version: "${getPackageVersion()}",
  components: ${JSON.stringify(
    components
      .filter((c) => c.name !== "index.tsx")
      .map((component) => ({
        name: component.name.replace(".tsx", ""),
        description: component.meta.description,
        version: getPackageVersion(),
      })),
    null,
    2
  )}
};`;

  fs.writeFileSync(indexPath, updatedIndexContent);

  // Generate JSON files for each component
  components.forEach((component) => {
    const componentJson = JSON.stringify(component, null, 2);
    const fileName = component.name.replace(".tsx", ".json");
    fs.writeFileSync(path.join(REGISTRY_DIR, fileName), componentJson);
  });

  console.log("Component registry generated successfully!");
}

// Run the script
generateRegistry();

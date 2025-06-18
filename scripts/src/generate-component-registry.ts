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
const PARENT_REGISTRY_DIR = path.join(
  __dirname,
  "../../apps/docs/public/registry"
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

interface RegistryIndex {
  version: string;
  meta: {
    name: string;
    source: string;
    description: string;
    license: string;
    tags: string[];
  };
  resources: {
    name: string;
  }[];
}

// Ensure registry directories exist
if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}
if (!fs.existsSync(PARENT_REGISTRY_DIR)) {
  fs.mkdirSync(PARENT_REGISTRY_DIR, { recursive: true });
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
 * 1. Reads all component files
 * 2. Generates JSON files for each component
 * 3. Generates onepercman-ui.json with component list
 */
function generateRegistry() {
  // Read all component files
  const components = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => {
      const componentPath = path.join(COMPONENTS_DIR, file);
      return readComponentInfo(componentPath);
    });

  // Generate JSON files for each component
  components.forEach((component) => {
    const componentJson = JSON.stringify(component, null, 2);
    const fileName = component.name.replace(".tsx", ".json");
    fs.writeFileSync(path.join(REGISTRY_DIR, fileName), componentJson);
  });

  // Generate onepercman-ui.json with component list
  const registryIndex: RegistryIndex = {
    version: getPackageVersion(),
    meta: {
      name: "onepercman-ui",
      source: "https://github.com/onepercman/onepercman-ui",
      description: "",
      license: "https://github.com/onepercman/onepercman-ui",
      tags: ["ui"],
    },
    resources: components.map((component) => ({
      name: component.name.replace(".tsx", ""),
    })),
  };

  // Write onepercman-ui.json in the parent registry directory
  fs.writeFileSync(
    path.join(PARENT_REGISTRY_DIR, "onepercman-ui.json"),
    JSON.stringify(registryIndex, null, 2)
  );

  console.log("Component registry JSON files generated successfully!");
}

// Run the script
generateRegistry();

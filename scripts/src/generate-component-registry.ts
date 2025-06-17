import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đường dẫn đến thư mục components
const COMPONENTS_DIR = path.join(__dirname, "../../packages/ui/src");
// Đường dẫn đến thư mục registry
const REGISTRY_DIR = path.join(
  __dirname,
  "../../apps/docs/public/registry/onepercman-ui"
);

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

interface ComponentIndex {
  version: string;
  components: {
    name: string;
    description: string;
    version: string;
  }[];
}

// Đảm bảo thư mục registry tồn tại
if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}

// Lấy version từ package.json
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

// Hàm đọc thông tin từ file component
function readComponentInfo(componentPath: string): ComponentRegistry {
  const content = fs.readFileSync(componentPath, "utf-8");
  const componentName = path.basename(componentPath, ".tsx");

  // Tìm description từ comment
  const descriptionMatch = content.match(/\/\*\*\s*\n\s*\*\s*([^*\n]+)/);
  const description = descriptionMatch ? descriptionMatch[1].trim() : "";

  return {
    name: `${componentName}.tsx`,
    meta: {
      name: "onepercman-ui",
      source: `https://github.com/onepercman/onepercman-ui/blob/main/packages/ui/src/${componentName}.tsx`,
      description: description,
      license: "https://github.com/onepercman/onepercman-ui/tree/main",
      tags: ["ui"],
    },
    files: [
      {
        name: `${componentName}.tsx`,
        content: `// onepercman-ui\n// https://github.com/onepercman/onepercman-ui\n${content}`,
      },
    ],
  };
}

// Hàm chính để generate registry
function generateRegistry() {
  // Đọc tất cả các file component
  const components = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => {
      const componentPath = path.join(COMPONENTS_DIR, file);
      return readComponentInfo(componentPath);
    });

  // Tạo file JSON cho mỗi component
  components.forEach((component) => {
    const componentJson = JSON.stringify(component, null, 2);
    const fileName = component.name.replace(".tsx", ".json");
    fs.writeFileSync(path.join(REGISTRY_DIR, fileName), componentJson);
  });

  // Tạo file index.json
  const indexData: ComponentIndex = {
    version: getPackageVersion(),
    components: components.map((component) => ({
      name: component.name.replace(".tsx", ""),
      description: component.meta.description,
      version: getPackageVersion(),
    })),
  };

  fs.writeFileSync(
    path.join(REGISTRY_DIR, "index.json"),
    JSON.stringify(indexData, null, 2)
  );

  console.log("Component registry generated successfully!");
}

// Chạy script
generateRegistry();

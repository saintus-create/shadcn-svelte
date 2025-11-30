import fs from "fs/promises";
import path from "path";

export async function readDemoCode(filePath: string): Promise<string> {
  try {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    const code = await fs.readFile(resolvedPath, "utf-8");
    return code;
  } catch (error) {
    return "// Error loading code";
  }
}

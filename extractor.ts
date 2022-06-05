import * as path from "path";
import * as process from "process";
import { Extractor, GetCompilerOptions } from "ts-extractor";

async function Main(): Promise<void> {
  // Absolute path to projectDirectory
  const projectDirectory = process.cwd();
  const pathToTsconfig = path.join(projectDirectory, "./tsconfig.json");

  const compilerOptions = await GetCompilerOptions(pathToTsconfig);

  const extractor = new Extractor({
    CompilerOptions: compilerOptions,
    ProjectDirectory: projectDirectory
  });

  const extractedOutput = extractor.Extract(["./src/index.ts", "./src/another-entry-file.ts"]);
  console.log(extractedOutput);
}

Main();

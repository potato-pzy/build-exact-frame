import esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

async function main() {
  await esbuild.build({
    entryPoints: [path.join(projectRoot, "scripts/verify-mobile-responsiveness.ts")],
    bundle: true,
    platform: "node",
    format: "cjs",
    outfile: path.join(projectRoot, "dist-test/verify-mobile-responsiveness.cjs"),
    alias: { "@": path.resolve(projectRoot, "src") },
    loader: {
      ".webp": "empty",
      ".png": "empty",
      ".jpg": "empty",
      ".svg": "empty",
      ".css": "empty",
    },
    plugins: [
      {
        name: "public-svg-resolver",
        setup(build) {
          build.onResolve({ filter: /^\/svg\// }, (args) => ({
            path: path.resolve(projectRoot, "public" + args.path),
          }));
        },
      },
    ],
  });

  const child = fork(path.join(projectRoot, "dist-test/verify-mobile-responsiveness.cjs"));
  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error("Failed to build or run E2E mobile test harness:", err);
  process.exit(1);
});

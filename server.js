/**
 * Production server for Azure App Service (Linux/Windows Node).
 * Serves the Vite build from /dist with SPA fallback routing.
 */
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 8080;
const distPath = path.join(__dirname, "dist");

const server = createServer((request, response) =>
  handler(request, response, {
    public: distPath,
    rewrites: [{ source: "**", destination: "/index.html" }],
    headers: [
      {
        source: "**/*.@(js|css|jpg|jpeg|png|gif|svg|webp|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ],
  }),
);

server.listen(port, "0.0.0.0", () => {
  console.log(`Nthangeni Electrical site running on port ${port}`);
});

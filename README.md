# Nthangeni Electrical & Plumbing

Marketing website for Nthangeni Electrical & Plumbing — React, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build (local)

```bash
npm run build
npm start
```

Open `http://localhost:8080` (or the port in `PORT`).

## Deploy to Azure Web App

This app is configured as a **Node.js** site on Azure App Service: Oryx runs `npm run build`, then **`npm start`** serves the `dist` folder with SPA routing.

### 1. Create the Web App (Azure Portal or CLI)

- **Runtime stack:** Node 20 LTS  
- **OS:** Linux (recommended) or Windows  
- **Startup command:** `npm start`

### 2. Application settings (Portal → Configuration)

| Setting | Value |
|--------|--------|
| `SCM_DO_BUILD_DURING_DEPLOYMENT` | `true` |
| `WEBSITE_NODE_DEFAULT_VERSION` | `~20` |

See `azure-app-settings.template.json` for a reference list.

### 3. Deploy from GitHub (recommended)

1. In Azure Portal: Web App → **Deployment Center** → GitHub Actions, or download the **Publish Profile**.
2. In GitHub: repo **Settings → Secrets** → add `AZURE_WEBAPP_PUBLISH_PROFILE` (paste publish profile XML).
3. Optionally set repository variable `AZURE_WEBAPP_NAME` to your app name (default in workflow: `nthangeni-electrical`).
4. Push to `main` — workflow `.github/workflows/azure-webapp.yml` builds and deploys.

### 4. Deploy with Azure CLI (zip)

```bash
npm ci
npm run build
az webapp deploy --resource-group <rg> --name <app-name> --src-path . --type zip
```

Ensure startup command is `npm start`.

### Notes

- `public/web.config` is copied into `dist/` for IIS/Windows static hosting and SPA fallback.
- `server.js` uses the `PORT` environment variable provided by Azure.
- Images and assets live under `public/` and are included in the build output.

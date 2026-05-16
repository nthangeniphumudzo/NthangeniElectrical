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
| `SCM_DO_BUILD_DURING_DEPLOYMENT` | `false` when using GitHub Actions (build runs in CI); `true` if deploying source only |
| `WEBSITE_NODE_DEFAULT_VERSION` | `~20` |

See `azure-app-settings.template.json` for a reference list.

### 3. Deploy from GitHub Actions (recommended)

Workflow: [`.github/workflows/main_nthangenielectrical.yml`](.github/workflows/main_nthangenielectrical.yml)

1. In Azure Portal: Web App **nthangenielectrical** → **Deployment Center** → connect GitHub (this creates OIDC secrets in the repo).
2. Push to `main` — the workflow builds with `npm ci`, prunes dev dependencies, and deploys to the app.

**If deploy fails with “No subscriptions found”** (Azure login step):

The service principal from Deployment Center needs access to your subscription:

1. Azure Portal → **Subscriptions** → your subscription → **Access control (IAM)** → **Add role assignment**
2. Role: **Contributor** (or **Website Contributor** on the resource group / web app)
3. Members: **User, group, or service principal** → search for the app name (e.g. `nthangenielectrical`) or the client ID from GitHub secret `AZUREAPPSERVICE_CLIENTID_*`
4. Save, then re-run the failed workflow under **Actions**

**App settings when CI builds the site:**

| Setting | Value |
|--------|--------|
| `SCM_DO_BUILD_DURING_DEPLOYMENT` | `false` |

The GitHub workflow already runs `npm run build`; Oryx should not rebuild on deploy.

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

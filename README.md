# EL-Games

This project was created as part of our Azure course. We worked together to create a small **React game** and deploy it to **Azure Static Web Apps**.

## What We Did

1. Created a **GitHub repository**.
2. Built the game using **React with Vite**.
3. Pushed the project to GitHub.
4. Created an **Azure Static Web App** using Azure CLI and connected it to the GitHub repository.
5. Added **tags** to organize the Azure resource.
6. Configured **RBAC roles** so both team members could access the resources.
7. Set up a **budget/cost alert** in Azure.
8. Configured the **GitHub Actions workflow** for automatic deployment.

## Azure CLI

We used a Bash script to create and connect the Static Web App:

```bash
# Variables - change these
RESOURCE_GROUP="RESOURCE_GROUP_NAME"
STATIC_WEB_APP_NAME="STATIC_WEB_APP_NAME"
GITHUB_REPO="GITHUB_REPO_URL"

# Create Static Web App
az staticwebapp create \
  --name "$STATIC_WEB_APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --source "$GITHUB_REPO" \
  --branch "main" \
  --location "westeurope" \
  --sku Free \
  --login-with-github
```

## Tags

We added tags to the Azure resource, for example:

- `env = dev`
- `owner = OWNER_NAME`
- `course = admin-mol`
- `type = game`
- `contributor = CONTRIBUTOR_NAME`

## GitHub Actions

We changed `app_location` in the GitHub Actions workflow to point to the folder where our React application is located.

We also changed:

```yaml
output_location: "dist"
```

Because we use **React with Vite**, the production build is created in the `dist` folder.

## Result

The React game is stored in GitHub and automatically deployed to **Azure Static Web Apps** using **GitHub Actions**.

## Creators

**Emma & Linda**


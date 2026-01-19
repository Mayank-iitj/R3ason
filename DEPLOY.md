# Deployment Guide (Vercel)

The best platform to deploy this **Next.js** application is **Vercel**. It provides the fastest edge network, zero-config setup (usually), and native support for Next.js features.

## Prerequisites
- A [Vercel Account](https://vercel.com/signup)
- The [GitHub Repository](https://github.com/Mayank-iitj/accessibility-agent) ready (which we just pushed).

## Step-by-Step Instructions

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in.
2.  **Add New Project**:
    *   Click the **"Add New..."** button (top right) -> **"Project"**.
    *   Select **Import Git Repository**.
    *   Choose your repository: `accessibility-agent`.

3.  **Configure Project**:
    *   **Framework Preset**: Select `Next.js`.
    *   **Root Directory**: `./` (Default).
    *   **Build Command**: `npm run build` (Default).

4.  **CRITICAL: Environment Variables**:
    *   Expand the **"Environment Variables"** section.
    *   **Key**: `GROQ_API_KEY`
    *   **Value**: `gsk_...` (Enter your Groq API Key here).
    *   Click **Add**.

5.  **Deploy**:
    *   Click **Deploy**.
    *   Wait ~1 minute for the build to complete.

## Troubleshooting
- **Build Failures**: If the build fails, check the "Build Logs". Ensure `GROQ_API_KEY` was added correctly.
- **404 Errors**: If API calls return 404, verify the key permissions or check if the Groq model is deprecated (though we are using the stable `llama-3.3-70b-versatile`).

# Deployment Guide (Vercel)

Deploy this **R3ASON** Next.js application to **Vercel** for optimal performance with edge network support and zero-config Next.js integration.

## Prerequisites
- A [Vercel Account](https://vercel.com/signup) (free tier works)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- A valid [Groq API Key](https://console.groq.com/keys)

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Log in to Vercel**  
   Go to [vercel.com](https://vercel.com) and sign in with your Git provider.

2. **Import Project**  
   - Click **"Add New..."** → **"Project"**
   - Select your repository from the list
   - Click **Import**

3. **Configure Project**  
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

4. **🔑 Add Environment Variables** (CRITICAL)  
   - Click **"Environment Variables"**
   - Add the following:
     - **Name**: `GROQ_API_KEY`
     - **Value**: Your Groq API key (starts with `gsk_`)
     - **Environment**: Production, Preview, Development (check all)
   - Click **Add**

5. **Deploy**  
   - Click **Deploy**
   - Wait ~1-2 minutes for the build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
cd C:\Users\MS\.gemini\antigravity\scratch\reason3
vercel

# Follow prompts to link/create project
# Add environment variable when prompted:
# GROQ_API_KEY=your_actual_key_here

# Deploy to production
vercel --prod
```

## Testing Before Deployment

**Test Production Build Locally:**
```bash
# Build the production version
npm run build

# Start production server
npm start

# Visit http://localhost:3000 and test all features
```

## Post-Deployment

### Verify Deployment
1. Visit your deployment URL
2. Test claim analysis with sample text/image
3. Check browser console for errors
4. Verify API responses in Network tab

### Custom Domain (Optional)
1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain and follow DNS instructions

## Troubleshooting

### Build Failures

**Error: Missing GROQ_API_KEY**
- Ensure environment variable is added in Vercel Dashboard
- Variable name must be exactly `GROQ_API_KEY` (case-sensitive)
- Check it's enabled for all environments

**Error: Module not found**
```bash
# Delete lock file and reinstall locally, then commit
rm package-lock.json
npm install
git add package-lock.json
git commit -m "fix: update dependencies"
git push
```

### Runtime Errors

**API Returns 500 or Empty Response**
- Check Vercel Function logs: Dashboard → Deployments → [Latest] → Functions
- Verify Groq API key is valid at [console.groq.com](https://console.groq.com)
- Ensure API key has sufficient quota/credits

**Slow API Responses**
- Groq's LPU typically responds in <1s
- Check Vercel region matches closest to `iad1` (US East)
- Review function execution time in logs

### Environment Variables Not Working

```bash
# Redeploy after adding env vars
vercel --prod --force

# Or in dashboard: Deployments → [...] → Redeploy
```

## Performance Monitoring

- **Analytics**: Vercel Dashboard → Analytics
- **Function Logs**: Dashboard → Deployments → Functions
- **Edge Network**: Dashboard → Deployments → Edge Network

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Groq API Status](https://status.groq.com)


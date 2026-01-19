# R3ASON - Advanced Claim Intelligence Engine

**R3ASON** is a multimodal AI reasoning engine that analyzes claims in text, PDFs, and images to detect logical fallacies, statistical errors, and misleading framing. Powered by Groq's high-speed LPU inference (Llama 3.3 70B), it delivers structured verification reports in milliseconds.

## 🚀 Features

- **⚡ High-Speed Reasoning**: Sub-second analysis powered by Groq's LPU infrastructure
- **🧠 Multimodal Analysis**: Process text, images, and PDFs with unified reasoning
- **🔍 Deep Logic Verification**: Detects correlation vs. causation, cherry-picking, missing baselines, and more
- **📊 Structured JSON Output**: Enforces schema-compliant responses for reliable integration
- **✨ Premium UI**: Built with Next.js 16.1, Tailwind CSS 4, and Framer Motion
- **🔒 Production-Ready**: Security headers, image optimization, and edge deployment configured

## 📋 Prerequisites

- Node.js 20+ 
- npm or pnpm
- [Groq API Key](https://console.groq.com/keys) (free tier available)

## 🛠️ Quick Start

### 1. Clone & Install

```bash
git clone <your-repository-url>
cd reason3
npm install
```

### 2. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env.local

# Add your Groq API key
# Edit .env.local and replace with your actual key:
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### 4. Test Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy to Vercel with one click or via CLI. See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

**Environment Variables Required:**
- `GROQ_API_KEY` - Your Groq API key

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>&env=GROQ_API_KEY)

## 🏗️ Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **AI Engine**: Groq SDK (Llama 3.3 70B Versatile)
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion
- **Language**: TypeScript 5
- **Deployment**: Vercel (optimized)

## 📖 How It Works

1. **Input**: User provides text, image, or PDF claim
2. **Extraction**: AI extracts factual, statistical, causal, and predictive claims
3. **Analysis**: Deep reasoning detects logical and statistical issues
4. **Verdict**: Assigns confidence score and classification (✅ Well-Supported, ⚠️ Partial, ❌ Misleading, ❓ Insufficient)
5. **Report**: Returns structured JSON with explanations and remediation suggestions

## 🎯 Use Cases

- **Fact-Checking**: Verify news articles and social media claims
- **Research**: Analyze academic papers for logical consistency
- **Business**: Validate marketing claims and statistics
- **Education**: Teach critical thinking and data literacy
- **Media**: Detect misleading charts and infographics

## 📝 API Reference

### POST `/api/analyze`

**Request:**
```json
{
  "content": "Your claim text here",
  "type": "text" | "image" | "pdf",
  "imageData": "data:image/png;base64,..." // Optional, for images
}
```

**Response:**
```json
{
  "analysis_target": "Brief description",
  "claims": [
    {
      "claim_id": "C1",
      "claim_text": "The exact claim",
      "claim_type": "factual",
      "verdict": "Well-Supported",
      "confidence_score": 85,
      "logical_issues": [],
      "statistical_issues": [],
      "explanation": "Detailed analysis...",
      "what_would_make_this_true": "Suggestions...",
      "evidence_present": true
    }
  ],
  "overall_risk_score": 15,
  "summary_insight": "One-line summary"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- [Groq Console](https://console.groq.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Deployment Guide](./DEPLOY.md)

---

Built with ⚡ by leveraging Groq's LPU for lightning-fast AI reasoning.

# MediaGarcia Website

## AI Image Generation

Generate real-photo assets using Gemini 3 Pro Image Preview.

### Setup

Add to `.env.local`:
```
GEMINI_API_KEY=your_key_here
```

### Generate Images

```bash
npm run generate-image -- --slot hero --prompt "Modern tech office scene" --count 3
```

Options:
- `--slot` (required): Slot name (e.g., `hero`, `services/ai`)
- `--prompt` (required): Image prompt
- `--count`: Number of variants (default: 3)
- `--aspect`: Ratio - `16:9`, `4:3`, `1:1`, `9:16` (default: 16:9)

### Review & Select

Visit `/__image-staging` (dev only) to review variants and select winners.

### Use in Components

```typescript
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
const image = getImageForSlot("hero", "/fallback.jpg");
```

The helper returns the selected image path, or the first variant if none selected, or the fallback path.

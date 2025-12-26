# Hide Twitter AI Edit Button

**F\*ck AI. Keep your twitter clean.**

Tired of Twitter shoving AI down your throat when they suggest to edit your image? This extension purges that annoying "Edit Image" button from your tweet.

## How to Install

### For Users (Pre-built)

If you have the `dist` folder:

1. Open Chrome/Brave/Edge and go to `chrome://extensions`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select the `dist` folder.

Or you can download the pre-built version from the [releases page](https://github.com/monumei/hide-x-grok-edit-button/releases).

### For Developers (Build from Source)

1. **Clone or Download**:
   Click the green **Code** button and select **Download ZIP** (then extract it), or `git clone` this repo.

2. **Install Dependencies**:

   ```bash
   bun install
   ```

3. **Build**:

   ```bash
   bun run build
   ```

4. **Load Extension**:
   - Go to `chrome://extensions`.
   - Turn on **Developer mode**.
   - Click **Load unpacked**.
   - Select the **`dist`** folder created in your project directory.

## Development

Want to contribute or block more AI garbage?

```bash
bun run dev
```

Built with **Vite** + **TypeScript**. fast builds for faster blocking.

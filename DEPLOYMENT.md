# Deployment Instructions

## Deployment Build Process

This project has been configured with a custom deployment build script to handle the specific file structure requirements for Replit static deployments.

### Running the Deployment Build

To build the project for deployment, run:

```bash
node build-for-deployment.js
```

### What the Build Script Does

1. **Frontend Build**: Runs `vite build` to create optimized production assets
2. **Backend Build**: Runs `esbuild` to bundle the server code
3. **File Restructuring**: Moves frontend files from `dist/public/` to `dist/` for static deployment compatibility

### Deployment Structure

After running the build script, the `dist/` directory contains:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript bundles
- `index.js` - Server bundle (for full-stack deployments)
- Image assets and other static files

### For Static Deployment

The files in `dist/` are now properly structured for static deployment platforms that expect:
- `index.html` in the root of the build directory
- Asset files accessible via relative paths
- All required static assets in the same directory structure

### Development vs Production

- **Development**: Uses `npm run dev` with Vite dev server
- **Production Build**: Uses `node build-for-deployment.js` for deployment-ready files

This approach maintains compatibility with the existing Vite configuration while ensuring proper deployment structure.
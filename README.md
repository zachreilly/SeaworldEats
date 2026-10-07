# Seaworld Fish Bar website

Static React + Vite site for Seaworld Fish Bar, 152 Watford Rd, Croxley Green. Hosted on Namecheap shared hosting.

## Deploying

Every push to `main` builds the site and uploads `dist/` to Namecheap over FTPS (see `.github/workflows/deploy.yml`). You can also run it by hand from the repo's **Actions** tab → *Deploy to Namecheap* → *Run workflow*.

Repo secrets needed (Settings → Secrets and variables → Actions):

| Secret | Value |
| --- | --- |
| `FTP_SERVER` | Namecheap FTP host, e.g. `ftp.wrwebsites.com` |
| `FTP_USERNAME` | cPanel / FTP username |
| `FTP_PASSWORD` | cPanel / FTP password |
| `FTP_DIR` | This site's folder on the server, ending in `/` (check cPanel → Domains). **Required** — the deploy stops if it's missing so it can't overwrite another site. |

## Building by hand

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # output in dist/ — upload its contents to the site folder
```

## Notes

- There's no contact form; customers phone the shop (01923 710019).
- `client/public/.htaccess` forces HTTPS, sends unknown paths to `index.html`, and sets cache headers.
- Menu prices and items live in `client/src/components/MenuSection.tsx`.

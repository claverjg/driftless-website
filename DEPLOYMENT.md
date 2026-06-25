# Driftless Deployment

This site is configured for cPanel Git deployment as a static Next.js export.

## cPanel Setup

1. In cPanel, open **Git Version Control**.
2. Clone the GitHub repository:
   `git@github.com:claverjg/driftless-website.git`
3. Use a repository path outside the web root, for example:
   `/home/driftles/repositories/driftless-website`
4. If GitHub access is private, create an SSH key in cPanel Terminal and add the public key as a GitHub deploy key.
5. In cPanel Git Version Control, use **Update from Remote** and then **Deploy HEAD Commit**.

The checked-in `.cpanel.yml` runs `scripts/cpanel-deploy.sh`, which:

- uses the checked-in static export in `out/`
- copies `out/` into `/home/driftles/public_html`

Build locally with `npm run build` and commit the updated `out/` folder before using cPanel deployment.

If you intentionally want cPanel to rebuild instead of using the checked-in export, set `CPANEL_BUILD=1` before running the deploy script. This requires Node.js/npm and enough server resources for the Next.js build.

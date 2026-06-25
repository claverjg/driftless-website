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

- installs dependencies with `npm ci`
- builds the static export with `npm run build`
- copies `out/` into `/home/driftles/public_html`

If cPanel cannot find `npm`, set `NPM_BIN` in `.cpanel.yml` to the full npm path provided by your host.

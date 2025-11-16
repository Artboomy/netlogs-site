# NetLogs Landing Page

Jekyll-powered landing page for the NetLogs browser extension, tailored for GitHub Pages.

## Jekyll configuration

- SEO and sitemap support are provided by [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) and [`jekyll-sitemap`](https://github.com/jekyll/jekyll-sitemap).
- The site is configured with `url` and `baseurl` defaults for GitHub Pages. Update these in `_config.yml` if the repository name changes or if you publish to a custom domain so canonical links render correctly.
- Build artifacts and cache directories are excluded via `.gitignore` and `_config.yml` to keep the generated site clean.
- Primary links (GitHub repository, Chrome Web Store, and contact email) are centralized in `_data/links.yml` and `_config.yml` so you only update them in one place. Replace the placeholder Chrome Web Store ID before publishing.
- A custom `404.html` and `robots.txt` are included to align with GitHub Pages best practices.

## Local development with Docker

The included Docker configuration installs Ruby, Bundler, and Jekyll so you can build or serve the site without a local Ruby setup.

1. Build the image and install dependencies:

   ```bash
   docker compose build
   ```

2. Serve the site locally at <http://localhost:4000> with live reload:

   ```bash
   docker compose up
   ```

3. Build the static site into the repository-mounted directory (the `_site` output remains on your host):

   ```bash
   docker compose run --rm site bundle exec jekyll build --source /site --destination /site/_site
   ```

The repository root is mounted into `/site` in the container so build artifacts written to `/site/_site` are immediately available on the host.

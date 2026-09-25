# Albert Sunday — Personal Website

A simple, static single-page portfolio. No framework and no build step.

## Files
- `index.html` — all page content
- `styles.css` — colours, layout, light/dark themes
- `script.js` — flip cards and theme toggle
- `favicon.svg` — site icon
- `Albert-Sunday-CV.pdf` — public CV offered for download (sector-only, no client names)
- `_headers` — security headers applied by Cloudflare Pages
- `_redirects` — short links: /cv, /linkedin, /credly
- `.well-known/security.txt` — security contact (RFC 9116); renew the Expires date yearly

## Blog
Posts live in `blog/<slug>/index.html`; the list of posts is `blog/index.html`. To add a post, copy `blog/iam-faqs/`, rename the folder, edit the content, and add a matching entry to `blog/index.html`.

## Editing content
All text lives in `index.html`. To add a work card, copy an existing
`<article class="card card-work">` block and give its `aria-controls` / `id`
a new unique value (e.g. `work-6`).

## Deploying to Cloudflare Pages
1. Create a new GitHub repository and upload these files to its root.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Choose the repository. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Deploy. Your site will be live at `your-project.pages.dev`.
5. Every push to the main branch redeploys automatically. Add a custom domain later under the project's **Custom domains** tab.

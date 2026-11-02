# ADA Landing Page

The live site at [ada.newblockagency.com](https://ada.newblockagency.com/) presents on-site and website accessibility reviews for Los Angeles businesses.

## Build and publish

```bash
npm ci
npm run build
```

Publish the built site to the existing `new-block-ada` project in the New Block Digital Agency Cloudflare account:

```bash
npx wrangler@4.156.1 pages deploy dist --branch main
```

`wrangler.toml` selects the project, account, and output directory. Sign in with `npx wrangler@4.156.1 login` if needed. Never commit Cloudflare credentials.

The Pages URL is [new-block-ada.pages.dev](https://new-block-ada.pages.dev/). The custom domain must have a CNAME record named `ada` pointing to `new-block-ada.pages.dev`, and its Pages custom-domain status must be Active before considering the migration complete.

### Migration checkpoint — November 1, 2026

The current source was built and published to Cloudflare Pages. The home, privacy, terms, and thank-you pages returned HTTP 200, and both GoHighLevel form links were verified in the deployed home page. The existing Pages custom-domain connection was restarted and is pending the DNS change.

GitHub Pages still publishes the committed `docs/` directory from `main` and serves the custom domain until DNS switches. Keep it available until the Cloudflare custom domain is verified; the old host is the rollback option. Git pushes alone do not deploy this direct-upload Cloudflare project: run the build and publish commands above.

## Lead capture

The landing page links to two native GoHighLevel forms in the New Block subaccount:

- On-site: `YowMRMZFDAMJb83u03uK`
- Website: `SAaLLpy9E8UviY7Iatn8`

Each form collects name, phone, email, and separate optional SMS consent. The forms redirect to `/thank-you/` after submission. Update the URLs in `src/pages/index.astro` if the forms are replaced.

The page loads GoHighLevel External Tracking for visit attribution. The native forms handle lead submission directly; the website's old custom form has been removed. SMS consent is optional and A2P registration is a separate process.

# New Block accessibility landing page

The live site at [ada.newblockagency.com](https://ada.newblockagency.com/) presents on-site and website accessibility reviews for Los Angeles businesses.

## Build and publish

```bash
npm ci
npm run build
```

GitHub Pages publishes the committed `docs/` directory from `main`. After building, copy `dist/` into `docs/`, then commit and push. Cloudflare manages DNS.

## Lead capture

The landing page links to two native GoHighLevel forms in the New Block subaccount:

- On-site: `YowMRMZFDAMJb83u03uK`
- Website: `SAaLLpy9E8UviY7Iatn8`

Each form collects name, phone, email, and separate optional SMS consent. The forms redirect to `/thank-you/` after submission. Update the URLs in `src/pages/index.astro` if the forms are replaced.

The page loads GoHighLevel External Tracking for visit attribution. The native forms handle lead submission directly; the website's old custom form has been removed. SMS consent is optional and A2P registration is a separate process.

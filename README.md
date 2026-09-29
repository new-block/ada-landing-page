# New Block restaurant ADA landing page

The live site at [ada.newblockagency.com](https://ada.newblockagency.com/) is a static Astro landing page for **in-person restaurant ADA inspection inquiries**. Website accessibility is not advertised as the primary offer.

## Work locally

```bash
npm ci
npm run dev
npm run build
```

`npm run build` writes the site to `dist/`. GitHub Pages publishes the committed `docs/` directory from `main`. After a change, build locally, copy the contents of `dist/` into `docs/` (including `CNAME` and `.nojekyll`), then commit and push. The domain's DNS is managed in Cloudflare.

## Edit the page

- `src/pages/index.astro` composes the landing page.
- `src/components/BookingForm.astro` contains the inquiry form and optional, unchecked SMS permission box.
- `src/config.ts` contains the current business identity, contact details, and page metadata.
- `src/pages/privacy.astro` and `src/pages/terms.astro` contain the public policies used by the form.

The form relies on GoHighLevel External Tracking, loaded in `src/layouts/Base.astro`, to create contacts and record form submissions. Check new submissions in the New Block CRM after changing the form or tracking script. SMS permission is optional; text only contacts whose submission records an affirmative preference. The form's browser confirmation is not a delivery receipt from GoHighLevel.

Older unverified offer copy and component drafts remain only in the local workspace and are excluded from this public repository.

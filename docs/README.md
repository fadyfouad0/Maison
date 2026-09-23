# IRTH — static preview (GitHub Pages)

This folder is the whole site: one page, the design's own logic, and its images.

## Publish it

1. Put this `docs` folder in the root of a GitHub repository and push.
2. In the repository: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main`, folder: **/docs** → Save.
3. The preview appears at `https://<user>.github.io/<repo>/` within a minute or two.

Open `docs/index.html` directly in a browser to check it locally first.

## What is inside

| File | What it is |
| --- | --- |
| `index.html` | The page: fonts, styles, and the design markup in a `<template>`. |
| `app.js` | The site's logic, exported from the design source: pages, cart, search, filters, checkout, and the hero scroll animation. |
| `runtime.js` | A small renderer that draws the template and keeps it in sync with the logic. |
| `assets/` | Every photo, flag, logo and texture the page uses. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

No build step, no dependencies, nothing to install. The only external request is Google Fonts.

## Notes for the WordPress build

- The hero animation is scroll-driven: the hero is sticky for five screen heights, and the photo, haze, palms, dimming and the chapter rail are painted from the scroll position. It lives in `paint()` in `app.js`.
- Products, categories and prices are the demo data at the top of `app.js`; on WordPress they come from WooCommerce instead.
- The WhatsApp sign-up, the cart, checkout, account and wishlist are front-end only here: nothing is sent anywhere.

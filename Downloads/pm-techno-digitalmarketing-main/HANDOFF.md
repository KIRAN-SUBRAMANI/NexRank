# NexRank Techno Group — Site Scaffold

Handoff notes for Sahana.

## Stack
- Next.js (App Router), JavaScript
- Tailwind CSS v4
- Fonts: Playfair Display (headings) + Inter (body), loaded via `next/font/google`
- Deploy target: Vercel

## Run it
```
npm install
npm run dev
```
Then open http://localhost:3000

## Structure

```
src/
  app/
    layout.js          Root layout — loads fonts, wraps every page in Header + Footer
    page.js             Homepage — group hero + the two division cards
    globals.css
    digital/page.js     NexRank Techno Digital landing page
    travel/page.js      NexRank Techno Travel landing page
    about/page.js        Shared About page (group-level, no individual names)
    contact/page.js      Shared Contact page (placeholder — needs a real form)
  components/
    Header.js            Site-wide nav, pulls links from data/site.js
    Footer.js
    DivisionCard.js      Reusable card used on the homepage split
  data/
    site.js              Group-level content: name, tagline, nav, divisions
    digital.js            Digital division services list
    travel.js              Travel division categories
```

This follows the same "one data file, components pull from it" pattern used on the
other NexRank Techno client sites (like `astrologer-data.php`) — just the React/Next.js
equivalent. To change site-wide copy, nav links, or the services/categories lists,
edit the files in `src/data/` rather than hunting through components.

## What's placeholder / still needed
- **Logo**: not designed yet, `Header.js` currently renders a text wordmark
- **Colors**: using a neutral slate + amber (Digital) / teal (Travel) accent split
  as a starting point — swap once the logo/brand palette is finalized
- **Copy**: homepage, division, about, and contact copy is draft-level, written to
  unblock the build — expect a copy pass once branding is locked
- **Contact form**: `/contact` has no working form yet — needs an API route or a
  form service (Formspree, Resend, etc.) wired in
- **Service/category detail pages**: only landing pages exist for `/digital` and
  `/travel` right now. Deeper pages (e.g. `/digital/services/seo`,
  `/travel/domestic`) aren't built — add as `page.js` files under those folders
  following the same pattern
- **Domain**: not registered yet (nexranktechnogroup.com or similar)

## Deploying
Push to a GitHub repo, then import it in Vercel — it auto-detects Next.js, no
config needed. Once the domain is registered, point it at the Vercel project.

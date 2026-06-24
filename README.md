# Family Site Workflow

This site is set up for the simplest workflow:

1. Claude updates content in `data.js`
2. GitHub stores the change
3. Netlify deploys automatically
4. Your custom domain points to the Netlify site

## Files That Matter

- `index.html`: the site shell and layout
- `data.js`: the content source Claude should update
- `netlify.toml`: tells Netlify to publish this folder

## Daily Workflow

When you want to add a new day:

1. Open `data.js`
2. Copy the last day object in `ACADEMY.days`
3. Change the `day` number
4. Update the wisdom, project, and proof fields
5. Change `ACADEMY.currentDay` to the new day number
6. Commit and push to GitHub
7. Netlify deploys automatically

## Best Prompt For Claude

Use prompts like:

"Update `data.js` in my family-site repo. Add Day 8 in the `ACADEMY.days` array, keep the same structure, and set `currentDay` to 8."

or

"Append a new wisdom day to `data.js` for the family-site project. Do not change `index.html`. Only add the next day object and update `currentDay`."

This keeps Claude focused on content instead of breaking layout code.

## Recommended Ownership Model

- One production repo for the live site
- Netlify connected to that repo
- Claude only edits content unless you explicitly want layout changes

If your kids build separate experiments, keep those separate from this repo and only merge approved content into the production site.

## Netlify Setup

After this folder is in GitHub:

1. In Netlify, choose `Add new site` -> `Import an existing project`
2. Connect GitHub
3. Choose the repo
4. Base directory: leave blank if this repo only contains the site
5. Build command: leave blank
6. Publish directory: `.`
7. Deploy

## Custom Domain

After deploy:

1. Buy a domain from your registrar
2. In Netlify, open `Domain management`
3. Add the custom domain
4. Update the DNS or nameservers at your registrar

## Recommendation

For the least work:

- keep this as one main site
- use one GitHub repo
- let Netlify auto-deploy from `main`
- let Claude mostly edit `data.js`

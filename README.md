# Fieldnotes

An open, static journal for teaching materials about AI and data science by Dr. Jiaxin Du. It is built with plain HTML, CSS, and JavaScript, so it can be hosted directly with GitHub Pages and needs no build step or dependencies.

## Preview locally

Open `index.html` in a browser, or serve the repository root with any static file server.

## Publish with GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, and choose the `main` branch and `/ (root)` folder. GitHub Pages will publish the site from the repository root.

## Add a note

In `index.html`, duplicate one of the `<details class="post-card">` elements inside `#post-list`. Set its `data-topic` to `ai` or `data`, add useful words to `data-search`, and update the title, summary, category, reading time, and article body. Keep the topic values aligned with the filter buttons so search and topic filters continue to work.

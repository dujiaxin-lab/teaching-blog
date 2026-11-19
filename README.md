# Fieldnotes

An open journal for teaching materials about AI and data science by Dr. Jiaxin Du. GitHub Pages uses Jekyll to render Markdown articles as static pages.

## Preview locally

Install Ruby and the [GitHub Pages gem](https://github.com/github/pages-gem), then run `jekyll serve --baseurl ""` from the repository root and visit the local address it prints. Opening `index.html` directly will not render the Jekyll includes or Markdown articles.

## Publish with GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, and choose the `main` branch and `/ (root)` folder. GitHub Pages will publish the site from the repository root.

## Add a note

Create a Markdown file in the repository root with front matter like:

```yaml
---
layout: post
title: Your article title
permalink: /your-article-slug/
topic: ai
description: A short description of the article.
---
```

Write the article below the front matter, starting with a Markdown `#` heading. It will appear on the homepage automatically; there is no need to edit HTML. Set `topic` to `ai` or `data` for the topic filters. The `permalink`, `topic`, and `description` are optional; add `keywords` if you want extra terms to match the homepage search, which searches the title, description, and keywords rather than the full article.

Articles are ordinary Markdown with YAML metadata, which many publishing tools support. The `layout` and `permalink` fields are specific to Jekyll; other platforms may require different metadata or URLs.

## Analytics

Google Analytics 4 is configured with measurement ID `G-CBKKYLR87W` on the homepage and Markdown article pages. After publishing, use the associated Google Analytics property to see page views, approximate visitor locations, and traffic acquisition sources. Data starts collecting after deployment; reports can be delayed, and blockers or privacy settings may prevent some visits from being counted.

Google Analytics uses cookies and sends visitor data to Google. Review applicable privacy and consent requirements before publishing; the site does not currently provide a consent banner.

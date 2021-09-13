---
title: "Quick start"
description: "The fastest way to be able to use Nyerat."
date: 2021-08-22T22:00:00+07:00
---

## Start project

1. Install with git submodule.

   ```bash
   git submodule add -b v1 https://github.com/datakrama/nyerat-hugo-theme.git themes/nyerat
   ```

2. Add `config.yaml` file and fill with content bellow.

   ```yaml
   # config.yaml
   title: "My blog"
   baseurl: "https://example.com/"
   paginate: 8
   params:
     description: "Just another blog site."
     logo:
       header: false
       footer: false
   permalinks:
     post: /:year/:month/:day/:slug/
   rssLimit: 100
   sectionPagesMenu: "main"
   summaryLength: 25
   taxonomies:
     category: category
     tag: tags
     author: authors
   theme: "nyerat"
   timeout: 100000
   ```

3. Copy `package.json` file from `themes/nyerat` folder.

   ```bash
   cp themes/nyerat/exampleSite/package.json ./
   ```

4. Install node dependencies with `pnpm`.

   ```bash
   pnpm install
   ```

5. Start development server.

   ```bash
   pnpm dev
   ```

   Hugo will now start serving your application on <http://localhost:1313>. You
   can start make changes now.

## Build project

Once you done with your changes, or just want to know the final build, you can
run this command.

```bash
pnpm build
```

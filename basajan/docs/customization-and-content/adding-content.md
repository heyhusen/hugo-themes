---
title: "Adding content"
summary: "How to add content in Basajan theme in different types."
weight: 1
date: 2022-03-08T15:00:00+07:00
---

Hugo build your web page using the content you provide plus the "layout"
provided by your site's theme. You can add content to your site by creating a
file in the
[`contentDir`](https://gohugo.io/getting-started/configuration/#contentdir)
directory.

You can add content in several
[formats](https://gohugo.io/content-management/formats/) supported by Hugo.
However, we will focus on content page with `markdown` format in this guide.

## Content page and template

Broadly speaking, content pages on Hago can be grouped into two, namely
[list pages](https://gohugo.io/content-management/organization/#index-pages-_indexmd)
and
[single pages](https://gohugo.io/content-management/organization/#single-pages-in-sections).
All of these pages can have their own
[page kind](https://gohugo.io/templates/section-templates/#page-kinds),
[section](https://gohugo.io/content-management/sections/),
[content type](https://gohugo.io/content-management/types/) and
[template](https://gohugo.io/templates/). In addition, each content type can
also have an
[archetype](https://gohugo.io/content-management/archetypes/) which is useful
as a basis when you want to add content.

However, to keep it simple, the Basajan theme only provides templates and
archetypes for the
[default content type (page)](https://gohugo.io/templates/lookup-order/#hugo-layouts-lookup-rules)
for each list pages and single pages.

### Single page

All single pages have a "page" page kind. The so-called articles in the Basajan
theme are all the single pages that are in your root
[`contentDir`](https://gohugo.io/getting-started/configuration/#contentdir)
folder, and only single pages that is here will be displayed by the Basajan theme.

To create a single page with the default archetype, you can use the command below.

```bash
hugo new who-wants-to-be-a-millionaire.md
```

### List page

Unlike single pages, there are many page kinds for list pages. However, we will
only focus on section here.

To create a list page with the section archetype, you can use the command below.

```bash
hugo new --kind section about/_index.md
```

You can still create a list page without needing to use the "--kind" flag.
However, if you do not use this flag, the archetype used is the default one.
There will be some unused front matter later, such as taxonomies.

If you configure
[sectionPagesMenu]({{< relref "project/basajan/configuration.md#sectionpagesmenu" >}}),
the created sections will also appear in the navigation menu.

## Description

Each content page should have a description on
[the front matter](https://gohugo.io/content-management/front-matter). This is
required for meta tags, Open Graph, and Twitter Cards. If you can't do this, at
least provide a description on the content page that has no content.

**Example**:

```md
---
description: "How to add content in Basajan theme in different types."
---
```

## Image (thumbnail)

Especially for article content, you can provide a special image for the
thumbnail on
[the front matter](https://gohugo.io/content-management/front-matter). This
image will later be optimized for use on the homepage, Open Graph, and Twitter
Cards.

If you cannot provide this image in one article content, you may not provide it
in another article content. You have to be consistent in this decision. Unless,
you agree with the list of articles that look disorganized.

For other content pages, this image will not be used for a thumbnail, only for
Open Graph and Twitter Cards.

**Example**:

```md
---
image: "https://picsum.photos/1200/630"
---
```

## Taxonomies

In the Basajan theme there are only two taxonomies namely categories and tags.
These two taxonomies only apply to article content.

### Category

Each article content must have one category. It is necessary for use in
breadcrumbs. By default, the archetype provides article content of the
"Uncategorized" category.

**Example**:

```md
---
category: "Jamstack"
---
```

### Tag

Unlike categories, tags are not required in every article content. Article
content can also be tagged with more than one tag.

**Example**:

```md
---
tags: 
  - "Hugo"
  - "SSG"
---
```

---
title: "Taxonomies"
description: "How to structure content using user defined groups."
weight: 2
date: 2021-09-02T10:10:44+07:00
---

If you have a blog, your number of articles will increase over time. If there
are a lot of them, it will be more difficult to manage them. Your blog readers
will also generally be interested in articles that are similar to the articles
they read. It's common for a site to use taxonomies to work around this.

A taxonomy is a user-defined grouping of content. Categories and tags are the
most common taxonomies used by a blog. Neyrat supports both taxonomies, plus a
taxonomy for authors.

## Category

Categories are the main taxonomies commonly used on a site, especially blogs.
Categories are used to group similar related content in the big picture.
Categories are generally in the form of one word, but it is possible that they
are also short sentences.

For example, you want to group articles with the "nature" category, you can
change the front matter of the article more or less as follows.

```yaml
category: "Nature"
```

Nyerat supports only one category per article. This is done because there is
already a tag as a taxonomy that can be used in large numbers. It makes more
sense if the category is singular, and the tags are plural.  
In addition, categories are also used in
[breadcrumb navigation](https://en.wikipedia.org/wiki/Breadcrumb_navigation).
For a more detailed explanation of breadcrumbs, you can read the
[documentation]({{< relref "work/hugo-themes/nyerat/docs/basic-concepts/structured-data.md#breadcrumb" >}}).

> Every article must have a category. By default, each new article will be
> assigned an "Uncategorized" category.

## Tag

In addition to categories, there are also tags as additional taxonomies. As
explained above, in contrast to categories, you can assign multiple tags to an
article.  
Tags are smaller groupings than categories. Tags will always have the same
context as the categories in the related article.

For example, with the "nature" category, you can add "greening" and "healthy
living" tags.

```yaml
tags:
  - Greening
  - Healthy Living
```

> Tags are not mandatory in every article.

## Author

Nyerat supports multiple authors in each article by using a taxonomy. For
further explanation, please read the
[documentation for the author]({{< relref "/work/hugo-themes/nyerat/docs/customization-and-content/author.md" >}}).

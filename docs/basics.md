---
title: "Basic knowledge"
description: "Some important things you need to know about Nyerat."
date: 2021-08-24T10:19:00+07:00
---

## Image

All (raster) images in this theme is always optimized, including your logo. This
is because images are served as next gen format like `webp`, and converted to
multiple dimension. The width of all converted images will not exceed the
original width.

Supported source format images are `bmp`, `jpg`, `png`, `tif`, & `webp`.  
All images location are always relative to `assets` directory.

> Always use cache when build this theme for faster image processing.

## Link

All links in content (from markdown) that start with `http*`, will be treated as
external links. So, when the link is clicked it will open a new tab.

So you should use relative links for internal references.

Example:

```md
[About]({{< relref "/about" >}})
```

or

```md
![About](/about)
```

## Structured data

Search engines need to work hard to understand the content of web pages. We can
help them by including structured data into our web pages. Structured data is a
standardized format for providing information about a web pages.

Most structured data uses the [schema.org](http://schema.org) vocabulary, in
[Microdata](<http://en.wikipedia.org/wiki/Microdata_(HTML)>),
[JSON-LD](http://en.wikipedia.org/wiki/JSON-LD), or
[RDFa](http://en.wikipedia.org/wiki/RDFa) formats.  
Although Google recommends us to use the JSON-LD format, Nyerat will still use
the Microdata format. As well as making more sense to use with Hugo,
[schema.org](http://schema.org) also focuses its documentation on
[using the Microdata](https://schema.org/docs/gs.html#microdata_why) format.

### Breadcrumb

A breadcrumb trail is a graphical control element that is often used as a
navigation aid in user interfaces and on web pages.  
Breadcrumb can provide the current page location in the site hierarchy. Search
engines also use these breadcrumbs in their search results.

Nyerat displays breadcrumbs on all pages, except the front page.  
Especially on article pages, categories will also be displayed in the
breadcrumb. Since this theme does not support nested categories, each article
can only use one category. If there is more than one,
then navigation in breadcrumbs will make no sense.

---
title: "Social Card (Open Graph)"
description: "Customize the appearance of your site on the social graph."
date: 2021-08-30T22:46:44+07:00
---

Open Graph is an internet protocol originally created by Facebook in the use of
metadata to represent content on all pages of a website. Today, almost all sites
use it, except Twitter. Twitter uses a different standard which they call
Twitter Card. However, Twitter Card also has a fallback to Open Graph for some
of its properties.  
The most common example of use is when you share existing site content to social
networks.

Fortunately, Nyerat supports both. Everything is done automatically. However, if
you want a better data structure, there are a few things you need to pay
attention to.

## Property

The Open Graph and Twitter Card both have many properties you can use. However,
for simplicity, this theme uses only a few of them.

> Not all Open Graph and Twitter Card parameters used by this theme require more
> attention.

### Description

Each page should have a description. Nyerat gets a description based on several
conditions.

1. The description value of the front matter.
2. Summary of page content.
3. Site description

If it's not possible to provide descriptions on all pages, at least provide them
on pages that have no content. For example section and lists page.

### Type

There are only two types used by this theme, namely article and section.
When you want to create a single page, make sure it is a section. For example to
create a "contact" page, you need to create a `content/contact/_index.md` file
instead of `content/contact.md`.

### Image

Images in open graphs are very important. Images will be displayed according to
the conditions on the related page.  
The following is the order of priority for the images to be displayed.

1. `image` parameter values in front matter.
2. The first image in the content.
3. `image` parameter values in configuration.

So that the images on each page are different, at least provide an image in the
content.

The minimum image dimensions for Open Graphics are 1200x630 pixels. It is
because of this image that the thumbnails must also have at least the same
dimensions.

### Locale

Open Graph requires that local value use the language and territory format. This
value is taken from the
[`languageCode`](/work/hugo-themes/nyerat/docs/configuration#language-code)
configuration. Therefore, the configuration for `languageCode` must have a
similar format.

### Twitter

If you fill in
[`author.social.twitter`](/work/hugo-themes/nyerat/docs/customization-and-content/author#metadata)
configuration, then this value will be used for Twitter Card. Twitter will
assume this username is the owner of your site.

## Validation

If you want to validate an Open Graph or Twitter Card data structure, you can
use some of the facilities provided below.

- Facebook: <https://developers.facebook.com/tools/debug>
- Twitter: <https://cards-dev.twitter.com/validator>
- LinkedIn: <https://www.linkedin.com/post-inspector>
- Pinterest: <https://developers.pinterest.com/tools/url-debugger>

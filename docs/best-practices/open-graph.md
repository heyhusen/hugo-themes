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

The description property behaves the same as
[description in the content]({{< relref "/work/hugo-themes/nyerat/customization-and-content/adding-content.md#description" >}}).

### Type

There are only two [Open Graph `type` property](https://ogp.me/#types) used by
this theme, namely `website` and `article`.  
This is more or less how this theme describes page types in Open Graph.

| Hugo Page Type  | OG Property Type |
| --------------- | ---------------- |
| Regular         | `article`        |
| All but regular | `website`        |

Don't create the wrong type of page. Due to the `article` property, Open Graph
expects several other properties to exist, such as author, publication time, and
related content. This theme only assigns this property to regular pages.

### Image

The image property behaves the same as
[thumbnail in the content]({{< relref "/work/hugo-themes/nyerat/customization-and-content/adding-content.md#thumbnail" >}}).

The main reason why a thumbnail must be at least 1200x630 pixels is due to the
need for Open Graph.

### Locale

Open Graph requires that local value use the language_TERRITORY format. This
value is taken from the
[`languageCode`]({{< relref "/work/hugo-themes/nyerat/docs/configuration#language-code" >}})
configuration. Therefore, the configuration for `languageCode` must have a
similar format.

### Twitter

If you fill in
[`author.social.twitter`]({{< relref "/work/hugo-themes/nyerat/docs/customization-and-content/author#metadata" >}})
configuration, then this value will be used for Twitter Card. Twitter will
assume this username is the owner of your site.

## Validation

If you want to validate an Open Graph or Twitter Card data structure, you can
use some of the facilities provided below.

- Facebook: <https://developers.facebook.com/tools/debug>
- Twitter: <https://cards-dev.twitter.com/validator>
- LinkedIn: <https://www.linkedin.com/post-inspector>
- Pinterest: <https://developers.pinterest.com/tools/url-debugger>

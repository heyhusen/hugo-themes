---
title: "Optimization"
description: "Nyerat optimizes a lot of things so that your site doesn't have a high bounce rate."
weight: 1
date: 2021-09-22T21:44:00+07:00
---

Nyerat uses several methods to optimize your site. Of course all of this is
debatable. However, it is necessary to lower the bounce rate on your site. Apart
from that, we also want Nyerat to be easy to use by most people.

## Image

All (raster) images in this theme is always optimized, including your logo. This
is because images are served as next gen format like `webp`, and converted to
multiple dimension. The width of all converted images will not exceed the
original width.

Supported source format images are `bmp`, `jpg`, `png`, `tif`, & `webp`.  
All images location are always relative to `assets` directory.

> Always use cache when build this theme for faster image processing.

### `alt` vs `title` Attribute

The correct way to place information about an image is to use the `alt`
attribute.
[Highly recommended for accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt).

Almost every html element can have a `title` attribute. The `img` element is no
exception. This attribute is used by web browsers for tooltip. However, this
attribute can
[cause accessibility issues](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns).  
Therefore, Nyerat uses the `title` attribute for other purposes. This attribute
will be used as a `caption` for the associated image. This is very useful if
you want to embed a license for the image you are using.

```md
![Your image alt attribute](/img/image.jpg "Photo by Jeremy Bishop on Unsplash")
```

### Shortcode

Just like using native syntax to display images, with the below shortcode you
can also do the same.

```go
{{< image src="/img/image.jpg" alt="Your image alt attribute" caption="Photo by Jeremy Bishop on Unsplash" >}}
```

> Netlify CMS in this theme uses only the above shortcode to manage images in
> content. So never use native syntax for images manually when you are using
> this theme with CMS enabled.

## Link

All links in content (from markdown) that start with `http*`, will be treated as
external links. So, when the link is clicked it will open a new tab on your web
browser.

You should use relative links for
[internal references](https://gohugo.io/content-management/cross-references/).

Example:

```md
[About]({{< relref "/about" >}})
```

or

```md
![About](/about)
```

The `title` attribute will be ignored because it can
[cause accessibility issues](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns),
the same thing we do with [images]({{< relref "#image" >}}).

## CSS and JavaScript

As you know, Nyerat uses [Tailwind CSS](https://tailwindcss.com/). In general,
you need to build Tailwind before deploying it in production. We don't think you
need to do that. Because, of course it will take time. So, we decided to built
it for you.

For the same reason, we've also built a JavaScript file for you. Especially for
those from [npm](https://www.npmjs.com/). Therefore, you don't need to bother
installing npm dependencies. We hope this will make it easier for you to use
Nyerat.

However, by providing CSS and JavaScript that are already built like this, you
can't customize them. This is one of the compromises we made.

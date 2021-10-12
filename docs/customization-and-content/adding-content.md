---
title: "Adding Content"
description: "Add different types of content to your Nyerat site."
weight: 1
date: 2021-08-29T22:46:44+07:00
---

Hugo builds your web pages using the content you provide plus the "layout"
provided by your site's theme. You can add content to your site by creating a
file in the `contentDir` directory. By default, Hugo will use the `content` directory as `contentDir`. You can change it, if you feel you need it. You can see the
[official documentation](https://gohugo.io/getting-started/configuration/#contentdir)
for further explanation. However, in this documentation we will use the default `contentDir` directory.

Hugo supports many formats for content. But, we will only use the markdown
formatv for this theme. Apart from its popularity, markdown is also easy for
many people to understand.  
If you want to see other formats, please read the official documentation for
[Content Formats](https://gohugo.io/content-management/formats/).

## Content and Layout

There are two kinds of content that you can create, namely section pages and
regular pages. Both are built using different layouts. In fact, some section
pages also have their dedicated layouts, such as
"[contact]({{< relref "/work/hugo-themes/nyerat/docs/customization-and-content/contact-form.md" >}})" and "post" section page.

### Section Page

Here's how to create a "post" section page.

```bash
hugo new post/_index.md
```

Yes, the name of the section is taken from the name of the created file. See
there's a `_index.md` file in the "post" folder? This is what makes "post" a
section page.  
This file will be rendered by Hugo as a <http://example.com/post> page.

### Regular Page

Well, if you want to create a regular page, you can use a command like this.

```bash
hugo new post/how-to-stay-productive-even-when-you-are-bored.md
```

Regular pages can be in the section, or directly in the `content` folder.  
This file will be rendered by Hugo as a
<http://example.com/post/how-to-stay-productive-even-when-you-are-bored> page.

> All articles for your blog are regular pages and should be created under the
> "post" section.

## Description

Every page should have a description. Nyerat gets a description based on several
conditions.

1. The `description` value of the
   [front matter](https://gohugo.io/content-management/front-matter/#predefined).

   ```md
   ---
   title: Alumnus Post Moderantum Turba
   desciption: "Awesome description for awesome article."
   ---
   ```

2. [Summary](https://gohugo.io/content-management/summaries) of page content.
3. Your [site description]({{< relref "/work/hugo-themes/nyerat/docs/configuration.md#site-description" >}}).

If it's not possible to provide descriptions on all pages, at least provide them
on pages that have no content. For example "section" and "list" page.

## Thumbnail

[Thumbnail](https://en.wikipedia.org/wiki/Thumbnail) is reduced versions of an
image for use on pages with article lists and
[Open Graph]({{< relref "/work/hugo-themes/nyerat/docs/best-practices/open-graph.md" >}}). Sometimes these thumbnails are also used in some other places. These images can
provide additional information to visitors. In fact, on some occasions,
thumbnails can determine the interest of visitors to read your article.  
You can provide a dedicated image for the thumbnail, or let Nyerat decide it for
you.

The following is the order of priority for an image to be used as thumbnail.

1. `image` parameter values in
   [front matter](https://gohugo.io/content-management/front-matter/#user-defined).

   ```md
   ---
   title: Alumnus Post Moderantum Turba
   image: "/img/hugo-matilla-EFuCATqfblI-unsplash.jpg"
   ---
   ```

2. The first image in the content.
3. `image` parameter values in configuration.

   ```yaml
   # config.yaml
   params:
     image: "/img/my-awesome-image.png"
   ```

4. [Default image](https://github.com/datakrama/nyerat-hugo-theme/raw/v1/assets/img/cover.png)
   provided by this theme.
   ![Default image for thumbnail](https://github.com/datakrama/nyerat-hugo-theme/raw/v1/assets/img/cover.png)

Thumbnails will only be displayed explicitly by Nyerat on the article listing
page. However, each page can be assigned a thumbnail which can later be used for
other purposes. For example, the Open Graph in this theme uses a thumbnail on
each page.

> The minimum image dimensions for a thumbnail is 1200x630 pixels.

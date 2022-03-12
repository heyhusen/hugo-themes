---
title: "Configuration"
summary: "Change the configurations to suit your personal preferences."
weight: 3
date: 2022-03-07T12:00:00+07:00
---

The configurations below are the ones recommended and used directly by the
Basajan theme.

If you want to change the configuration for Hugo in general, you can visit
[the official documentation](https://gohugo.io/getting-started/configuration/)
for reference.

## title

Title of your site.

**Example**:

```yaml
title: "My Awesome Blog"
```

## baseURL

Hostname (and path) to the root.

**Example**:

```yaml
baseURL: "https://example.com/"
```

If you are using a service provider that supports multiple environments, fill
this configuration only in your production environment.

## languageCode

The language code for your site's content.

You should only fill in this configuration if your site content is not in
English.

To find the correct subtag codes for a language, try
[the Language Subtag Lookup](https://r12a.github.io/app-subtags/).

**Example**:

```yaml
languageCode: "id"
```

## copyright

Optional text that appears in the footer and Hugo's
[default RSS template](https://gohugo.io/templates/rss/#the-embedded-rssxml).

If you don't fill it in, the text that appears in the footer is just a general
copyright text.

**Example**:

```yaml
copyright: 'Copyright © 2022 · <a href="https://example.com">John Doe</a>'
```

This configuration also support HTML syntax.

## sectionPagesMenu

[Section menu](https://gohugo.io/templates/menu-templates/#section-menu-for-lazy-bloggers)
for lazy bloggers. This configuration will make all
[`sections`](https://gohugo.io/content-management/sections/) a "main" menu item.

To enable this menu, configure `sectionPagesMenu` in your site config:

```yaml
sectionPagesMenu: "main"
```

## menu

If you want to
[add non-content items](https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu)
to the "main" menu, you can do so here.

By default, Basajan uses this configuration. This makes the "home" menu always
in front of the other menus, as long as the other menus don't have a
[`weight`](https://gohugo.io/variables/menus/#menu-entry-variables) less than
-1.

```yaml
menu:
  main:
    - identifier: "home"
      name: "Home"
      pageRef: "/"
      weight: -1
```

Hugo will automatically merge the above configuration into your site's
configuration if you don't override it.

## author

Author related configuration.

### name

Your name as an author.

**Example**:

```yaml
author:
  name: "John Doe"
```

### image

The image of your choice that you want to use as your avatar. This image can be
in a
[global](https://gohugo.io/hugo-pipes/introduction/#find-resources-in-assets) or
[remote](https://gohugo.io/hugo-pipes/introduction/#get-resource-with-resourcesget-and-resourcesgetremote)
resources.

**Example**:

```yaml
author:
  image: "img/cover.jpg"
```

If you prefer to use [gravatar](https://gravatar.com/), just leave this
configuration blank and enter
[your email configuration]({{< relref "/project/basajan/configuration.md#email" >}})
instead.

### email

The email to be used as the gravatar email and Hugo's default RSS template.

**Example**:

```yaml
author:
  email: "jonh@doe.com"
```

If you fill in the configuration for the image and email, the avatar that will
be displayed by Basajan is the avatar of the image configuration above.

### bio

A description of your site, it could be a short biography or whatever. Later this
will be displayed on the front page.

**Example**:

```yaml
author:
  bio: "Written by John Doe. Just an ordinary guy who likes to write."
```

### social

Configuration related to the author's social media. Later this will be displayed
in the header. All values here are your username.

**Example**:

```yaml
author:
  social:
    facebook: "johndoe"
    instagram: "johndoe"
    linkedin: "johndoe"
    twitter: "johndoe"
```

## params

### description

Description of your site. This will be a last fallback for every description
that should be on every page of your site for meta tags, Open Graph, and Twitter
Cards.

**Default**:

```yaml
params:
  description: "A very simple & clean blog theme for Hugo, with 0kb JavaScript shipped by default."
```

### image

The image that will be the last fallback for every image that should be on every
page of your site for Open Graph and Twitter Cards.

This image can be in a
[global](https://gohugo.io/hugo-pipes/introduction/#find-resources-in-assets) or
[remote](https://gohugo.io/hugo-pipes/introduction/#get-resource-with-resourcesget-and-resourcesgetremote)
resources.

**Default**:

```yaml
params:
  image: "img/cover.jpg"
```

### credit

Allow Hugo to show the credit in your footer.

**Default**:

```yaml
params:
  credit: true
```

> I would really appreciate it if you let the credit appear in your footer.
Thank you very much.

## paginate

The number of articles that must be displayed in each
[pagination](https://gohugo.io/templates/pagination/).

**Recommended**:

```yaml
paginate: 8
```

## enableRobotsTXT

Allow Hugo to generate a robots.txt file.

**Recommended**:

```yaml
enableRobotsTXT: true
```

## disqusShortname

Activate the [Disqus](https://disqus.com/) comment system in your article by
filling in your
[Disqus shortname](https://help.disqus.com/en/articles/1717111-what-s-a-shortname).

**Example**:

```yaml
disqusShortname: "your-username"
```

## taxonomies

By default, the Basajan theme has made some changes to
[Hugo's built-in taxonomies](https://gohugo.io/content-management/taxonomies#default-taxonomies).
This was done to fit the initial concept of Basajan.

```yaml
taxonomies:
  category: "category"
  tag: "tags"
```

To apply this configuration, you must configure the `taxonomies` as follows for
Hugo to merge the theme configuration.

```yaml
taxonomies:
  _merge: "deep"
```

## markup

Basajan has a opinionated
[syntax highlighting configuration](https://gohugo.io/getting-started/configuration-markup#highlight).

```yaml
markup:
  highlight:
    lineNos: true
    style: "xcode-dark"
```

If you have no problem with this, you can configure the `markup` as follows for
Hugo to merge the theme configuration.

```yaml
markup:
  _merge: "deep"
```

## minify

To create a valid website page structure, you have to make some changes to the
[configuration for minification](https://gohugo.io/getting-started/configuration/#configure-minify).

Otherwise, your web page will not pass validation for example by W3C.

```yaml
minify:
  tdewolff:
    html:
      keepQuotes: true
      keepWhitespace: false
```

You are highly recommended for configure the `minify` as follows for Hugo to
merge the theme configuration.

```yaml
minify:
  _merge: "deep"
```

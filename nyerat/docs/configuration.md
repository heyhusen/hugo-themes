---
title: "Configuration"
description: "Customize the settings according to personal preferences."
weight: 3
date: 2021-08-27T10:26:44+07:00
---

As you noticed while installing this theme, by default, Nyerat uses the `config`
folder to configure your site. Your site will still be configured with only one
`config.yaml` file. However, if that happens, the Netlify CMS in this theme
cannot be used.  
For a complete guide, you can refer to the
[Advance documentation]({{< relref "/work/hugo-themes/nyerat/docs/basic-concepts/netlify-integration.md#disable-netlify-cms" >}}).

Below are some settings you can make for this theme. Not all settings are
described here. For more complex configurations, you can see
[the customization and content]({{< relref "/work/hugo-themes/nyerat/docs/customization-and-content/_index.md" >}})
section of the documentation.

## Site Name

Since your site name will be displayed in many places, this field is required.

```yaml
title: "My blog"
```

## Site description

Description of your site. Try to use short sentences, but still informative.

```yaml
params:
  description: "Home for all kinds of tutorials."
```

## Base URL

Hostname (and path) to the root, e.g. <https://example.com/>.

```yaml
baseurl: "https://example.com/"
```

The basic url setting is mandatory, as it will be used in the
[robots.txt]({{< relref "#robots-txt-file" >}}) file, RSS, and some metadata which is very
important for SEO.

> Your site can still be accessed without setting the base url.

## Robots.txt File

Settings for generating a robots.txt file. Robots.txt is very useful for telling
search engines which urls to crawl.

```yaml
enableRobotsTXT: true
```

If this setting is enabled, the theme will generate a robots.txt file with
content like this.

```txt
User-agent: *

Sitemap: https://example.com/sitemap.xml
```

## Language Code

Language code is mainly used for `lang` attribute in html. If it is not filled in,
your site structure will not be valid.  
This language code is also used in other places such as
[RSS](https://github.com/gohugoio/hugo/blob/7c21eca74f95b61d6813d0c0b155bf07c9aa8575/tpl/tplimpl/embedded/templates/_default/rss.xml#L19)
and
[Open Graph]({{< relref "/work/hugo-themes/nyerat/docs/best-practices/open-graph.md" >}}).

For example, the language code "en-US" applies to international English.

```yaml
languageCode: "en-US"
```

The format for the language code is **language_TERRITORY**.

You can find your language code reference at
<https://r12a.github.io/app-subtags>

## Syntax Highlighting

Hugo uses [Chroma](https://github.com/alecthomas/chroma) as its code
highlighter. There are several styles available. However, this theme uses a
color palette from [Nord](https://www.nordtheme.com).

```yaml
markup:
  highlight:
    style: nord
```

If you want to change to another style, please see the list of styles from the
[Chroma repository](https://github.com/alecthomas/chroma/tree/master/styles).
Use the filename as the setting value.

```yaml
markup:
  highlight:
    style: monokai
```

Some of the styles above have previews you can check out at
<https://xyproto.github.io/splash/docs>

## Minify

Hugo is great when it comes to minification. However, there are some settings
that need to be changed.

Like for example `minify.tdewolff.html.keepQuotes` which must be enabled.
Otherwise, the html structure in your blog will be invalid.

The `minify.tdewolff.html.keepWhitespace` option can also be disabled to further
compress your site structure.

```yaml
minify:
  tdewolff:
    html:
      keepQuotes: true
      keepWhitespace: false
```

## Pagination

Nyerat displays a list of articles in the form of cards. One column on mobile,
and two columns on tablet and desktop. So, the pagination settings have to be
filled with an even number to match.

```yaml
paginate: 8
```

Especially on the front page, the number of articles displayed will increase by
one. One recent article will be shown as a highlight and larger than the others.

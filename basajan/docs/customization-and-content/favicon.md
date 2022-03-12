---
title: "Favicon"
summary: "How easy it is to change that little icon in your browser tab bar."
weight: 2
date: 2022-03-08T14:00:00+07:00
---

A [favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon)
(favorite icon) is an icon belonging to a website, which is usually displayed in
the tab bar in web browser, Feed Reader, and other places.

At first, to add a favicon to the site, we just need to provide the
[ICO icon]({{< relref "project/basajan/customization-and-content/favicon.md#ico-icon" >}}).
However, currently there are many icon formats that are supported by several
web browsers. Apart from ICO format icons, the Basajan theme also supports
[SVG format]({{< relref "project/basajan/customization-and-content/favicon.md#svg-icon" >}})
and
[web app manifests]({{< relref "project/basajan/customization-and-content/favicon.md#web-app-manifests" >}}).

It is undeniable that the use of this favicon is a fairly complicated topic.
But, we have made it as easy as possible for you to do it. You can simply place
the icon file (with the name defined below) in the
[`assetDir`](https://gohugo.io/getting-started/configuration/#assetdir) folder.
After that, let the Basajan theme take care of it.

If you want to learn more about favicon, you can read
[this guide](https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7).

## ICO icon

**File name**: favicon.ico

ICO format icons are long supported icons. Not only web browsers, several other
applications such as Feed Reader also support it.

By default, the Basajan theme only uses this formatted favicon. So, if you only
want to provide one favicon, you should at least prepare the icon in ICO format
to replace the favicon used by this theme. 

**Result**:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
```

## SVG icon

**File name**: favicon.svg

Unlike ICO, SVG is a relatively new format for favicon. However, with SVG, you
can make a lot of customization, such as differentiating favicon for light and
dark theme.

**Result**:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
```

## Web app manifests

**File name**: manifest.webmanifest

For those of you who want to use different icons when adding your site to your
home screen on your Android device, the Basajan theme also supports
[web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest).

**Example**:

```json
{
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

For web application manifests only, all icons referenced in the
`manifest.webmanifest` file must be placed in a
[`staticDir`](https://gohugo.io/content-management/static-files) folder. That
way, Hugo can copy them to
[`publishDir`](https://gohugo.io/getting-started/configuration/#publishdir)
folder when you build your site.

If based on the example above, the intended icons are
`android-chrome-192x192.png` and `android-chrome-512x512.png`.

**Result**:

```html
<link rel="manifest" href="/manifest.webmanifest">
```

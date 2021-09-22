---
title: "Favicon"
description: "How to add a favicon with a supported format to your site."
weight: 7
date: 2021-09-22T13:18:57+07:00
---

A favicon (favorite icon) is an icon belonging to a website, which is usually
displayed in the tab bar in web browser, Feed Reader, and other places.  
If we talk about favicon, there will be many different opinions about it.
Sometimes installing a favicon will be very difficult if we think too much about
it. Every web browser supports different formats, some web browsers also treat
favicon differently.

After reading many references, we decided to only support 3 favicon formats,
namely SVG, PNG and ICO. An explanation of why only 3 formats are supported, you
can read [here](https://www.leereamsnyder.com/blog/favicons-in-2021).  
All favicon must be placed in a `static` folder.

The order in which the formats will be displayed is as follows.

1. SVG
2. PNG
3. ICO

That is, if you want to install a favicon, at least use the ICO format. This is
the most widely supported format by web browsers.

```yaml
params:
  favicon:
    ico: favicon.ico
```

> Please note, favicon with ICO format must have the name `favicon.ico`.

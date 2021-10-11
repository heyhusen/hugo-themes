---
title: "Structured Data"
description: "Use structured data to create additional information on search engine results pages."
weight: 2
date: 2021-09-22T21:48:16+07:00
---

Search engines need to work hard to understand the content of web pages. We can
help them by including structured data into our web pages.
[Structured data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
is a standardized format for providing information about a web pages.

Most structured data uses the [schema.org](http://schema.org) vocabulary, in
[Microdata](http://en.wikipedia.org/wiki/Microdata_(HTML)),
[JSON-LD](http://en.wikipedia.org/wiki/JSON-LD), or
[RDFa](http://en.wikipedia.org/wiki/RDFa) formats.
Although Google recommends us to use the JSON-LD format, Nyerat will still use
the Microdata format. As well as making more sense to use with Hugo,
[schema.org](http://schema.org) also focuses its documentation on
[using the Microdata](https://schema.org/docs/gs.html#microdata_why) format.

## Breadcrumb

[A breadcrumb](https://en.wikipedia.org/wiki/Breadcrumb_navigation) trail is a
graphical control element that is often used as a navigation aid in user
interfaces and on web pages.  
Breadcrumb can provide the current page location in the site hierarchy. Search
engines also use these breadcrumbs in their search results.

Nyerat displays breadcrumbs on all pages, except the front page.  
Especially on article pages,
[a category]({{< relref "/work/hugo-themes/nyerat/docs/customization-and-content/taxonomies.md#category" >}})
will also be displayed in the breadcrumb.  
Since this theme does not support nested categories, each article
can only use one category. If there is more than one,
then navigation in breadcrumbs will make no sense.

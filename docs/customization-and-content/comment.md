---
title: "Comment"
description: "Add a comment system to your site to interact with readers."
weight: 4
date: 2021-09-22T13:18:57+07:00
---

If you have a blog, there must be readers too. Sometimes, readers will want to
interact with you as the blog owner, and vice versa. There are many media that
can help, for example the comments column.

Hugo as a static site generator certainly does not have an integrated comment
system. For that, we need to use third party services. There are many options
available. However, the most popular one to use is Disqus, and Nyerat supports
it.

> The comment field is only available on your article page, as it makes the most
> sense for a blog.

## Disqus

[Disqus](https://disqus.com) is a comment hosting service provider for web
sites. It's very easy to add it to your site.

1. You must have a [Disqus account](https://disqus.com/profile/signup).
2. [Create a new site](https://disqus.com/admin/create) on Disqus.
3. Add the Disqus short name to the configuration.

   ```yaml
   disqusShortname: "your-disqus-shortname"
   ```

That's it. Now the comments column from Disqus has appeared on every page of
your article.

For Disqus to work properly on your site, there are a few things you need to pay
attention to.

1. Don't change the file name of your article.
2. Don't change your article slug.

---
title: "Netlify Integration"
description: "Nyerat has pretty good integration with Netlify. You may want to know why we did it."
weight: 3
date: 2021-09-22T21:48:36+07:00
---

Nyerat has pretty good integration with Netlify. This is because it uses some of
the libraries created by them. For example, Netlify CMS, Git Gateway, Netlify
Identity, and Netlify Identity Widget. We do this not without reason. But, the
most influential is the use of Netlify CMS.

We chose Netlify CMS because of the convenience it offers. Unfortunately, the
Netlify CMS requires a few things in order for us to use it. And the easiest
thing to choose which library to use is of course a library that is definitely
well integrated with Netlify, the creator of the Netlify CMS itself.

## Netlify CMS

[Netlify CMS](https://www.netlifycms.org/) is a git based
[CMS](https://en.wikipedia.org/wiki/Content_management_system). A CMS like this
is especially useful for static site generators like Hugo. With Netlify CMS,
content management is easier because of the GUI than the CLI.  
This means you can manage content stored in a Git repository like
[GitHub](https://github.com) or [GitLab](https://gitlab.com) using a web-based
interface. To do this, Netlify needed something they called
[a backend](https://www.netlifycms.org/docs/backends-overview) for the "bridge"
between Netlify CMS and Git hosting in order to communicate with each other.

For this, Nyerat chose
[Git Gateway](https://www.netlifycms.org/docs/git-gateway-backend/) as backend,
as well as [Netlify Identity](https://www.netlify.com/docs/identity/) and
[Netlify Identity Widget](https://github.com/netlify/netlify-identity-widget) to
handle authentication and user management in Netlify CMS.  
Git Gateway was chosen because it supports popular Git hosting, GitHub and
GitLab. In addition, Git Gateway also allows users who do not have direct access
to a Git repository to manage content.

Before you can use Netlify CMS, you have to do a few things first.

### Set Up CMS

1. [Enable Netlify Identity](https://docs.netlify.com/visitor-access/identity/#enable-identity-in-the-ui)
   for your site.
2. [Set up Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/#setup-and-settings).
3. [Add users to the CMS](https://docs.netlify.com/visitor-access/identity/registration-login/#add-identity-users).
   Either through the registration form or by invitation only.

> The above setup is only required if you are not using a starter template to
> install Nyerat.
> If you're using it, you can read the full guide in our
> [separate repository](https://github.com/datakrama/nyerat-hugo-theme-starter).

### Disable Netlify CMS

In some time, you may not want to use Netlify CMS. You only want to use Hugo CLI
to manage your content. If you think so, it might be better for you to disable
it.

Basically, Netlify CMS page will render using the "cms" layout. So, what you
have to do is not to publish that "cms" section page.

```bash
hugo new cms/_index.md
```

You just need to create that page as `draft`.

```md
---
title: "CMS"
description: ""
image: ""
date: 2021-09-23T15:49:41+07:00
draft: true
---
```

At this point, the Netlify CMS is no longer active for your site. However, there may still be things you need to do.  
Nyerat uses the `config` folder as a configuration. The reason is because
[Netlify CMS does not yet support creating multiple forms with the same file](https://github.com/netlify/netlify-cms/issues/4518). We need it to create a settings
form.

Since Netlify CMS is no longer active, you can reuse a single `config.yaml` file
as a configuration.  
You can see the guide in the
[official Hugo documentation](https://gohugo.io/getting-started/configuration/#configuration-directory).

---
title: "Installation"
summary: "A complete guide to getting started with the Basajan theme."
weight: 2
date: 2022-03-03T12:00:00+07:00
---

## Prerequisites

- **Git** - Latest stable version is recommended.
- **Go** - v1.17 or higher.
- **Hugo** - v0.92.0 or higher.

> The version of the tools listed in the prerequisites above is based on the
version of tools that was used when Basajan was made, but earlier version may
also work fine.

## Create your site

As you already know, Basajan theme is distributed as a
[Hugo Modules](https://gohugo.io/hugo-modules/). So, we only provide
installation guide with this method.  
Of course you can use other methods, but we don't recommend them.

> You can also
[try Basajan]({{< relref "/project/basajan/_index.md#try-basajan" >}}) first
before integrating it with your Hugo site.

### Pre-configured integration

We've created a
[starter template](https://github.com/hapakaien/basajan-hugo-theme-starter) to
make the installation process easier. Basically, this template is a Hugo site
already integrated with the Basajan theme. So you just need to change the
existing content or you can also add your own.

You can start by cloning the starter template repository to your machine.
    
```bash
git clone -b main --depth 1 --single-branch https://github.com/hapakaien/basajan-hugo-theme-starter.git your-site && cd your-site
```

> If you use GitHub, you can also use the
[provided template feature](https://github.com/hapakaien/basajan-hugo-theme-starter/generate).

### Manual

1. Create a Hugo site if you don't already have one.
  
    ```bash
    hugo new site your-site && cd your-site
    ```

2. Add Basajan as a Hugo Modules.

    ```yaml
    module:
      imports:
        - path: "github.com/hapakaien/hugo-themes/basajan"
    ```

## Start development server

If there are no problems, you can start the development server with the
following command.

```bash
hugo server
```

Now you can visit <http://localhost:1313>, and make changes which can be
[configuration]({{< relref "project/basajan/configuration.md" >}}),
[customization]({{< relref "project/basajan/customization-and-content/_index.md" >}}), 
or [adding content]({{< relref "project/basajan/customization-and-content/adding-content.md" >}}).

## Deploy your site

When you are done with your changes, you can build your site with the command
below.

```bash
hugo --minify
```

The next thing you need to do is host your site by deploying the `public` folder
to your favorite [web hosting](https://free-for.dev/#/?id=web-hosting).

If you need a specific guide to hosting a Hugo site, you can read
[the official documentation](https://gohugo.io/hosting-and-deployment/).

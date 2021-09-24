---
title: "Installation"
description: "There are several ways to install the Nyerat theme onto your Hugo site."
weight: 2
date: 2021-09-21T20:29:36+07:00
---

There are several ways to install Nyerat. Some methods also have conditions, which of course will be explained in the methods section later.

## Install Nyerat

If you want to create a new site, it is highly recommended to use a
[starter template]({{< relref "#starter-template" >}}).  
The starter template can actually be used for your existing site, but will
definitely require a lot of customization.

To install this theme on your existing site, you can use
[Hugo Modules]({{< relref "#hugo-modules" >}}),
[Git Submodules]({{< relref "#git-submodules" >}}), or
[Manual]({{< relref "#manual" >}}). For this installation method, we highly
recommend using the Hugo Module.

### Starter Template

This is the easiest way to install Nyerat on a new site. You can visit our
[separate repository](https://github.com/datakrama/nyerat-hugo-theme-starter) to
see how.

### Hugo Modules (Recommended)

[Hugo Modules are powered by Go Modules](https://gohugo.io/hugo-modules/).
Because of this, Hugo Modules is recommended.  
This will make it easier for you to install a specific version of Nyerat and
still be able to update it at any time.

#### Prerequisites

- [**Git**](https://git-scm.com/) - Latest stable version is recommended.
- [**Go**](https://golang.org/) - `v1.16` or higher.

#### Steps for Hugo Modules

1. Initialize a new module.

   ```bash
   hugo mod init github.com/username/first-nyerat-site
   ```

   You can skip this step if you've done it before.

2. Create a `config/_default` folder and fill it with the contents in the
   [starter template](https://github.com/datakrama/nyerat-hugo-theme-starter/tree/main/config/_default).
   Once you've done that, your folder structure should look like this.

   ```bash
    config/
    └── _default
        ├── author.yaml
        ├── config.yaml
        └── menu.yaml
   ```

   If you have a previous configuration file or folder, you must match the new
   configuration with the old one. After that, you can delete the old one.

3. Install Nyerat theme with Hugo module.

   ```bash
   hugo mod get -u
   ```

### Git Submodules

Git Submodules are known to be quite difficult to understand. However, Nyerat
can still be updated like using the Hugo Modules. Git Submodules will use
specific branch instead of versioning.

#### Prerequisite

- [**Git**](https://git-scm.com/) - Latest stable version is recommended.

#### Steps for Git Submodules

1. Add Nyerat as Git Submodules

   ```bash
   git submodule add -b v1 https://github.com/datakrama/nyerat-hugo-theme.git themes/nyerat
   ```

2. Create a `config/_default` folder and fill it with the contents in the
   [starter template](https://github.com/datakrama/nyerat-hugo-theme-starter/tree/main/config/_default).
   Once you've done that, your folder structure should look like this.

   ```bash
   config/
   └── _default
       ├── author.yaml
       ├── config.yaml
       └── menu.yaml
   ```

   If you have a previous configuration file or folder, you must match the new
   configuration with the old one. After that, you can delete the old one.

3. Open the `config/_default/config.yaml` file, and find the following
   configuration line.

   ```yaml
   module:
     imports:
       - path: github.com/datakrama/nyerat-hugo-theme
   ```

   Then replace that configuration with this:

   ```yaml
   theme: "nyerat"
   ```

### Manual

This method should be your last resort if you can't use all the previous
methods. Using manual methods like this, update Nyerat will be difficult.

1. Download the
   [last tagged Nyerat archive](https://github.com/datakrama/nyerat-hugo-theme/tags).
2. Then extract that archive to the `themes/nyerat` folder.
3. Create a `config/_default` folder and fill it with the contents in the
   [starter template](https://github.com/datakrama/nyerat-hugo-theme-starter/tree/main/config/_default).
   Once you've done that, your folder structure should look like this.

   ```bash
   config/
   └── _default
       ├── author.yaml
       ├── config.yaml
       └── menu.yaml
   ```

   If you have a previous configuration file or folder, you must match the new
   configuration with the old one. After that, you can delete the old one.

4. Open the `config/_default/config.yaml` file, and find the following
   configuration line.

   ```yaml
   module:
     imports:
       - path: github.com/datakrama/nyerat-hugo-theme
   ```

   Then replace that configuration with this:

   ```yaml
   theme: "nyerat"
   ```

## Start Nyerat

```bash
hugo server
```

Hugo will now start serving your application on <http://localhost:1313>. You can
start make changes now.

## Build Nyerat

```bash
hugo
```

Your application is now ready in the `public` folder.

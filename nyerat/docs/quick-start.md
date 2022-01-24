---
title: "Quick Start"
description: "The fastest way to be able to use Nyerat for your existing site."
weight: 1
date: 2021-08-22T22:00:00+07:00
---

## Start your site

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

4. Start development server.

   ```bash
   hugo server
   ```

   Hugo will now start serving your application on <http://localhost:1313>. You
   can start make changes now.

## Build site

Once you done with your changes, or just want to know the final build, you can
run this command.

```bash
hugo
```

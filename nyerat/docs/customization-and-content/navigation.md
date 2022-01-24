---
title: "Main navigation"
description: "Add and customize menu in main navigation"
weight: 5
date: 2021-08-25T14:06:00+07:00
---

Nyerat support responsive and dropdown navigation menu. All you need is to add
these settings to `config.yaml`. This is enough for a simple blog.

```yaml
sectionPagesMenu: "main"
```

If you need a dropdown menu, you can also add something like this to your
config.

```yaml
menu:
  main:
    - identifier: pages
      name: Pages
      url: /#
    - identifier: authors
      parent: pages
      name: Authors
      url: /authors
    - identifier: typography
      parent: pages
      name: Typography
      url: /typography
```

This will add `Pages` menu with `Author` and `Typography` as its child.

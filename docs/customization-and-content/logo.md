---
title: "Logos"
description: "Add your logo to header and/or footer."
weight: 6
date: 2021-08-26T10:26:44+07:00
---

Nyerat support logo in header and or footer, just like any other theme.

## Show logo in header and footer

You can do this by filling in the settings in `config.yaml` to be like this.

```yaml
# config.yaml
params:
  logo:
    header: "/img/logo.png"
    footer: "/img/another-logo.png"
```

## Show only site name in header

If you don't want to show your logo in the header or footer, you can change the
settings in `config.yaml` becomes like this.

```yaml
# config.yaml
params:
  logo:
    header: ""
    footer: ""
```

## Reference

| Key                | Value           | Condition | Detail                                                    |
| ------------------ | --------------- | --------- | --------------------------------------------------------- |
| params.logo.header | `""`            |           | Show site name                                            |
| params.logo.header | "/img/logo.png" |           | Show optimized image from `assets/img/logo.png` as a logo |
| params.logo.footer | `""`            |           | Disable logo in footer                                    |
| params.logo.footer | "/img/logo.png" |           | Show optimized image from `assets/img/logo.png` as a logo |

> Remember, images location is always relative to the `assets` folder.  
> Read more about how
> [image processing]({{< relref "/work/hugo-themes/nyerat/docs/basics.md#image" >}})
> works in this theme.

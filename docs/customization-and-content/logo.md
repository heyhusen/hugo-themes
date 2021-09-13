---
title: "Logos"
description: "Add your logo to header and/or footer."
date: 2021-08-26T10:26:44+07:00
---

Nyerat support logo in header and or footer, just like any other theme.

## Show logo in header and footer

You can do this by filling in the settings in `config.yaml` to be like this.

```yaml
# config.yaml
params:
  logo:
    header: "logo.png"
    footer: true
```

This setting will display the logo in the header and footer, with the footer
using the same logo same as the header.

If you want both logos to be different, you can do that too.

```yaml
# config.yaml
params:
  logo:
    header: "logo.png"
    footer: "another-logo.png"
```

## Show only site name in header

If you don't want to show your logo in the header or footer, you can change the
settings in `config.yaml` becomes like this.

```yaml
# config.yaml
params:
  logo:
    header: false
    footer: false
```

## Reference

| Key                | Value      | Condition                               | Detail                                                    |
| ------------------ | ---------- | --------------------------------------- | --------------------------------------------------------- |
| params.logo.header | `true`     |                                         | Show default logo                                         |
| params.logo.header | `false`    |                                         | Show site name                                            |
| params.logo.header | "logo.png" |                                         | Show optimized image from `assets/img/logo.png` as a logo |
| params.logo.footer | `true`     | params.logo.header is `true` or `false` | Show default logo                                         |
| params.logo.footer | `true`     | params.logo.header is "logo.png"        | Show same logo same as header.                            |
| params.logo.footer | `false`    |                                         | Disable logo in footer                                    |
| params.logo.footer | "logo.png" |                                         | Show optimized image from `assets/img/logo.png` as a logo |

> Remember, images location is always relative to the `assets` folder.  
> Read more about how
> [image processing]({{< relref "/work/hugo-themes/nyerat/docs/basics.md#image" >}})
> works in this theme.

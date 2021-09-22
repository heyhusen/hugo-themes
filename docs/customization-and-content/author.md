---
title: "Author"
description: "Add and customize site and/or blog post authors"
weight: 3
date: 2021-08-26T19:26:44+07:00
---

## Main Author

Usually a blog has an author in each post. It doesn't matter if it's single or
multiple author. Nyerat supports both.  
To do so you have to add settings like below in your `config.yaml` file.  
Please fill in according to your preferences.

```yaml
# config.yaml
author:
  name: "John Doe"
  email: john@doe.com
  image: "john-doe.jpeg"
  bio: "Web developer, speed freak."
  widget: false
  social:
    facebook: ""
    github: ""
    gitlab: ""
    instagram: ""
    linkedin: "johndoe"
    twitter: ""
```

Now you can try to create a new post with the below command.

```bash
hugo new post/your-very-awesome-post.md
```

After that, you can check the post you just made. There should be an author's
metadata in front matter like this.

```md
---
authors:
  - John Doe
---
```

Please note, "John Doe" in this case is the main author as well as the sole
author. Every new post created will make him the author. If you want a different
author than the main author, you can change the author's name on the front
matter to someone else.  
For example "Jane Doe".

```md
---
authors:
  - Jane Doe
---
```

## Sidebar Widget

Nyerat can also show the main author in the sidebar widget.  
Change the author settings to something like this.

```yaml
# config,yaml
author:
  widget: true
```

## Multiple Blog Post Author

If there is more than one author in your post, you can easily add their name to
the front matter in related post.

```md
---
authors:
  - John Doe
  - Jane Doe
---
```

With the above settings, it means that "John Doe" and "Jane Doe" are the authors
of the related article.

## Metadata

It is common for writers to want to include profile details in their articles.
For example, profile photos and links to social media accounts.

For example to add profile details for "Jane Doe", you can use below command.

```bash
hugo new authors/jane-done/_index.html
```

Just like the settings for the main author, the contents of the settings will
also be more or less like this.

```md
---
name: Jane Doe
email: "jane@doe.com"
image: ""
social:
  facebook: ""
  github: ""
  gitlab: ""
  instagram: ""
  linkedin: ""
  twitter: "janedoe"
---
```

> The author settings in front matter only apply to other than the main author.
> The settings for the main author will always be taken from your `config.yaml`
> file.

### Photo Profile

As you can see, there is an `image` field in the author settings. If this field
is filled, this image will be your profile photo. Otherwise, your photo will
still be displayed under certain conditions.  
Nyerat will display profile photo with the following order conditions.

1. Optimized photo from filled `image` field.
2. [Gravatar](https://gravatar.com "Gravatar") photo from filled `email` field.
3. A custom image contains the initials of the author's name.

## Warning

The `name` field in author settings is very important here. If you make a typo,
the author featured by this theme will be a different person. So, be careful.

---
title: "Contact Form"
description: "Provide the easiest way for visitors to contact you by providing a direct contact form on your site."
weight: 8
date: 2021-09-22T13:18:57+07:00
---

Contact forms are very important for some websites. This is the best way you can
give to your site visitors to contact you. Nyerat also gives you the easiest way
to do this. Every message in the contact form will be directly sent to your
email by [staticforms.xyz](https://www.staticforms.xyz/).

To show the contact form on your site, you can do the following steps.

1. Create an access key for the destination email at
   <https://www.staticforms.xyz>. All messages from the contact form will be
   sent to that email address.
2. Add the access key you created earlier to your configuration.

   ```yaml
   params:
     staticFormsAccessKey: "your-static-forms-access-key"
   ```

That's it. Now, your contact form appears. You can immediately try to test it.

## Customization

If you notice, on the contact page there is some dummy text created by this
theme. You can replace it with more appropriate text, or even delete it.  
All you need to do is create a "contact" section page.

```bash
hugo new contact/_index.md
```

Then, write a few sentences for the content.

```md
---
title: "Contact"
draft: false
---

You may be more comfortable using another method to contact me.
```

> Do not make this page as a draft, if you still want to show the contact page.

The email and some social media that appear are from your main author data. You
can customize it in the
[author settings section]({{< relref "/work/hugo-themes/nyerat/docs/customization-and-content/author.md#main-author" >}}).

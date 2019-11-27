---
title: How to Use Your Custom Domain with Your Site on Netlify
date: 2019-11-27T02:47:46.831Z
excerpt: >-
  Follow through this tutorial to use your custom domain with your site hosted
  on Netlify.
tags: ["tutorial","beginner","how-to", "netlify"]
template: post
---
# Purchase Your Domain
If you don't already own your domain, purchase one. Personally, I prefer https://domains.google.com.

# Manage DNS CNAME Record
1. Within Netlify, go to the site you want to add a custom domain to.

1. Click the `Domain Settings` button.

1. Under the `Custom Domains` section, click on `Add domain alias` button.

1. Type in your domain as `www.yourdomain.com` and click the `Save` button.

1. Your new domain should now be listed in the `Custom Domains` section, but you will see that next to it is a warning sign with the text `Check DNS Configuration`. Click on that text.

1. A `DNS Configuration` window pops up telling you to point the `www CNAME` record to Netlify. 

1. Go to where you purchased your domain and find a way to manage the `DNS` settings. If it's in Google Domains, then go to domains.google.com and go to their `DNS` settings via the menu on the left.

1. Near the bottom of the page, under the `Custom resource records`, scan it to see if there is any existing `CNAME` entries. If so, either update that or delete it.

1. Add a new `CNAME` entry with the following values:
   1. Name: `www`
   1. Type: `CNAME`
   1. TTL: `1H`
   1. Value: `the-value-netlify-gave-you.netlify.com`

DNS records can take up to 48 hours to propagate. So check again in about a day in the same `Custom Domains` section and see if the text next to your custom domain has changed to something around `Check nameservers`.

# Update Name Servers
1. Click the text and Netlify will show you domains to use as nameservers.

1. Go back to where you purchased your domain and again, go to the `DNS` management settings. Within domains.google.com, we go to `DNS` settings and then the `Name servers` section.

1. For domains.google.com, we click on `Use custom name servers`, add each domain that Netlify gave us (example is ns2.netlify.com), and click the Save button.

Since this is a DNS change, it can take up to 48 hours to propagate. So we play the waiting game again. Check again in about a day or so. When everything is working right, the `Netlify DNS` text will show up next to your custom domain.

# SSL
**BONUS:** Netlify automatically gives you a free SSL certificate even with a custom domain. This allows users to access your site via `https` and keeps browsers from throwing users a warning around your site not being secure. 

You can check this by going to the `SSL/TLS certificate` section. It may take about a day again for this after you complete the name servers setup.

# And You're Done!

Now, you've got your custom domain on your site. Yay!

![Yay](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

Low Risk Legacy System Modernization Strategies Using Toggles

Over the years, old code gets harder to maintain, and we start missing out on new capabilities and features from new technology. But, resources are usually limited, and we don't usually get around to doing these upgrades. How do we convert an app, like WebForms, to an MVC app on a limited budget and shippable increments without major issues?

--Old run down House Pic--
So we want to modernize a legacy system?

Has old tech, has technical debt, hard to maintain.

-- brand new house --

here's our shiny new system we really want to get eto.

Latest technologies and capabilities!
Easier to maintain!
Minimal tech debt!

How?

So how do we usually do this?
Create a new branch.
Develop.
Probably for several months.
Test.
Release. Finally!

Challenges

But there are challenges with this.

* There are, what I call, "Rabbit holes" of forgotten functionalities. "How did this work?" "Is there any documentation on this?"
* Other functionalities get broken even if you did not touch them.
* The length of time it takes to get this completely done.
* The "Big bang" when it's time to go to production. Crossing fingers. "Hope this works."
* Since it's such a huge change, if there are critical issues and you'd have to undo your change, what then? Hopefully you can undo it within minutes. But realistically, it would probably take hours.

---Slide 8---

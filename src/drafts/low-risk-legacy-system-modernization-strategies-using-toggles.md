# Low Risk Legacy System Modernization Strategies Using Toggles

Over the years, old code gets harder to maintain, and we start missing out on new capabilities and features from new technology. But, resources are usually limited, and we don't usually get around to doing these upgrades. How do we convert an app, like WebForms, to an MVC app on a limited budget and shippable increments without major issues?

--Old run down House Pic--
So we want to modernize a legacy system?

Has old tech, has technical debt, hard to maintain.

-- brand new house --

here's our shiny new system we really want to get eto.

Latest technologies and capabilities!
Easier to maintain!
Minimal tech debt!

# How?

So how do we usually do this?
Create a new branch.
Develop.
Probably for several months.
Test.
Release. Finally!

# Challenges

But there are challenges with this.

* There are, what I call, "Rabbit holes" of forgotten functionalities. "How did this work?" "Is there any documentation on this?"
* Other functionalities get broken even if you did not touch them.
* The length of time it takes to get this completely done.
* The "Big bang" when it's time to go to production. Crossing fingers. "Hope this works."
* Since it's such a huge change, if there are critical issues and you'd have to undo your change, what then? Hopefully you can undo it within minutes. But realistically, it would probably take hours.

# Agenda

In this talk, we'll talk through:
* The 4 main challenges (problems) I've noticed with these types of changes.
* The 5 strategies I've encountered that helps addresses these challenges.
* We'll then walk through the 5 steps to apply these strategies.
* And finally, we'll wrap it up with a recap.

1. 4 Main Challenges (PRoblems)
1. 5 STrategies (Solutions)
1. 5 Steps (Apply)
1. Recap

# Hello

Hi! I'm Cristina Ruth and I'm a Senior Business Systems Consultant at CUNA Mutual Group.

I am responsible for ensuring our self-service website for our customers stays up and running, keep it maintained and work with our business customers on making updtaes to deliver improved value to our customers.

1 website on the surface, but really comprised of 40 total "apps". Each one with their own CI/CD pipeline, release pipelines, etc.

19 Websites
7 APIs
8 Batch Jobs
6 Misc

# 4 Main Challenges
When we're making huge changes like these, I've noticed that there are really 4 main challenges that we encounter.

## 1. Change Size

Bigger changes = bigger risk / bigger bang
rollback capability is limited.
Confidence level of change success diminishes.

## 2. User Impact

Breaking changes = high impact

Ideally, we would want no impact, or very minimal interruptions, if it cannot be avoided.

## 3. Resources

Trio = Time, PEople, Money

Usually limited. if only you are the only one available to do the upgrade, it will take you months to completely finish the work.

Tech upgrades are also uusally difficult to attach to a business value, and therefore, don't usually get the needed funding to get completed.

## 4. Technical Debt

Tightly coupled logic.
Hard to test code.
Hard to update -- things break when you do.

# ANY Major Changes

These challenges are not presnt only when you're switching technologies.

They apply to ANY major changes you make.
These problems apply to any major changes you do to your code.
Switching infrastructure (database switching, API/service version upgrades).
Code rewrites.
Major functionality updates.
Dependency version upgrades.
Major new functionality with new infrastructure pieces (services, database changes, etc).

# 5 Strategies

So how can we have an easier time addressing these challenges? What strategies can we use to help us mitigate these risks?

We'll talk through 5 strategies we use today in our team, and we'll go over each one of them.

They are:
* Backwards-compatibility
* Toggles
* Small Chunks
* Greenfield
* Revisit Requirements

| Strategy | Change Size | User Impact | Resources | Tech Debt
|:---:|:---:|:---:|:---:|:---:
|Backwards-Compatibility|
|Toggles|
|Small Chunks|
|Greenfield|
|Revisit Requirements|


# STrategy 1. Backwards-Compatibility

Support OLD AND New ( for some time)

The concept of avoiding breaking changes for users who use your application, despite the code changes you made that introduced a "new" way of doing things.

Sometimes, the "new" way is not user-facing, but just in how the "engine" under the hood works. For example, you are changing the schema of your database behind your application. You wouldn't want to delete a column because any applications who use that column will then start breaking.

This also helps should we need to backout our change.

## Retirement Timeline

Let's take a look at an example. An API/web service just released a new major version.

What if they told you they're releasing next month and that your application will stop working if you stay on the old version? Wouldn't fly.

With this strategy, the developers would have a retirement timeline wherein:
* Support both the new and old way.
* Give users time to shift to the "new".
* Retire "old" after some time.
* Control versions via input or parameters or pathing.

|Timeline|Older Version Support | New Version Support|
|:---:|:---:|:---:
|Release | Yes, throw warnings | Yes
| Release + ~6 months | No, throw errors | Yes

## Gotchas

Consider your application's users and the impact of this on them, and the effort it could take for them to shift to your new version.

Or, if no actions is required on them, just make sure your changes will still support the older version (i.e. the new database schema need to be compatible with both code version)

But also, take note that the duality of Old + New = technical debt. Ensure to retire it to prevent future confusion, and for easier maintainability.

* User communication is KEY.
* Give users ample time to switch.
* Ensure to retire old.
* Duality.

## Challenges Addressed

With backwards-compatibility, we ensure that impact on our users is minimal, if any. No breaking changes since that results in unhappy users, and probably unhappy bosses/colleagues.

If user action is required, we need to give them time to shift, but not too long because during that time, we are in a duality and we'd like to shift away from the duality as soon as we can.

|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |

Older functionality support = zero/minimal impact

# Strategy 2 - Toggles

To clarify, toggling is turning things on or off. 

Heard of feature toggles? Same concept, basically.

## Why Toggle?

* Reduced risks
  * Allows increments
  * Allows easier rollbacks.
* Release early to production and test early.


Reduce risk.
Allows increments. Deploy small changes as "off". Turn "on" to test and turn it off again. 
Allows rollbacks. Turn off if critical bugs are found.
Release early to production, and turn on specific date with high confidence that it WORKS.

## Toggle Management Storage Options
* Configuration Files
* Database
* Configuration System i.e. CMS
* Infrastructure / Network

To effectively toggle, you'd need a system/spot to store/read them.

Some options:
* Config files (CI/CD)
  * tokenize and use release variables to control the toggle state. downside: deployment = downtime unless you have a blue/green deployment pattern.
* Database
  * Tables
  
It depends on your change, but typically, the ones above that do not require a code deploy are prefered. Code Deploys = App Restarts = Blips for your users. Unless you have an amazing deployment system wherein your code deploys don't cause your app to "blip". :)

## Slide 26 Toggle Types

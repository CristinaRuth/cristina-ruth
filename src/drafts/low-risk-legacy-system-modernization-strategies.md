# Low-Risk Legacy System Modernization Strategies

--Cover image in Canva--

## Problems of Legacy Systems 

Legacy systems can present a lot of problems in our organizations.

* **Difficult to maintain.** They contain a lot of technical debt, and are highly susceptible to bugs when features are updated.

* **Significantly slows speed-to-market.** Due to the amount of technical debt, they can require a lot of effort to update because bugs easily pop up when they're updated or they require a lot of effort to test when updated because of a lack of automated tests.

* **Outdated capabilities.** They are built on older technologies, and therefore, outdated capabilities. This also impacts our business operations because they can't effectively market/do sales without access to the later technologies.

## Legacy System Modernization 

Modernizing legacy systems will give them the latest technologies and if adequate resources are invested into the system, then the technical debt can be solved as well.

But it's easier said than done. Modernization efforts take a lot of effort and resources, especially if they are **core** systems that the enterprise relies on.

No matter if they are core systems or not, doing them **safely and low-risk** is *very important* to avoid disruptions to our business operations.

## Post Overview
This post will walk you through:

1. The usual *Big Bang* approach and its challenges.

1. The 4 main challenges of modernizing systems.

1. How these challenges exist for *any* major change, not exclusively on legacy system modernization.

1. The 5 strategies to address these 4 challenges.

1. The 5 steps to apply the 5 strategies.

1. A recap of the 4 challenges, 5 strategies and 5 steps.


## The "Big Bang" Approach and the Problems It Causes

The usual *big bang* approach takes the entire system, transforms it, and release it all live in **one** go.

There are **major problems** this approach causes:

* **Long Time to Complete.** Because the *scope* is so large, it takes a very long time to get *everything* completely done.

* **Uncertainty.** Everything goes live in *one* go and we therefore cross our fingers hoping everything goes okay.

* **Roll-Back Challenges.** Large changes like this present challenges in *backing out*. If there are critical issues found when going live, it's much harder to back out, and the *time* to back out will likely take a lot longer.

* **High Risk.** Because of the uncertainty and rollback capabilities of such a huge change, this approach is very high risk.


## 4 Main Challenges When Modernizing Systems
Having worked on legacy systems, I've noticed that there are really 4 main challenges in updating them.

1. **Change Size.** The bigger the change is, the bigger the risk, the bigger the "bang", and  our confidence level of success diminishes. 

1. **User Impact.** When we make such large changes, we can introduce breaking changes that we don't foresee. These are high impact to our end users and disrupt our business operations.

1. **Resources.** It is usually difficult to get our business partners to see the value of modernizing legacy systems, so these are usually executed with very limited resources (time, people, money). With limited resources, the length of time is way higher compared to when the effort is supported by funds from our business partners.

1. **Technical Debt.** Because of the existing technical debt, it's hard to update the system without things breaking or without a tremendous amount of effort to test changes.


## Challenges Apply to ANY Major Changes

These challenges not only apply when trying to modernize the legacy systems, but also apply to **any** major changes you make to the systems.

Some examples are:

* Switching infrastructure (databases, API/service version upgrades).

* Refactoring.

* Major functionality updates (update an existing feature drastically)

* Dependency version upgrades (plugin major version upgrades)

* Major new functionality with new infrastructure pieces (APIs, database schema changes, etc)


## 5 Strategies

Over time, I've identified and used 5 strategies to help mitigate the risks around the mentioned 4 challenges. 

They are:

* Backwards-compatibility

* Toggles

* Small Chunks

* Greenfield

* Revisit Requirements

As we cover each one in detail, we'll fill this table out on how each strategy helps address 1 or more challenges.

| Strategy | Change Size | User Impact | Resources | Tech Debt
|:---:|:---:|:---:|:---:|:---:
|Backwards-Compatibility|
|Toggles|
|Small Chunks|
|Greenfield|
|Revisit Requirements|


### Strategy 1. Backwards-Compatibility

This is the concept of avoiding breaking changes for our end users, as much as possible.

We want to support both the old way **and** the new way, as much as possible. For some time. 

For example, if 

---

We want to avoid breaking changes for our end users

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

## Toggle Types

We've heard of the feature toggles, but I've used many non feature-toggle types, and they grow in size and also in complexity.

* Function - toggle a function
* Component - toggle a component
* Dependency - toggle a dependency, like a web service, or database
* Server - toggle a server via network

## Toggle Gotchas

Toggles give us many benefits but they come at a cost. Similar to backwards-compatibility, we have a duality present, and with duality comes technical debt because there is no "one" source.

I think of them as "Branchs", but these branches co-exist in master, but the branch management/overhead still applies. Any updates to the functionality I have to make sure both toggles get.

Also, once the change is done and stable, there would be no more use for the goggle. They need cleanup as well. Remove the toggle, remove the old code. Not doing so will cause future confusion of which one is right and also give your code "bloat" of unused code being in there.

Try to use them only as needed -- recommended for major changes/risks.

* Duality = "Technical Debt" 
* Toggles = "Branches" in Master
   * overhead/management
* Unused Toggles = Technical Debt
* Use as Needed

## More Toggle Types
 
| Toggle Type | Impact
|:---:|:---:
|Global | Everyone
|Phased | Controlled set of users


So we can toggle a function, dependency, server, etc.

But there's another "layer" of toggles we can apply to each of these. A global toggle is where the toggle is available to everyone once turned on. A phased toggle is controlling the impact of the toggle to a specific set of users.

Use phased toggles for very, very major changes wherein you would ideally like to test it on a subset of users. If you have thousands of users, and you are not sure a functionality would be well-accepted, a phased toggle could be a way to introduce it slowly and test and learn from. Increase the impact size over time until the decision is made to release to all users.

## Which toggle to use?

> Smallest and simplest one that meets your needs.

Larger toggles = Increased complexity

We talkd through the gotchase of toggles.

The larger the toggle (function vs server) means increased complexity. Larger toggles = more code "Duplicated", and the more code to manage (and maintain - they would both need updates) while you have that toggle present.

Keep it simple, the simplest one that meets your needs.

## Toggle On, Toggle Off...

Does your system work on both?

With toggles, we have a duality present so we need to ensure that we test both cases where the toggle is on and off. The benefit this gives us is higher confidence level should we need to back out, but if we don't test the "off" version, then that confidence level goes away.

## Always ASk

> Will these changes "break" existing functionality even when the toggle is off?

Toggles work best with backwards-compatibility in mind. Always asking how the changes would be if the toggle is off AND testing it will help ensure your application runs as smoothly as possible.

## Challenges Addressed

|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |
|Toggles|Y|Y|

Increments = Deploy + Test Non-Releasable Code

Critical Bugs  = Tuyrn "off" to roll back

Toggles enable us to deploy and test in small chunks and therefore in increments, because we are able to turn things off until we are ready to "go".

Toggles also help us mitigate critical bugs, and we can sleep easier knowing that all we need to do is toggle the thing "off" should we run into major issues. Our business customers/stakeholders feel better als, and we'll gain a higher confidence-level from them.

# Strategy #3 - Small Chunks

With toggles, we were able to deploy small chunks of code and keep them toggled off ntil they are fully ready to be "released".

Similarly, we can chunk out our work in smaller chunks to enable us to "release" portions of our code faster and with lower risk since we're releasing smaller pieces.

## Ways To chunk

* "Vertical" slices (i.e. features)
   * Then dependencies
* "Big" functionalites

Chunking is hard and I still struggle with it, but it helps to look at vertical slices first. Think features or functionalities. Once you've identified one, then think through the dependencies (database, API/web service, etc) it needs. These would be your "chunks". Ask "What do we need to have done before this feature works?"

Another thing is that you may be looking at a functionality. But it's really a BIG one. It may be worth re-looking at and ask if it really can be comprised of chunks.

A recent example of this is we were implementing a multi factor authentication feature into our site. We had to update the login form and provide a way for users to sign up for factors and maintain them after. "What needs to come first?" helps identity the chunks here. The chunks are then 1. the login form 2. the sign up for factors and 3. maintenance. Without the login form , the sign up for factors would not have any way of being "presented" to the user. Without the signup, there would be no maintenance. So we split these into 3 chunks. Each one is a mjaor chunk by itself.

In addition to the smaller pieces, releasing in small chunks also help when resources are limited because the amount of work (scope) to be done is smaller.

Chunking also reduces the duality faster since the "ready" pieces can be cleaned up shortly thereafter.

## Challenges Addressed

|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |
|Toggles|Y|Y|
|Small Chunks|Y | | Y|

Small chunks reduce change size and lowers risk at release time.

When resources are limited, smaller chunks are easier to complete.

With chunks, we help reduce change size and thus, lowers our risk at release time. It also helps keep the team morale higher because things are getting "done".

# STrategy 4 - Greenfield on Legacy

I've personally struggled trying to make major changes to a codebase that has so much technical debt.

This is a strategy I recently discovered, and it's basically another type of "toggle" but on a project level, where the old code full of technical debt is physically separated from a new project that, hopefully, will have zero to little technical debt.

CAn utilize editor add-ons to automatically enforce rules that new code will never reference the old code, but old code can reference the new code.

It's great because it allows more "greenfield" feel. Use with toggling and small chunk strategies to make it even more effective!

## Avoiding Future TEchnical Debt

* dependency injection
* interfaces and mocking
* unit tests
* documentation

> Crawl first. Run later. Invest in the future.

As we build our new "greenfield" code on top of our legacy systems, it is optimal to avoid any technical debt as much as possible.

Otherwise, future maintainers of our "Greenfield" code will run into the same issues we are now and we don't want them to hunt us down, do we? :)

This topic is massive and could be a full session itself (or multiples even) but here are a few key things to keep that technical debt from piling up.

Dependency injection extracts dependencies as paramters passed to the constructor, so an object does not instantiate any other objects it's depedent on.

Interfaces define an object's properties and methods and allows objects to be mocked (fake duplicate) via a mocking framework i.e. Moq.

With dependency injection, interfaces and mocking present, unit tests are easy to write. Unit tests can act as guardrails and automated checks and are self-documenting. A future developer who does not know the codebase can trip these up and there's no prior "documentation" that needs to be read that they probably won't even remember anyway.

And lastly, documentation. I KNOW! It's not fun, but think about those rabbit holes you had to dig through and scratching your head on why something was written the way it was. I'm not saying document everything. There is a balance. Try to capture key decision points to help capture reasonisngs on why that route was taken.


## Challenges Addressed

|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |
|Toggles|Y|Y|
|Small Chunks|Y | | Y|
|Greenfield ||||Y

When technical debt is present, and lots of it, it may help to use the greenfield strategy to help bring that "New" feel back into the project and removing limitations that existing technical debt may bring.

# STrategy 5 - Revisit Requirements

As we work through our small chunks or components or features, or as we dive down the rabbit hole of "Why does this work like this?", it may be worth the effort to revisit the requirements and see if that functionality is still needed.

Business rules/processes may have changed. Engage with your business users ( or your co-workers) to get the question "Do we still need this?" answered.

Similar to "small chunks", this helps reduce scopea nd therefore, can result in less work that needs to be done, and even better, the work can be done in a faster timeline.


## Challenges Addressed

|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |
|Toggles|Y|Y|
|Small Chunks|Y | | Y|
|Greenfield ||||Y
| Revisit Requirements|Y||Y|

"IS this still needeD?" can help reduce the scope of the work.

Revisiting requirements can help reduce the amount of work that needs to be done, and therefore reduce the change size. Also helps when resources are limited because the team would have a lighter workload on their shoulders.

# Putting It All Together

With these 5 strategies in mind, let's put it all together and try to apply it in an example scenario.

## What Would You Do?

Let's take a website that has a modular architecture, runs on a content management system, and is on WebForms technology.

WE want to upgrade to MVC because that will give our system access to better capabilites that our business customers would like to use.

But how do we do it safely, and with zero to minimal impact to our users and release something every sprint?

Think about it for a couple of seconds and we'll talk through how we could apply the strategies we just discussed on getting this converted to MVC.


## Step 1. Analyze Challenges

Step 1. Analyze the challenges. Which challenges are we faced with on this task? Change Size? User Impact? Resources? TEchnical DEbt?

We have all 4.

WE have 40+ components to tackle. (big change)

These components have technical debt. It's hard to update the code without breaking something else.

WE have thousands of users and would need zero to minimal impact on them.

We have limited people to get this done, but can take as long as we want.

## Step 2. Choose a Strategy (or more)

5 Strategies
|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |
|Toggles|Y|Y|
|Small Chunks|Y | | Y|
|Greenfield ||||Y
| Revisit Requirements|Y||Y|

We have all 4 challenges so we'll use all 5 strategies combined.

We will focus our small chunks on components, and re-assess the requirements for each. We'll then use a toggle to "release" the new component version.

We'll also store the new code in a new project to physically separate the old code from the new low-technical-debt code.

## Step 3- Identify Chunks

With toggles, we have dualities in place but is there another duality we could do? Could we have a "hybrid" where MVC components co-live with WebForms components on a page? From research, yes, we can, so our small chunks are:

* Enable "hybrid" on platform.
* Create a new MVC project. (Greenfield)

Next, we want to vertical slice, so we try to find the most important component. We consult with our business customers, and identfy component A. WE then ask what foundational pieces does this component need? Which pieces need to be in place first before this piece is considered complete? User information, web service/API integration, database integration? These are our next small chunks, along with the toggling and cleanup.

* Integrate with Web Service A.
* Convert Component A to MVC.
* Ensure Component A has unit tests. (or do this with above bullet point via test driven development (TDD))
* Swap Component A WebForms with Component A MVC.
* Mark component A WebForms Deprecated. (backwards-compatibility)
* Retire Component A WebForms when Component A MVC is stable for 1-2 sprints.

## Step 4 - Execute and RElease

Execute and release our identified small chunks.

WE are trying to avoid a "big bang." We've identified and planned some work, all of them can go live by themselves because we have a toggle in place to be turned on only when the component is read. And becaues we are vertical slicing, we CAN release the component when all the chunks are ready.

So let's stop planning, and start executing and release the component when ready! If each chunk turns out bigger, chunk them out further. Develop. Test. Release.

Again, we are empowered with the toggle because we can easily turn it off after a release if major bugs are found.

## Step 5 - Rinse and Repeat

Keep identifying vertical slices and their chunks and executing and releasing until the conversion is complete.

As you do this, remember your previously completed vertical slices and try to clean up their toggles and old code too!

You may need to do a final cleanup once this is all done to ensure no old code is lingering around.

## Progress

-- Graphic here of new code in and old code out--

As we execute and release and keep iterating through our steps, and releasing something every sprint, new code will accumulate in production and the old code will be retired.

We, of course will have extra to manage because of the dualities, but what we get in return is safer, higher-confidence, smaller release.

During the upgrade, our codebase, because of the duality, will have a "technical debt" with the toggles. Which is why it's important to keep things as small as possible and take the toggles out as soon as you can.

# Recap

So we've talkd about a lot of things. Let's recap what we've covered.

## 4 Challenges

When switching technologies or making any major changes, the 4 challenges are:
1. Size
1. User Impact
1. Resources
1. Technical Debt

The bigger the size of the change, the more complexity, the bigger the risk, the bigger the "bang", the more unreliable your "backout" plan is, and your confidence level of a successful change diminishes.

Any changes we make we do not want to break anything for our users, or very minimal interruptions if unavoidable.

Resources are sometimes limited, whether it's time, people money or all.

Technical debt exists. Code breaks when changes are made. Hard to test. Scary to even touch!

## 5 Strategies

|Strategy|Change Size | User Impact | Resoruces | Technical Debt|
|:---:|:---:|:---:|:---:|:---:
|Backwards-compatiblity | | Y |
|Toggles|Y|Y|
|Small Chunks|Y | | Y|
|Greenfield ||||Y
| Revisit Requirements|Y||Y|

To help address these 4 challenges, we're armed with 5 strategies.

* Backwards compatibility is ensuring nothing breaks for the user with your change, and if you are releasing a new version, that the old version is still supported, at least for some time, before you deprecate it. This also makes your backout plan easier should you need to undo your changes. We'll have a duality for a while here but with the benefit that users are happy with us. We just need to ensure that we cleanup this duality in a reasonable amount of time.

* Toggles allow us to turn things on or off and can be applied to many different scales. From small things like functions or even just variables, to large scale like an entire server. There are also global vs phased toggles to help "phrase" things / enable your business customers to pilot changes to selected users. One of our favorite usages is to release all the necessary changes early, toggle it on to test, and then turn it off again, until the "real" release date. But we need to be careful using this because they requirement management, and also needs to be cleaned up when they aren't needed anymore.

* Small chunks allow us to release smaller changes. Think dependencies or infrastructure pieces. Or, even chunking out the functionality to keep the change small. Keeping these small helps when you have limited resources so the scope is smaller and lower risk. Use with toggles to release smaller "pieces of the pie" to production without having to worry about releasing something that's "not ready" to users.

* Greenfield helps address existing technical debt by creating a physical separation between the old code and the new code. Hopefully, the new code will have zero to minimal technical debt :)

* Revisit requirements helps reduce the total size/scope and can even help save some work from having to be done. Especially useful when resources are limited.

## 5 Steps

1. Analyze challenges
1. Choose a strategy (or more)
1. Identify chunks
1. Execute and release
1. Rinse and repeat

So when making major changes, we then apply our 5 steps.

* Ask which challenges are present.
* From those challenges, choose a strategy or more.
* Identify a few small chunks to help you get started.
* Execute and release those small chunks.
* REpeat steps 3 & 4 until you are done! Ensure to cleanup :)

# Thanks

Special thanks to the following folsk for helping review my talk content and providing candid feedback:
* PJ McGinley
* Tim Tumbleson
* Jason McGee
* Claire Gehling

And finally, special thanks to my team members and other CUNA Mutual Group folks who attended my dry run session!

Illustrations by Undraw.co




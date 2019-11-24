---
title: 3 Valuable Concepts Learned Early in My Dev Career
date: 2019-11-24T22:11:57.088Z
excerpt: >-
  If you're starting out, learn these 3 things to give you a jump start in your
  dev career.
template: post
---
### 1 - Source Control

Source control is a way to capture and track changes _(control)_ to your code _(source)_.

Source control is **essential** in a professional environment. It allows developers to work with each other and ensure their changes do not conflict with each other. It also keeps track of each code change as a _version_ and it is a must have to keep the developers' sanity with multiple environments (point #2 below).

Git is a source control system, and GitHub is an online platform that uses Git for source control. 

Source control also enables branching, wherein you make a copy of your stable code (typically termed *master* branch) and make updates to that copy without impacting your stable code. This is an important concept because developers can then work on their own copies of the code without impacting each other's work. 

### 2 - Environments

In addition to source control, we had multiple environments we would deploy code to. Environments are a set of servers and/or apps to which you deploy code to and run your app in.

What are the environments for? **Stability.**

In a professional work environment, there is usually ongoing development effort most of the time. And code changes = instability. You can't know for sure that a code change didn't break anything. _(Tests are ways to increase the confidence level that nothing's broken, but that's a more advanced and larger topic and to keep things simple, I'm intentionally not expanding on that in this post.)_

So in my team's case, we had 3 environments:
1. **Development**. This environment, we could always deploy to, no problems. If things get broken from our code changes, it's not a huge deal.

2. **Demo**. This environment we like to keep stable. This is where we do our testing to ensure that our code changes are ready and stable to go to production. To keep this environment stable, we only deploy changes that are already working and tested on development.

3. **Production**. This environment is what the end users of our system use. Any deployments to production would be made available to our end users. _(Some exceptions apply, if feature flags are used, for example. But that's a more advanced topic and will not be covered in this post for simplicity.)_

Environments work best if you have a source control system in place, because you could deploy a specific _version_ to an environment.

For example:

1. **Development** has *version c*.
2. **Demo** has *version b*.
3. **Production** has *version a*.

So, when we know for sure that *version b* is ready and stable, we then deploy that version to **Production**, making the environments have the versions as follows:

1. **Development** has *version c*.
2. **Demo** has *version b*.
3. **Production** has *version b*.

So far, the environments I've listed are all **remote servers.** 

But there is also your ***local*** environment. This environment is unique, because it is isolated to only your computer. You change the code, and "deploy" it to your local file system. 

It won't be isolated any more though once you push your code changes to the remote repo (i.e. GitHub), and then get those changes merged to `master`. The changes in `master` are then deployed to **Development**.

So now, the environments would have the following versions:
1. **Development** has *version d* (your changes).
2. **Demo** has *version b*.
3. **Production** has *version b*.

We could then move *version d* over to **Demo** as soon as we are sure that its quality is acceptable.

As mentioned above, the main purpose for having multiple environments is for stability. This is done by *segregating* each environment from the other. Doing this ensures stability, but it also comes with a **cost** - extra overhead, additional costs, and environment management.

### 3 - Collaboration 

In a professional environment, work is *larger* in scale compared to when you're working on personal projects, wherein you are the only developer. This means that there are at least 2 developers working to complete the work.

The code you work on in a professional environment is also usually *larger* than a personal project. This then requires **domain knowledge** to know the ins and outs of how that system works and all its various functionalities.

Collaboration, then, becomes really important because in order to make changes to  the project, you'd:

* Have to work with another developer to make sure the changes you're making does not impact his/her changes, and vice versa. This would require consistent communication lines between both of you, and can even require testing your changes together should you touch the same piece of functionality.

* Have to work with the developer with the **domain knowledge** to understand the ins and outs of the system related to the changes you need to make.

* Have to work with a *senior* developer, if available, to understand *how* to implement the changes you need to make. Sometimes, the work is too complex for a less experienced dev, that it requires a senior developer to design the solution, and provide simple and easy to understand chunks to less experienced developers.

The ability to be able to work with people well is a **crucial** skill to have in any career, no matter what level you are at, experienced or not. We all have to work with people, and if you are able to do so exceptionally well, you'll find yourself getting promoted *way* faster than if you didn't.

_Developer 1_ with medium technical skills but great communication and collaboration skills will get work accomplished faster because communication flow is *easy* between him/her and other team members. 

_Developer 2_ with high technical skills but low communication and collaboration skills will, on the other hand, could result in slower time to get work accomplished because misunderstandings can happen. Worse, team morale and team trust can also be impacted, and thus, impacting the *entire team*'s productivity.


### Learn These Concepts

If you're just starting out, you can learn and practice these concepts *before* you get your first dev job! Learning these now would improve your marketability to employers because it would take a shorter time to get you working on their codebase.

#### 1. Source Control

There are lots of resources out there, but [this free workshop](https://github.com/CristinaRuth/dev-together-madison/tree/master/Learn/Workshops/Basics/GitHub) covers the basics - source control basics, git basic terms, github basics, branching, and forking. 

#### 2. Environments

One way can get familiar with and practice code and version management on multiple environments is with [zeit.co](https://zeit.co). Once you link up a github repo, the `master` branch will be setup as **production** while branches will be labeled as `latest` or `staging`. **Staging** is another term for an environment similar to **demo** as described above.

#### 3. Collaboration

To improve your collaboration skills, find another dev to work with on a repo/project. 
* **Online/virtual** collaboration would give you experience on handling the defined scenarios above. Working on/contributing to an open source project could be one way you could get this done.
* **In-person** collaboration would give you experience in reading *non-verbal* communication (tone and body language). See if you can find another local dev to work with through meetup groups/school. If you're in school and you have to do group work, embrace those! They are *hard* but they give you invaluable experience on working with various kinds of people.

### Wrapping It Up

* Knowing **source control** and **environments** will set you apart from other new developers. 
* Having **collaboration skills** will make you desirable in *any* industry.

I hope this article has helped you and I wish you all the best if you're aiming for that first dev job!

And please remember:

> Learn, practice, and make mistakes.

> Don't be afraid to fail. 

> Failures are your steps to success.


---
title: 11 Things to Consider for More Accurate Developer Estimates
date: 2019-12-23T15:10:57.088Z
excerpt: >-
  Developing solutions not only includes development time, but analysis, communication, testing and stabilization. The larger the change size, the higher the complexity and the more difficult it is to estimate. Therefore, the more detailed we can be when doing our estimates, the better our estimates will become.
tags: ["tech", "career", "consulting", "estimates"]
id: 10
display_weight: 5
template: post
---

If you've been asked to do an estimate before, you'd agree it's easier said than done.

The bigger the scope (how much to be done), the harder it is to estimate because the complexity increases and therefore, the ambiguity and unknowns increase, and the more room there are for bugs, mistakes and miscommunication.

## Types of Estimates

1. **High-Level**. At this point, our business partners/clients just want to understand the total effort required for something they are *considering* doing. They want a *gut* estimate, something that takes a *few seconds* to estimate. They don't want much time spent on even just estimating because they are not sure yet if it's worth the investment.

1. **Detailed**. Detailed estimates are when the project has already been *vetted* and our business partners/clients want a *more accurate* estimate on what it would take. We can then take the time to analyze it a bit more so we can come back with more defined tasks and a more defined timeline.

In my experience, **high-level** estimates are used a lot more because they apply to a lot of things, and not just to estimate a project effort. They are also used to quick estimate **features** and **bugs** for easier prioritization on which ones are to be focused on.

I've also found that I only do **detailed** estimates at the start of a *just vetted* project to help identify the various pieces and estimated timeline and effort of the project as a whole.

Since **high-level** estimates are done a lot more times than **detailed** ones, this post will then focus on the things I usually consider when doing **high-level** estimates.

## Overview of Things to Consider

When providing a high-level estimate, here are all the things I consider in my head before giving an answer. We'll go through each one in detail below.

1. Identify the various pieces.

1. My and my team of developers' familiarity with all the pieces.

1. Impact on existing functionalities.

1. Time to communicate and organize daily task progress and coordinating with my team of developers as well as our business partners/clients.

1. Time to write unit tests.

1. Time to write integration tests.

1. Time to manually test.

1. Time to log bugs, triage them, prioritize them, and retesting them.

1. Time to document what we have done, especially if it's a *major* effort.

1. Time to log bugs, triage them, prioritize them, and retesting them **AFTER** going live.

1. Time to train support operations staff to support the new functionality.

Depending on the thing we're estimating (project, feature or bug), not all of the above may apply, but I do go through this list in my head no matter what I'm estimating.

## 1 - Identifying the Various Pieces

Even in high-level estimates, a *gut* design on how the pieces work together will form in our heads of what it would take. Taking that design and breaking it down into multiple pieces then helps us identify the complexity.

* What are all the various pieces involved in the work that is to be done?

* How many systems and codebases are we touching?

* How many APIs are we going to call?

* Which databases do we connect to, if any?

* What are the frameworks/plugins/architecture/packages/patterns that we need to use and/or apply?

Since this is a high-level design, we can only use what we **know** of the systems. So familiarity helps provide more accurate estimates. Which brings me to my next point.

## 2 - Familiarity with all the Pieces

With all the pieces we were able to identify, what is our familiarity with all the pieces?

I usually work with a team of developers, so for a safer estimate, I usually **assume** that majority of them, including myself, will not be familiar with everything. 

I usually consider familiarity around:
* Codebases and structure

* Database schemas

* Architectural patterns

* APIs (is it a new API we're going to be using)

* Vendor solutions 

I then account for **time to learn** -- reading the documentation, researching and even coordinating with a knowledgeable resource. A lot of times, there are multiple knowledgeable resources, one for each *piece* we are not familiar with.


## 3 - Identifying Functionality Impact

This thing that we are estimating -- is it a new functionality? Or is it updating an existing functionality? If so, then is it a **core** one that would impact *multiple* other functionalities when updated?

Knowing this answer will help us gauge our overall testing effort. The more existing functionalities are impacted, the more testing we will have to be doing (i.e. regression testing).

If your impacted functionalities have already existing unit tests and integration tests, then we'll also need to consider the effort to *update* existing unit tests and integration tests as needed. Having existing unit tests and integration tests will definitely help **reduce** the overall testing effort, because these will cover part of your regression testing.

## 4 - Communication and Organization Overhead

We'll also need to consider communication time and organization time to sort and execute through our daily tasks.  

* How much time would it take to organize through the tasks that we need to get done?

* How much time would it take to provide updates to the team of what we got done, what is in progress, and what we're going to work on next?

* How much time would it take to coordinate with the knowledge resources to get the information we need to complete our tasks?

* How much time would it take to coordinate with my team of developers and answer their clarification questions?

* How much time would it take to coordinate with our business partners/clients to clarify requirements and prioritize features/bugs?

Executing through a project requires a lot of communication between me, my team of developers, our business partners/clients, and our stakeholders. Communicating is part of the work if we want to ensure building that **trust** relationship with the people we work with.

## 5 - Writing Unit tests

If we're writing new functionality, and we've established that they are worth writing unit tests for, then we need to accommodate for the time to write them. 

Similarly, if you develop using TDD (test driven development), then your work effort will include this as well as the solution is developed.

## 6 - Writing Integration Tests

If your team invests in integration tests, then these may need to be written as well.

## 7 - Manual Testing

Despite unit tests and integration tests being present, there is still manual testing that needs to be done.

The less unit tests and integration tests you have, the more manual testing that will need to be done.

This includes the initial manual testing done when development is complete. But, I also include the manual testing required **each and every time** a bug is fixed, or a code change has been introduced due to shifted requirements.

## 8 - Bugs and More Bugs

So we've written our automated tests and have done our manual testing. During our initial manual testing phase, it is highly likely that we will find bugs.

Depending on how many bugs are found, there is effort to sort through them, triage them, prioritize them, fix them, test them and coordinate with the team on their status. 

Worse, bug fixes can introduce *more* bugs so typically, bug fixes also include regression testing to ensure nothing else got broken.

## 9 - Updating Documentation

If your team is invested in creating/maintaining documentation, this is also additional effort.

Consider the size and complexity of the solution and how much the documentation needs to be updated/created.

## 10 - Stabilization after Going Live

Despite all our testing efforts, we can only test so much scenarios ourselves. Our real users and real data puts our solution to the test.

During this time, we are in *bugs and more bugs* stage again, but uncontrolled and in the hands of our users.

## 11 - Handing Off to Operational Support

For some teams, operational support (incidents when things are down/not working right, fixing production bugs, upgrading dependencies like servers, databases, plugins, etc) is handled by a different team.

If this applies, then there is also additional effort in handing this off to the operational support team, and likely a duality will be present wherein there will be a time period where you and/or your development team will provide some support to the operational support team as they learn the solution until they can handle majority, if not all, of the problems/support questions that come through.


## Wrapping Up

Developing solutions not only includes development time, but analysis, communication, testing and stabilization. 

The larger the change size, the higher the complexity and the more difficult it is to estimate. Ambiguity and unknowns also increase the estimate because they also increase the complexity.

The more detailed we can be when doing our estimates, the better our estimates will become.
# synacore-weather

This is a single-page demo app written to demonstrate my coding style and engineering proficiency to Synacore in July. 

**Finished Solution Available At:** http://www.freelance-webs.com/weather

**Notes to code judge**

- The very first time you run the page, it will likely say "loading" for a very long time, as the back-end running it is a free heroku dyno that needs to start up from sleep state if the service hasn't been hit in the last 30 mins. The back end was not produced by me.
- Acceptance criteria is for Chrome/Firefox only. Thus, I'm using functionality like "let" keyword and CSS3.0 flexbox which I wouldn't normally do when supporting older browsers.
- Acceptance criteria states no outside javascript use - meaning I must demonstate proper MVC without an angular or knockout framework, proper namespacing and scoping without requirejs, responsiveness without Twitter Bootstrap, etc etc
- Acceptance criteria state that the conten must fill the window. In fullfilling this criteria, I'm attempting to show some different strategies for responsive content, using various CSS units (em/vw) and @media width selectors. One could also use calc() functionality, which I've found necessary for some requirements. In any case, a production solution would likely settle on a more consistent solution. I'm also assuming responsive support for a max aspect ratio of 1:1. If content is required to also fill stretched landscape aspect ratios, I would do this with some calc() function of both vh and vw, but I think this requirement is rare enough in the industry to skip unless explicitly requested.
- I've tested the solution on several devises in several states / countries. The solution is confirmed working on PC/mobile in California and PC/mobile in MN. I have one test user, however, who is experiencing failure on a Samsung S5 in Texas as well as Mexico. I haven't gotten diagnostic information in order to debug. If you experience issues, please contact me at 651.387.1059 or lance.dolan@gmail.com
- I've used gjslint for styling rules. I broke gjslint styling rules only to omit documentation for old-school namespace declaration pattern, and for a couple lines that I think are more readable when left too long. I'm open to whatever styling rules a dev environment adopts.

**Requirements Clarifications**

I would normally approach product owners with some requirements clarifications. For some brief examples:

- How should the widget behave visually during network failure?
- If only some data is retrieved, such as location but not weather, should the widget show what is known? What is the UX upon failure?
 
# synacore-weather

**Finish Solution Available At:** http://www.freelance-webs.com/weather

**Selenium Script Available At:** https://github.com/lancedolan/synacore-weather/blob/master/example.selenium

**Notes to code judge**

- I've tested the solution on several devises in several states / countries. The solution is confirmed working on PC/mobile in California and PC/mobile in MN. I have one test user, however, who is experiencing failure on a Samsung S5 in Texas as well as Mexico. I haven't gotten diagnostic information in order to debug. If you experience issues, please contact me at 651.387.1059 or lance.dolan@gmail.com
- I'm Using CSS 3.0 flexbox in single line - would not use if IE10 or lower support required
- Would normally consult client browser support requirements before using let JS keyword
- Only testing on Chrome/Firefox, given acceptance criteria.
- In fullfilling the "fill the window" criteria, I'm attempting to show some different strategies for responsive content, using various CSS units (em/vw) and @media width selectors. One could also use calc() functionality. In any case, a production solution would likely settle on a more consistent solution. I'm also assuming responsive support for a max aspect ratio of 1:1. If content is required to also fill stretched landscape aspect ratios, I would do this with some calc() function of both vh and vw, but I think this requirement is rare enough in the industry to skip unless explicitly requested.
- I've used gslint for styling rules. I broke gjslint styling rules only to omit documentation for old-school namespace declaration pattern, and for a couple lines that I think are more readable when left too long. I'm open to whatever styling rules a dev environment adopts.
- I considered writing Unit Tests in QUnit.js to demonstrate test case development, but I'm afraid inclusion of external libraries would disqualify me, and writing a Unit Testing framework from scratch seems unreasonable for the scope of this challenge.
- I've included a superfluous selenium script that may be run by opening it in firefox selenium plugin. It doesn't test anything useful and makes use of the pause command which is best to avoid, but I'm including it to inform the evaluator that I'm proficient with test case scripting. Notice it above, example.selenium


**Requirements Clarifications**

I would normally approach product owners with some requirements clarifications. For some brief examples:

- How should the widget behave visually during network failure?
- If only some data is retrieved, such as location but not weather, should the widget show what is known? What is the UX upon failure?
 
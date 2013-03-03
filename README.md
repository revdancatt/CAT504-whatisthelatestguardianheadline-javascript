![Screen Shot](http://cattopus23.com/img/panel-CAT504.png)

What is the latest Guardian Headline
====================================

I wrote whatisthelatestguardianheadline.com on GoogleAppEngine which involved a
bit of backend code to do various bits and bobs. This is a re-implementation
using just javascript as a test of GitHub hosted pages. The GitHub hosted
version can be found at...

+ Running: http://revdancatt.github.com/CAT504-whatisthelatestguardianheadline-javascript/
+ More Information: http://revdancatt.com/2010/11/10/what-is-the-latest-guardian-headline-dot-com/

TODO
----

* Trap errors coming back from the Guardian API
* Fully reload the page (with a metatag) once an hour anyway incase the js breaks
* Put some code in to improve the display on iPhone/iPad and mobile devices
* Add an about tab that links to here
* Add the abilty for a user to drop in a GuardianAPI key (that'll be stored in a 
  cookie) just to practice doing it
* Work out what to do when long words with no breaks don't scale down to the
  correct screen size
* Make sure Right to Left is working when displaying Arabic headlines

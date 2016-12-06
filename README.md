#Project - Sticky, Anchor ads

The project is, through a combination of JS and CSS, create the following two effects on ad units in a page (inside a ```html <div/>```).

###Sticky ads (Phase 1)
In order to improve viewability and ad performance, some publishers may choose to implement their ad units as “sticky ads.” A sticky ad is a persistent/fixed ad unit that stays visible while the user scrolls content on the page up or down.

###Anchor/overlay ads (Phase 2)
Anchor/overlay ads are mobile ads that stick to the edge of the user's screen and are easily dismissible.

###Notes:
We usually don’t have access to the full HTML of the page, so we need the tool to be as simple as possible to use, ideally we should only ask the website owner to add a few lines of code to the ```html <head/>``` section.


Installation steps:
1) On the ```html<head> section of the page on which the ad is going to be visible we have to add this script tag:
  
<script type="text/javascript" id="scriptForAds" src="https://stick-ad.herokuapp.com/assets/main.js" data-width='500px' data-height='500px' div-id='data'></script>

2) Here value of div-id will be the id of the <div/> tag in which we want to show the ad.

3) Here value of div-width will be the width of the <div/> tag in which we want to show the ad.

4) Here value of div- height be the height of the <div/> tag in which we want to show the ad.

The demo of this script is currently running live on heroku server which can be accessed through https://stick-ad.herokuapp.com/.

Ads are coming from the Data Base using javascript.
```

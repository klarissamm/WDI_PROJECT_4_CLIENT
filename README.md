#Avocado

**A Period Tracker site by Klarissa Munz**

Final project for Web Development Immersive course at General Assembly.

See it here: [Avocado-app](https://avocado-app.herokuapp.com/).

![image](http://i.imgur.com/G0VbEU5.jpg)

##The idea

I brought my interest in female health and, particularly, in feminine care, with me to the course. With the support and encouragement of my instructors and course colleagues, I decided to make a Period Tracker as my final project. Avocado not only has a functional purpose – as a place to log and track period dates and record any associated information (like level of pain/bleeding) - but is also a place for educational content, informing users as well as hopefully helping to destigmatise the subject.

##Design and planning

I was inspired by the online layout of magazines like Vogue and Tatler to inform the design of the website, wanting to move away from the “cute” animations often used for these kinds of applications, towards a more sophisticated, editorial feel.

I made a moodboard with navbars and website layouts that I wanted to take inspiration from. I modelled my title and navbar on these designs.

Despite using Bootstrap for the grid layout on my website, I made the navigation bar from scratch.

Vogue.co.uk

![image](http://i.imgur.com/3reEIfk.jpg)

Avocado

![image](http://i.imgur.com/B3vJT8x.jpg?2)

Using Coolers and palletto I chose my colour scheme:

![image](http://i.imgur.com/CW2VhYr.png)


I used a Trello board to track my progress, and to make sure I kept a record of both the tasks carried out, and those still needed to be completed. This was also useful in terms of targeting those blockers that I still had to overcome.

![image](http://i.imgur.com/s9jqFAG.png?1)


I was keen to have a parallax on the homepage, so I built one using just CSS and added a tag line at the bottom of the page. This was because I didn't want to crowd the minimal, clean design.

![image](http://i.imgur.com/HGtYOoU.jpg)

##How it works

A user must register to use the app. Log in is built on JWT authentication. Once the user has logged in, they are assigned a unique session token. The landing page is content-only, with important facts about periods as well as some interesting alternative feminine care products.

![image](http://i.imgur.com/4683Ltu.jpg)

<br>

![image](http://i.imgur.com/Ah6m5sn.jpg)

From the navbar, users can navigate to their profile page, their period log or an "emergencies" page.

The profile page has information relevant to the user and the app, such as their image and age, but also the contraception they use and the day of their last period.

Users have the option to edit or delete their accounts from this page, as well as to navigate to their period data.

![image](http://i.imgur.com/dYg3hFO.jpg)

The Period Log page was built using Angular Bootstrap Calendar. This was the most challenging part of the process - calendars are notoriously tricky to handle!

Users can flick between different months using the "Previous Month" and "Next Month" buttons, but the calendar will automatically find the correct month for today's date.

![image](http://i.imgur.com/iiY8Z3e.jpg)

Dates that have had information added to them by the user have a pink icon in the bottom left-hand corner. This way, users can quickly and easily see which dates they logged their period.

![image](http://i.imgur.com/roayv7w.jpg)

Clicking on the icon will bring up a modal containing any additional information added by the user for that day (data can still be added on any day in case users ever forget).

![image](http://i.imgur.com/5NiroSx.jpg)

Clicking on an empty date cell will bring up a modal for a New Period entry. Users have a selection menu to add their level of pain or bleeding. These correspond to the numbers 1-5 for pain, and 1-3 for bleeding in the back-end models.

Upon pressing submit, a pink icon will immediately appear in that date cell.

![image](http://i.imgur.com/RdVRmIG.jpg?1)

As a fun extra feature after getting MVP, I incorporated Google Places API and Google Maps so that users can find their nearest pharmacy for “emergencies”. I was in Frankfurt when I took the below screenshot!

![image](http://i.imgur.com/OZSUcPz.jpg)

##Tech overview

This app was built with Angular on the front-end and a PostgreSQL database on a Ruby on Rails back-end. I chose not to build a MEAN stack app, deciding instead to venture out of my comfort zone by using these two technologies, which extended my capability and expanded my knowledge of both languages.

The back-end was reasonably straight-forward: I scaffolded two models, User and Period, where one User has many Periods.

I used the Google Maps API in order to locate the user and then find the nearest pharmacy to that 'lat' and 'lng' and populated the front-end with information about that pharmacy.


##What's next

I would love for the app to include a community aspect, with a space for members to share their experience of using different feminine care products and to post about any alternative ones that others might not yet know about. I intend to keep working on the site in my spare time, improving the design and updating features.

##Technology used

<li>HTML5
<li>SASS
<li>AngularJS
<li>Ruby
<li>Rails
<li>PostgresSQL
<li>Gulp
<li>Bower
<li>Bootstrap and UI Bootstrap
<li>Google Maps API
<li>Angular Bootstrap Calendar

##Picture use

I used pictures from Conscious Period Instagram Account, as well as branded imagery from:

<li>My Lola
<li>Moon Cup
<li>Flex Fits
<li>THINX

when talking about alternate feminine care products.

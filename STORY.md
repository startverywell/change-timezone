# Story

This project's readme is more like a story as the project scope started with trying to achieve one thing and blew out. The original requirements, problem statement and goals changed but I didn't acknowledge the change. The final version can be found here (enter link)[]

## Original problem statement

A website is used by users for debugging purposes, each page has many tables and each cell in a table could include a date in the following format: `2021-01-01 19:00:00` and is guaranteed to be in Pacific Time (PDT or PST). Each user could work in any timezone around the world, and each user needs the page in their own timezone. The pages needs to be manipulated externally from the source code of the website (Add on script that runs when the page loads). The user only uses Chrome.

## Requirements

[x] Any page needs to be able to have times of format `2021-01-01 19:00:00` (PT) in a table element converted to the user's timezone
[x] The script needs to be added into the page after load

## Discovery and Round 1

Off the bat, I thought this should be done through a Chrome extension. I hadn't created one before so that would require learning.

- I found a very simple example that showed the basics of creating a Chrome extension and from there I could essentially add a script to any page that would run after loading.
- I then needed a way to select the elements. I initially just used the whole document's `innerhtml` and parse a regex over it / find and replace with updated values. I was away! I could update all of the values on the page.
- I decided to use `moment` and `moment-tz` to do the conversions, I also wanted to bundle the app together rather than using a CDN for `moment` so I needed to use a bundler (which I hadn't used any before outside of some tutorials). I decided to go with Webpack which.

## Goals

[x] Meet the requirements
[x] Have a project to put on my portfolio
[x] Learn Webpack

## Requirements changed

[X] The user would like to be able to change their default / convert to any timezone (not just theirs)

## Round 2

-

## Major bug

- I realized and quickly understood that I was overriding any event listeners that were set up on the page because I was replacing the whole DOM. A lot of pages didn't have anything that could be affected but there were a few, and implementing a different solution would then future proof and ensure it wouldn't break.

## Round 3

- New implementation

## Other features / versions of the app that I had implemented but removed over time

- One page used a completely different format. Specifically it had the Date as a header and Times underneath so I had to select the Date and then manipulate the times individually. This caused a bit of a headache as it was an edge case and often the times might float across 2 days.
- I had the picker within the Chrome extension Popup and this would emit an event out to the page to update which was handy cos it would keep all open pages in sync when they updated the TimeZone. I scrapped this because the user was asked for more permissions when installing, this would mean that people might not install (even though I wasn't actually using the scary permission features).
- I had changed the colour of the DateTimes to indicate a change. However it was a bit distracting and eventually adding the ZoneName abbreviation was handy enough and non invasive

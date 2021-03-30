# Story

I created the below "story" for this project because I wanted to document the changes and learnings I had over the course of a couple of years maintaining and updating requirements.

The TLDR is that the requirements kept changing and I initially didn't take time to think about what I was implementing by scoping and thinking about goals.

# Version 1

## Original problem statement

A website is used by users for debugging purposes, elements on the page could include a date in the following format: `2021-01-01 19:00:00` and is guaranteed to be in Pacific Time (PDT or PST). Each user could work in any timezone around the world, and each user needs the page in their own timezone. The pages needs to be manipulated externally from the source code of the website (Add on script that runs when the page loads). The user only uses Chrome.

## Requirements

- [x] Any page needs to be able to have times of format `2021-01-01 19:00:00` (PT) in a table element converted to the user's timezone
- [x] The script needs to be added into the page after load

## Personal goals

- [x] Meet the requirements
- [x] Have a project to put on my portfolio
- [x] Learn Webpack (very roughly)

## Commentary

Off the bat, I thought this should be done through a Chrome extension. I hadn't created one before so that would require learning.

- I found a very simple example that showed the basics of creating a Chrome extension and from there I could essentially add a script to any page that would run after loading.
- I then needed a way to select the elements. I initially just used the whole document's `innerhtml` and parse a regex over it / find and replace with updated values. I was away! I could update all of the values on the page.
- I decided to use `moment` and `moment-tz` to do the conversions, I also wanted to bundle the app together rather than using a CDN for `moment` so I needed to use a bundler (which I hadn't used any before outside of some tutorials). I decided to go with Webpack which.

## Requirements evolved

- [x] The user would like to be able to change their default / convert to any timezone (not just theirs)

## Commentary

- I needed to add a picker that would allow the user to change the default TimeZone (maybe they work with customers in a different TimeZone). This required creating some HTML and CSS to make something pretty. I initially had this in the Chrome extension popup ([see here for other versions](https://github.com/richardaspinall/time-zone-converter/blob/dev/STORY.md#other-features--versions-of-the-app-that-i-had-implemented-but-removed-over-time)) but I ended up adding this to the Dom too.
- It also required a little change in the logic, I also implemented an interface with `moment` for the conversion functions I needed.

## Major bug

- I realized and quickly understood that I was overriding any event listeners that were set up on the page because I was replacing the whole DOM. A lot of pages didn't have anything that could be affected, but there were a few, so implementing a different solution would then future proof additional pages and ensure it wouldn't break.

## Commentary

- Round 3 took a bit of effort and time as I was creating a new implementation. At this stage I was also just hacking things together and not thinking about a solution.
- I started by targeting each page and their tables individually through `document.querySelectorAll(body > div:nth-child(2) > table:nth-child(50) > tbody > tr:nth-child(n+1) > td:nth-child(1))`.
- After a whole lot of refactoring and re-implementing, I realized that all of the elements I needed to convert were in table `td` elements so this was simply `document.querySelectorAll('td')` and then a conversion on each of them replacing their `innerHTML` value.

## Requirements evolved

- [x] The user would like to be able to manually change times by entering input
- [x] Support UnixTime format

## Commentary

- All the logic is already there so this should have been easy and I did actually get it done fairly quickly.
- I added this logic to the Chrome extension Popup too so it could actually be used outside of the targetted pages.
- This was the point where I properly realized I needed to do a better and intentional refactor for code reuse. I wasn't happy with the spaghetti I had made.

# Version 2

## Requirements

These requirements were not off the back of additional functionality but so I could future proof the project. It was also in a state as per Round 4 above that I didn't really have a project to show. The code was still a mess and I hadn't documented anything.

- [x] Refactor (see below for requirements)
- [x] Unit testing and a dummy page for testing with a non Chrome extension version
- [ ] Add comments where necessary
- [ ] A DateTime picker so the user doesn't have to write out the formatted DateTime (but still have the input for pasting)
- [ ] Make the picker less ugly

### Refactor requirements

- [x] Simplify each function so I can implement unit testing. Simplifying will help with maintaining and make it so I can add unit testing so I don't freak out every time I change something
- [x] Simplify and group up all of the regex logic in one place
- [x] Create a more traditional web page structure in the `src` for the Pop-up so I can easily edit instead of viewing it as a string that is being passed to a variable
- [x] Have a dev (non Chrome-ext) version that can be built so I don't need to add and remove the extension just to test
- [ ] Be able to add additional regex matching functions easily
- [ ] Be able to add a different element that would be selected on a page for conversion (not just `TD` elements)

## Personal goals

- [ ] Meet the requirements
- [x] Learn Webpack (specifically enviornment / global variables to target different builds)
- [x] Learn how to write complex regular expressions
- [x] Create a STORY readme to journal the whole learning and development journey
- [ ] Create the regular README.md and remove any of my learning journey
- [ ] Get feedback about the end code from a friend (professional developer)

## Commentary

- Learning a bit more about Webpack to set up variables that were checked on building the app (Dev vs Prod). Specifically this was needed because I couldn't use `chrome.storage` when not running the Chrome extension.
- I went around in loops trying to best refactor some of the functionality. But once I did set the requirements properly, it became more clear as I knew what my refactor was targeting. An example of a loop was that I had added the initialization state for TimeZones in the main script (initialization function), but then moved it to the `convertPage()` function to keep all the TimeZone state together, but quickly realized it should be separated as there wasn't any point in checking if we were initializing the page when converting the page manually after load / initialization!
- The main regex is quite chunky with all the different capture groups. For some reason I hadn't made any of them non-capture groups (I think it was because I didn't understand them right at the beggining but it worked so I moved on), so I took the time (slash actually just focussed for a minute) and understood very quickly. This made the logic far more simple when destructuring the array for each case. There were initially 10 caputre groups, using non-capture groups for the redunant groupings, I got it down to 5 (I think I might be able to get it down to 2 once I refactor the actual logic: [date/time][timezone] I will come back to this!).

`/(\d{4}\-\d{2}\-\d{2}\s\d{2}(?:(?:\:\d{2}){1,2}))(?:(\s(?:[A-Z]{2,5})|(\.\d{3})\s(\w{3})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/`

- Creating this STORY readme was a bit of work as I had to remember a lot of the issues I faced a couple of years ago. I trawled through the repository branches and commits gathering most of it. This gave me another insight: make sure to write good commit messages! It wasn't too bad but definitely could be better.

## Learnings

- Document my learnings as I go!
- Define the scope of the project and set milestones with timeframes!
- Don't dive into things out of scope that might require a lot of learning!
- Set up unit testing as early as possible!
- Practice writing good commit messages!
- Think then code!

### Don't be so hard on yourself

I eventually realized that I was being pretty hard on myself with every requirement change and implementation. I wanted to ensure I was doing things properly and tried to learn way too many things at once. The code is still not solid but I think I need to create some more basic projects and it will come with time!

- Webpack and bundling is quite a learning curve and it wasn't an initial main goal but something I needed to get familiar with
- TimeZones are really confusing for most people which is the point of this tool!
- Coupling the above with this being an add-on / and external script with DOM manipulation

## Future

I don't plan on implementing any of the above as I need to draw a line in the sand but here are some of the things I would have liked to do:

- [ ] Pages look to be moving to React which causes a headache because I would need to wait for the content to load / recieve an event when the content loads before it does a conversion.
- [ ] The code or a separate implemenation should really be in-built to the page.
- [ ] Have a way for a user to easily select a value on the page of a supported format, get the element type and then run a conversion for the whole page on that type
- [ ] Automatically detect the ZoneName abbreviation at the end of the DateTime value so that it converts from that time rather than a hard coded default

## Other features / versions

The below are a list of features and versions of the app that I had implemented but removed over time

- One page used a completely different format. Specifically it had the Date as a header and Times underneath so I had to select the Date and then manipulate the times individually. This caused a bit of a headache as it was an edge case and also occasionally the times might float across 2 days which was more of a headache.
- I had the picker within the Chrome extension Popup and this would emit an event out to the page to update which was handy cos it would keep all open pages in sync when they updated the TimeZone. I scrapped this because the user was asked for more permissions when installing, this would mean that people might not install (even though I wasn't actually using the scary permission features).
- I had changed the colour of the DateTimes to indicate a change. However it was a bit distracting and eventually adding the ZoneName abbreviation was handy enough and non invasive

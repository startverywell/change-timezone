# Story

This project's readme is more like a story as the project scope started with trying to achieve one thing and blew out. The original requirements, problem statement and goals changed but I didn't acknowledge the change. The final version can be found here (enter link)[]

## Original problem statement

A website is used by users for debugging purposes, each page has many tables and each cell in a table could include a date in the following format: `2021-01-01 19:00:00` and is guaranteed to be in Pacific Time (PDT or PST). Each user could work in any timezone around the world, and each user needs the page in their own timezone. The pages needs to be manipulated externally from the source code of the website (Add on script that runs when the page loads). The user only uses Chrome.

## Requirements

[X] Any page needs to be able to have times of format `2021-01-01 19:00:00` (PT) in a table element converted to the user's timezone
[X] The script needs to be added into the page after load

## Goals

- Learn JavaScript
- Have a project to put on my portfolio

## Discovery

Off the bat, I thought this should be done through a Chrome extension. I hadn't created one before so that would require learning.

- I found a very simple example that got showed the basics and from there I could essentially add a script to any page that would run after loading.
- I then needed a way to select the elements. I initially just used the whole document's `innerhtml` and parse a regex over it / find and replace with updated values. I was away! I could update all of the values on the page.

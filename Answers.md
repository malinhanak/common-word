# Answers

## How much time did you end up spending on this coding test?

On just the basic logic to preform the task of this assignment, I would say roughly around 3 hours, but since I decide to both try out a new pattern I learned from Kent C. Dodds Epic React course, and add Typescript which I am not very used to it probably took me around a day and an half with all the research that went into mostly Typescript.

## Explain why you chose the code structure(s) you used in your solution.

I decided to go with on of the structures I have used over the year this one is more reasent where helper/utils functions pretty much live inte same folder as the component they are call in, or at the very least on the same level as the most common parents components if the functions is used in multiple places. I also devided components into either view components, meaning the components that could be used to viewed as pages to route to and from, and just regular components, display on one or more of the view components.

As mentioned earlier I decided to try out a pattern (new to me) with compound component, recently learned in a course, this was interesting and while the pattern is not super advanced in the manner in which I am using it here, it became more difficult adding the element of Typescript to it, but I am 90% pleased with the outcome, as mentioned would have liked to cover all of the still remaining :any's with actually types and interfaces.

I normally do have a themes folder for any general theme of styling applying to most or several parts of the app, I am comfortable using styled-components so I went with this here as well. I also have hook folder for any custom hook, only exception here is the useDarkMode that I decided to keep in the ThemeContext file this time around.

You may notice the setupTets.ts and the test-utils, the former remain as pre programmed by creat-react-app script, the latter contains a Wrapper for all test cases, I'm leaving it it even if I didn't get around to write any tests, this is still a way of wrapping Test that I have found very useful in the past.

I also tested my hand in using ErrorBoundries, while I am not super please about how that turned out it was a good oppertunity to try my hand at that, and learn something.

## What would you add to your solution if you had more time?

In a perfect world I would add test to it, I started setting up a test wrapper but felt time was rushing away so I didn't get around to actually add any test which I would have liked. I also would have prefered not leaving any (any typings) for Typescript types and interfaces, though there were a few I did not fully manage to crack. I also would have liked figuring out how to keep any formatting such as linebreaks and list from the text files, but decided not to prioritize that right now, one may might have been to use an edito or sorts which I have worked with before.

## What did you think of this recruitment test?

A straight forward task, the designer in me find's it a little to logical because there is not all that much fun to be done with just a uploader unless you want to add lots of other things that may or may not be related which I don't like since it generally take focus from the purpose of the site/app. But other than that, I like that you can do this in any framework your want, since I often find test that forces you to use only Vanilla JS (don't get me wrong this is important knowledge as well), to miss the point of testing a developer on what they are good at, with all the languages and frameworks today everyone has their favorite and thing they shine it, this test allows you the option to chose, great!

Since a recruitment test really can go either which way, depending on the day form when it's done and who is reviewing I always try to walk away from new knowledge which is why I opted to try adding Typescript and a new pattern I was not very familiar with, it might be unwise in a test setup like this, but for me it is more important to have learn one new thing than to conquer the world in one day ;)

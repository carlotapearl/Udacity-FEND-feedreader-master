# Project Overview

This project is part of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program.

This project features a web-based application that reads RSS feeds. This project is meant to practice test-driven development using Jasmine to write a number of tests against the Feed Reader application. The tests will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## To Run the Feed Reading and Testing Suite

Options to run this repository:

1. You can run it locally on your computer.
2. Clone or Download.

### Run Locally

To run this repository locally on your computer, you will need to clone or download the files from GitHub.  There are 2 ways to do this:

1. Using git to clone
2. Using the GitHub interface to "download" a zipped archive

### Using Git to Clone

1. Open terminal or git bash.
2. Navigate to where you want this repository cloned.
3. Click on the _green "Clone or download" button_ above.
4. Click on the "Copy to clipboard" icon to copy.
5. In terminal or git bash, type: `git clone ` and then paste the URI you just copied.
6. Press return or enter on your keyboard.
7. Type: `cd ufend-feedreader-jasmine`
8. Open the `index.html` file by typing: `open ./index.html`
9. The project will load and the tests will run automatically.
10. Scroll to the bottom of the page to see the test results.

### Downloading

1. Click on the _green "Clone or download" button_ above.
2. Click on the "Download ZIP" link.  The zipped archive will download to your machine.
3. Using your favorite file system application, find the zipped archive.
4. Unzip it.
5. Navigate into the new folder.
6. Click on the `index.html` file to open it your browser.
7. The project will load and the tests will run automatically.
8. Scroll to the bottom of the page to see the test results.


# Project Instrocutions:

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined and the URL is not empty', () => {
            allFeeds.forEach((feed) => {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).toBeGreaterThan(0);
                expect(feed.url).toBeTruthy(); 
                /*expect(feed.url).toMatch(/^(http|https):\/\//);*/
            });

        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined and the name is not empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
         


    });


    /* Test suite named "The menu" */

    describe('The Menu', () => {

     /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('is toggled display/hidden', function(){
            $('.menu-icon-link').trigger('click');
                 expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', () => {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach((done) => {
            loadFeed(0, done) 
        });

        it("there is at least a single .entry within .feed after loadFeed() is called", () => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {


        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initialFeedSelection;
        beforeEach((done) => {
            loadFeed(0, () => {
                initialFeedSelection = document.querySelector('.feed').innerHTML;
                loadFeed(1, () => {
                    done();
                });
            });
        });
        it('content changes by loadFeed', ((done) => {
            var newFeedSelection = document.querySelector('.feed').innerHTML;
            expect(initialFeedSelection).not.toBe(newFeedSelection);
            done();
        }));
    })
}());

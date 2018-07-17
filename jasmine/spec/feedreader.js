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


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        for (let index in allFeeds) {
            it('Feed ' + index + ' has a URL defined', function() {
                    expect(allFeeds[index].url).toBeDefined();
                    expect(allFeeds[index].url).not.toBe(0);
                });
         };

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        for (let index in allFeeds) {
            it('Feed ' + index + ' has a name defined', function() {
                    expect(allFeeds[index].name).toBeDefined();
                    expect(allFeeds[index].name).not.toBe(0);
                });
         };
    });


    describe('The menu', function() {

        /* This test that ensures the menu element is
        * hidden by default.
        */    
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

        /* This test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('ensures the menu changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('has at least one entry', function() {
            let checkForEntry = $('.feed .entry').length;
            expect(checkForEntry).toBeGreaterThan(0);
        });
    });


    describe ('New Feed Selection', function(){
    /*  This test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
    */
        let feed1;
        let feed2;

        beforeEach(function(done){
            loadFeed(0, function () {
                feed1 = $('.feed').html();
                done();                
            });
        });

        it('loads new feed', function(done){
            loadFeed(2, function(){
                feed2 = $('.feed').html();
                expect(feed2).not.toBe(feed1);
                done();
            });
        });
    });
}());

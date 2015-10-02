

casper.test.begin('Important UI Things', function suite(test) {

    casper.start("http://khs-minithon.github.io/website/", function() {
        test.assertHttpStatus(200, 'Connected to login page');
        test.assertUrlMatch('/', 'URL is root');
        test.assertTitle('Kennett High School Mini-THON', 'Title is correct');
        test.assertElementCount('.social-list li', 3, '3 Social Media Buttons Found');
        test.assertElementCount('.contact-info ul li', 3, 'Contact Info Found')
    });

    casper.run(function() {
        test.done();

         // work around "Unsafe JavaScript attempt to access frame with URL about:blank" error
        // http://stackoverflow.com/questions/26608391/using-phantomjs-to-embed-all-images-of-a-webpage-produces-warnings-but-works/26688062#26688062
        setTimeout(function(){
            phantom.exit();
        }, 0);
        
    });

});
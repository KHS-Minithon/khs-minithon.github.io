var TargetUrl = "http://khsminithon.org/"; // prod
                //"http://localhost:9001/"; // local dev

casper.test.begin('Important Information', function suite(test) {

    casper.start(TargetUrl, function() {
        test.assertHttpStatus(200, 'Connected to main page');
        test.assertUrlMatch('/', 'URL is root');

        test.assertTitle('Kennett High School Mini-THON', 'Title is correct');

        // Event Name
        test.assertExists('#event-name', 'Event Name Found');
        test.assertEquals(this.fetchText('#event-name'), 'Kennett High School Mini-THON', 'Correct Event Name');

        // Event Date
        test.assertExists('#event-date', 'Event Date Found');
        test.assertEquals(this.fetchText('#event-date'), "Join us on February 26, 2016", "Correct Event Date");

        // Event Slogan
        test.assertExists('#event-slogan', 'Slogan Found');
        test.assertEquals(this.fetchText('#event-slogan'), "For The Fight. For The Cure. For The Kids.", "Correct Event Slogan");

        // About Section
        test.assertElementCount('.about', 4, '4 About Boxes Found');

            // Who Are We?
            test.assertEquals(this.fetchText(".about:nth-child(1) h4"), "Who Are We?", "Who Are We? - Correct Title ");
            test.assertEquals(this.fetchText(".about:nth-child(1) p"), "We are a group of KHS students dedicated to raise as much money as possible to fight childhood cancer.", "Who Are We? - Correct Text ");

            // What Do We Do?
            test.assertEquals(this.fetchText(".about:nth-child(2) h4"), "What Do We Do?", "What Do We Do? - Correct Title ");
            test.assertEquals(this.fetchText(".about:nth-child(2) p"), "The KHS Mini-THON raises money through fundraisers and our annual Mini-THON to benefit the Four Diamonds Research.", "What Do We Do? - Correct Text ");

            // Why We Do It?
            test.assertEquals(this.fetchText(".about:nth-child(3) h4"), "Why We Do It?", "Why We Do It? - Correct Title ");
            test.assertEquals(this.fetchText(".about:nth-child(3) p"), "We do it for the fight. For the cure. For The Kids living with cancer.", "Why We Do It? - Correct Text ");

            // Since When?
            test.assertEquals(this.fetchText(".about:nth-child(4) h4"), "Since When?", "Since When? - Correct Title ");
            test.assertEquals(this.fetchText(".about:nth-child(4) p"), "We have been fighting childhood cancer since 2015 with our first annual Mini-THON being held in February of 2016.", "Since When? - Correct Text ");

        // Impact Section
        test.assertElementCount('.services', 4, '4 Services Boxes Found');

            // Mini-THONs
            test.assertEquals(this.fetchText(".services:nth-child(1) h4"), "Mini-THONs", "Mini-THONS - Correct Title ");
            test.assertEquals(this.fetchText(".services:nth-child(1) p"), "Mini-THONs are multi-hour, interactive, fun-filled events that are completely student-led. They can also be 3 month projects or year-long activities where students raise awareness and funds for Four Diamonds.", "Mini-THONS - Correct Text ");
            test.assertEquals(this.getElementAttribute('.services:nth-child(1) a', 'href'), 'http://fourdiamonds.donordrive.com/index.cfm?fuseaction=cms.page&id=1007', 'Mini-THON Correct Link');

            // Donations
            test.assertEquals(this.fetchText(".services:nth-child(2) h4"), "Donations", "Donations - Correct Title ");
            test.assertEquals(this.fetchText(".services:nth-child(2) p"), "By raising money, we can assure that the children get the help they need and deserve. Thanks to donations, 100% of children with cancer at Penn State Hershey Children's Hospital are eligible for assistance.", "Donations - Correct Text ");
            test.assertEquals(this.getElementAttribute('.services:nth-child(2) a', 'href'), 'http://www.fourdiamonds.org/about-us/#about-usfinancials', 'Mini-THONS Correct Link');

            // Raising Awareness
            test.assertEquals(this.fetchText(".services:nth-child(3) h4"), "Raising Awareness", "Raising Awareness - Correct Title ");
            test.assertEquals(this.fetchText(".services:nth-child(3) p"), "By reaching out the community, we make everyone come together to help fight for this noble cause.", "Raising Awareness - Correct Text ");
            test.assertEquals(this.getElementAttribute('.services:nth-child(3) a', 'href'), 'http://www.fourdiamonds.org/about-childhood-cancer/', 'Raising Awareness Correct Link');

            // Research
            test.assertEquals(this.fetchText(".services:nth-child(4) h4"), "Research", "Research - Correct Title ");
            test.assertEquals(this.fetchText(".services:nth-child(4) p"), "Through Four Diamonds, Penn State Hershey Children's Hospital is seeking improved treatments and cures to benefit those around the world.", "Research - Correct Text ");
            test.assertEquals(this.getElementAttribute('.services:nth-child(4) a', 'href'), 'https://www.youtube.com/watch?v=C7SPFR2T3tg', 'Research Correct Link');

        // Extra info
        test.assertElementCount(".imp-links li", 9, '9 List Elements of Important Extra Links Found');

            // Address header
            test.assertEquals(this.fetchText(".imp-links h4:nth-child(1)"), "Contact Us", "Extra Info - Contact Us Header");

            //test.assertEquals(this.fetchText(".imp-links li:nth-child(2)"), "100 E South Street, Kennett Square, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pennsylvania, USA 19348<br><br>", "Extra Info - Correct Address Text");
            test.assertEquals(this.getElementAttribute(".imp-links li:nth-child(2) a", "href"), "https://goo.gl/Of0EKQ", "Extra Info - Correct Map Link");

            // Phone
            //test.assertEquals(this.fetchText(".imp-links li:nth-child(3)", "&nbsp;&nbsp;1-610-444-6617<br><br>", "Extra Info - Phone Number"));

            // Email
            //test.assertEquals(this.fetchText(".imp-links li:nth-child(4)", "&nbsp;&nbsp;khsminithon@gmail.co", "Extra Info - Email"));

            // Four Diamonds header
            test.assertEquals(this.fetchText(".imp-links h4:nth-child(5)"), "Four Diamonds Links", "Extra Info - Four Diamonds Links Header");

            // About
            test.assertEquals(this.fetchText('.imp-links li:nth-child(6)'), 'About', 'About - Correct Text');
            test.assertEquals(this.getElementAttribute('.imp-links li:nth-child(6) a', 'href'), 'http://www.fourdiamonds.org/about-us/#sidr-main', 'About - Correct Link');

            // History
            test.assertEquals(this.fetchText('.imp-links li:nth-child(7)'), 'History', 'History - Correct Text');
            test.assertEquals(this.getElementAttribute('.imp-links li:nth-child(7) a', 'href'), 'http://www.fourdiamonds.org/about-us/#about-usour-history', 'History - Correct Link');

            // Financials
            test.assertEquals(this.fetchText('.imp-links li:nth-child(8)'), 'Financials', 'Financials - Correct Text');
            test.assertEquals(this.getElementAttribute('.imp-links li:nth-child(8) a', 'href'), 'http://www.fourdiamonds.org/about-us/#about-usfinancials', 'Financials - Correct Link');

            // Penn State
            test.assertEquals(this.fetchText('.imp-links li:nth-child(9)'), 'Penn State', 'Penn State - Correct Text');
            test.assertEquals(this.getElementAttribute('.imp-links li:nth-child(9) a', 'href'), 'http://www.fourdiamonds.org/about-us/#about-usrelationship-to-penn-state', 'Penn State - Correct Link');

            // Staff
            test.assertEquals(this.fetchText('.imp-links li:nth-child(10)'), 'Staff', 'Staff - Correct Text');
            test.assertEquals(this.getElementAttribute('.imp-links li:nth-child(10) a', 'href'), 'http://www.fourdiamonds.org/about-us/#about-usstaff', 'Staff - Correct Link');

            // Families
            test.assertEquals(this.fetchText('.imp-links li:nth-child(11)'), 'Families', 'Families - Correct Text');
            test.assertEquals(this.getElementAttribute('.imp-links li:nth-child(11) a', 'href'), 'http://www.fourdiamonds.org/about-us/#about-usmeet-our-families', 'Families - Correct Link');

    });

    casper.run(function() {
        test.done();
    });

});

casper.test.begin('Important Links', function suite(test) {

    casper.start(TargetUrl, function() {

        // Navigation Bar
        test.assertExists('.navbar-nav', 'Navigation Bar Found');
        test.assertElementCount('.navbar-nav li', 10, '10 Sections in Navigation Bar Found');

            // Home
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(1) a'), "Home", "Correct Navigation-Home Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(1) a', 'href'), 'body', 'Correct Navigation-Home Link');

            // About
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(2) a'), "About", "Correct Navigation-About Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(2) a', 'href'), '#about-section', 'Correct Navigation-About Link');

            // Services
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(3) a'), "Services", "Correct Navigation-Services Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(3) a', 'href'), '#services-section', 'Correct Navigation-Services Link');

            // Impact
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(4) a'), "Impact", "Correct Navigation-Impact Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(4) a', 'href'), '#portfolio-section', 'Correct Navigation-Impact Link');

            // Events
            //test.assertEquals(this.fetchText('.navbar-nav li:nth-child(5) a'), "Events", "Correct Navigation-Events Text");
            //test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(5) a', 'href'), '#events-section', 'Correct Navigation-Events Link');

            // Sign Up
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(5) a'), "Sign Up", "Correct Navigation-SignUp Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(5) a', 'href'), '#signup-section', 'Correct Navigation-Sign Up Link');

            // Team
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(6) a'), "Team", "Correct Navigation-Team Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(6) a', 'href'), '#team-section', 'Correct Navigation-Team Link');

            // Partners
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(7) a'), "Partners", "Correct Navigation-Partners Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(7) a', 'href'), '#partners-section', 'Correct Navigation-Partners Link');

            // Social
            test.assertEquals(this.fetchText('.navbar-nav li:nth-child(8) a'), "Social", "Correct Navigation-Social Text");
            test.assertEquals(this.getElementAttribute('.navbar-nav li:nth-child(8) a', 'href'), '#social-section', 'Correct Navigation-Social Link');

        // Main Donate Button
        test.assertExists('#main-donate', 'Main Donate Button Found');
        test.assertEquals(this.fetchText('#main-donate strong'), "Donate", "Correct Donate Button Text");
        test.assertEquals(this.getElementAttribute('#main-donate', 'href'), 'https://fourdiamonds.donordrive.com/index.cfm?fuseaction=donate.event&eventID=1179', 'Correct Sign Up Link');

        // Donate Button
        test.assertExists('#donate', 'Donate Button Found');
        test.assertEquals(this.fetchText('#donate'), "Donate", "Correct Donate Button Text");
        test.assertEquals(this.getElementAttribute('#donate', 'href'), 'https://fourdiamonds.donordrive.com/index.cfm?fuseaction=donate.event&eventID=1179', 'Correct Donate Link');

        // Social Media Buttons
        test.assertElementCount('.social-list li', 4, '4 Social Media Buttons Found');

            // Facebook
            test.assertEquals(this.getElementAttribute('.social-list li:nth-child(1) a', 'href'), 'https://www.facebook.com/khsminithon/', 'Correct Facebook Link');

            // Twitter
            test.assertEquals(this.getElementAttribute('.social-list li:nth-child(2) a', 'href'), 'https://twitter.com/khsminithon', 'Correct Twitter Link');

            // Instagram
            test.assertEquals(this.getElementAttribute('.social-list li:nth-child(3) a', 'href'), 'https://instagram.com/khsminithon/', 'Correct Instagram Link');

            // Google Group
            test.assertEquals(this.getElementAttribute('.social-list li:nth-child(4) a', 'href'), 'https://groups.google.com/forum/#!forum/khsminithon/join', 'Correct Google Group Link');

    });

    casper.run(function() {
        test.done();

        // work around "Unsafe JavaScript attempt to access frame with URL about:blank" error
        // http://stackoverflow.com/questions/26608391/using-phantomjs-to-embed-all-images-of-a-webpage-produces-warnings-but-works/26688062#26688062
        setTimeout(function() {
            phantom.exit();
        }, 0);

    });

});

use finalproject;

INSERT INTO users (username, email, password) VALUES
("Person_1", "person1@finalproject.com", "asdf1234"),
("Person_2", "person2@finalproject.com", "asdf1234"),
("Person_3", "person3@finalproject.com", "asdf1234"),
("Person_4", "person4@finalproject.com", "asdf1234"),
("Person_5", "person5@finalproject.com", "asdf1234"),
("Person_6", "person6@finalproject.com", "asdf1234"),
("Person_7", "person7@finalproject.com", "asdf1234"),
("Person_8", "person8@finalproject.com", "asdf1234"),
("Person_9", "person9@finalproject.com", "asdf1234"),
("Person_10", "person10@finalproject.com", "asdf1234"),
("Person_11", "person11@finalproject.com", "asdf1234"),
("Person_12", "person12@finalproject.com", "asdf1234"),
("Person_13", "person13@finalproject.com", "asdf1234"),
("Person_14", "person14@finalproject.com", "asdf1234"),
("Person_15", "person15@finalproject.com", "asdf1234"),
("Person_16", "person16@finalproject.com", "asdf1234");

INSERT INTO descriptions (age, gender, orientation, ethnicity, height) VALUES
(21, "Male", "Straight", "White", "5'10"),
(18, "Female", "Lesbian", "White", "5'6"),
(23, "Male", "Gay", "Latino", "6'1"),
(25, "Female", "Straight", "Black", "5'8"),
(26, "Male", "Straight", "Asian", "5'7"),
(24, "Female", "Straight", "Middle Eastern", "5'3"),
(28, "Trans Man", "Bisexual", "Latino", "5'5"),
(27, "Female", "Bisexual", "Native American", "5'2"),
(20, "Male", "Gay", "Pacific Islander", "5'10"),
(20, "Trans Woman", "Pansexual", "Asian", "5'9"),
(21, "Non-Binary", "Pansexual", "White", "6'0"),
(24, "Trans Man", "Straight", "Black", "5'7"),
(26, "Non-Binary", "Queer", "White", "5'5"),
(30, "Questioning", "Questioning", "White", "5'10"),
(29, "Intersex", "Asexual", "White", "5'7"),
(21, "Prefer Not to Say", "Prefer Not to Say", "White", "5'5");

INSERT INTO locations (city, state) VALUES
("Birmingham","Alabama"),
("Hoover","Alabama"),
("Trussville","Alabama"),
("Bessemer","Alabama"),
("Pelham","Alabama"),
("Alabaster","Alabama"),
("Vestavia Hills","Alabama"),
("Hoover","Alabama");

INSERT INTO hobbies (sports, foodie, running, travel, movies, reading, 
fashion, videogames, dancing, cycling, music, swimming, hiking, excercising,
concert, art, cooking, singing, baking, animals, camping, boardgames, crafts) VALUES
(true, false, true, false, true, false, false, true, false, false, true, false, false, true, true, false, false, false, false, true, true, false, false),
(false, true, false, true, true, true, true, false, false, false, true, false, false, false, false, true, true, false, true, true, false, false, true),
(false, false, false, true, true, false, true, true, true, false, true, false, false, true, true, true, false, false, false, false, false, false, true),
(true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, true, true, true, false, true, false, true, false),
(false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, false, false, false, false, true, true, false, false),
(true, true, false, false, false, true, false, false, false, false, false, false, true, true, true, false, true, false, false, false, false, true, false),
(true, false, true, false, true, false, true, false, true, false, true, false, false, true, false, false, false, false, true, false, true, true, false),
(false, true, true, false, false, true, false, false, true, true, true, false, true, true, false, false, false, true, true, true, false, false, false),
(false, false, false, true, true, true, false, true, false, false, true, true, false, false, true, true, true, true, false, false, false, false, true),
(false, false, false, true, false, true, true, true, true, false, true, false, false, false, true, false, true, false, true, true, false, false, true),
(false, false, true, true, true, true, false, false, true, false, true, true, true, true, false, true, false, false, false, true, true, false, false),
(true, true, true, false, true, false, false, true, false, false, true, false, false, true, false, false, false, true, false, false, false, false, true),
(false, true, false, true, true, true, true, false, false, false, true, false, false, true, true, true, false, false, true, false, true, true, false),
(false, true, false, true, true, true, false, false, false, false, true, true, false, true, true, false, true, false, false, false, false, true, false),
(false, true, false, true, true, true, true, false, true, false, true, false, false, false, true, true, false, true, false, true, false, true, false),
(false, false, false, false, true, true, false, true, false, false, true, false, false, false);

INSERT INTO sensorytags (hypersight, hypersound, hypersmell, hypertaste, hypertouch, hyposight, hyposound,
hyposmell, hypotaste, hypotouch, balance, bodyawareness) VALUES
(false, false, false, false, false, false, true, false, false, false, false, true),
(false, true, false, false, false, false, false, false, false, true, false, false),
(false, false, true, false, false, false, true, false, false, false, false, false),
(false, false, false, true, false, false, true, false, false, false, false, false),
(false, false, false, false, true, false, true, false, false, false, false, false),
(false, false, false, true, false, false, false, true, false, false, false, false),
(false, false, true, false, false, false, false, true, true, false, false, false),
(false, true, false, false, false, false, false, true, true, false, false, false),
(true, false, false, false, false, false, false, false, true, false, false, false),
(false, true, false, true, false, false, false, false, false, false, true, false),
(true, false, true, false, false, false, false, false, false, false, false, false),
(true, true, false, false, false, false, false, false, false, false, false, true),
(false, true, false, false, true, false, false, false, false, false, false, true),
(true, false, false, false, false, false, false, false, false, false, false, true),
(false, false, true, true, false, false, false, false, false, false, true, false),
(false, false, false, false, true, false, false, true, false, false, false, true);

INSERT INTO profileinfo (userid, firstname, bio, spectrum, relationship, descriptionid, locationid, hobbyid, sensoryid) VALUES
(1, "Joe", "Hi! I'm Joe.  I like football.", "Autistic", "Friendship", 1, 1, 1, 1),
(2, "Jane", "Hi! I'm Jane.  Let's hangout.", "Person with Autism", "Relationship", 2, 2, 2, 2),
(3, "Tanner", "No Pic, No Chat", "On the Spectrum", "Relationship", 3, 3, 3, 3),
(4, "Katie", "I'm bad at making profiles.  Just message me.", "Autistic", "Relationship", 4, 4, 4, 4),
(5, "Brian", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Autistic", "Other", 5, 5, 5, 5),
(6, "Hannah", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Person with Autism", "Relationship", 6, 6, 6, 6),
(7, "Clark", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Autistic", "Friendship", 7, 7, 7, 7),
(8, "Emily", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Autistic Person", "Relationship", 8, 8, 8, 8),
(9, "Sean", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Autistic", "Friendship", 9, 1, 9, 9),
(10, "Lizzie", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "On the Spectrum", "Relationship", 10, 1, 10, 10),
(11, "Sky", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "ASD", "Other", 11, 2, 11, 11),
(12, "Kylar", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Asperger's", "Relationship", 12, 2, 12, 12),
(13, "Flo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Austistic", "Relationship", 13, 4, 13, 13),
(14, "Taylor", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Asperger's", "Other", 14, 4, 14, 14),
(15, "West", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Person with Autism", "Relationship", 15, 6, 15, 15),
(16, "Sam", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet.", "Autistic", "Friendship", 16, 8, 16, 16);

INSERT INTO activities (name, about, address, link, picture, hours, cost) VALUES
("Birmingham Zoo","A wildlife zoo containing lions, zebras, rhinos, giraffes, and many more animals", "2630 Cahaba Road, Birmingham, AL 35223", "https://www.birminghamzoo.com", "https://www.birminghamzoo.com/wp-content/themes/birminghamzoo.com/style/images/logo.svg", "Wednesday - Sunday: 9:00AM - 5:00PM", 2),
("Vulcan Park and Museum","A beautiful park complete with the largest cast-iron statue in the world and an interactive musuem","1701 Valley View Drive, Birmingham, AL 35209","https://visitvulcan.com","https://visitvulcan.com/wp-content/themes/visit-vulcan/images/vulcan-fill-logo.svg", "Park Grounds: Everyday 10:00AM - 10:00PM, Vulcan Center: Weekends 10:00AM - 6:00 PM", 1),
("Oak Mountain State Park","Beautiful State Park full of hiking trails and other outdoor activities, including camping.","200 Terrace Drive, Pelham, AL 35124","https://www.alapark.com/parks/oak-mountain-state-park","https://www.alapark.com/themes/custom/alapark/logo.svg", "7:00AM - 7:00PM", 1),
("Sloss Furnaces","Once the largest manufacturer of pig iron in the world, now a national historic landmark.","20 32nd Street North, Birmingham, AL 35222","https://www.slossfurnaces.com","https://www.slossfurnaces.com/wp-content/uploads/2015/06/rotator-04.jpg", "Tuesday - Saturday: 10:00AM - 4:00PM, Sunday: 12:00PM - 4:00PM", 0),
("SAW's Soul Kitchen","Classic American BBQ and Soul Food Restaurant", "215 41st St S, Birmingham, AL 35222","http://www.sawsbbq.com/","https://www.sawsbbq.com/core/uploads/2019/08/SAWS-Logo.svg","11:00AM - 8:00PM", 1),
("Yo' Mama's","Classic American Style Food","2328 2nd Ave N, Birmingham, AL 35203", "https://www.yomamasrestaurant.com", "https://www.yomamasrestaurant.com/wp-content/themes/espresso/images/logo@2x.png","Mon  Fri 10:30AM - 2:30PM", 1),
("El Barrio","Mexican/Southwestern Restaurant","2211 2nd Ave N, Birmingham, AL 35203","http://elbarriobirmingham.com/","https://images.squarespace-cdn.com/content/v1/601759992e514a5b86ee0180/1624502569493-JNU3ONFVT7IJL4B7RO6O/elbarrio-logo-newAsset+2%402x.png?format=1500w", "Sunday - Monday: Closed, Tuesday - Thursday: 11:30AM - 8:00 PM, Friday - Saturday: 11:30Am - 9:00PM", 2),
("Perry's Steakhouse & Grille","Upscale American Style Steakhouse", "4 Perimeter Park S, Birmingham, AL 35243", "http://www.perryssteakhouse.com/menu-locations/alabama/birmingham/", "https://perryssteakhouse.com/wp-content/themes/perrys-steakhouse/img/Perrys-Steakhouse-Grille-Logo-Col-Opt.svg", "Monday - Thursday: 4PM - 10PM, Friday: 10:30AM - 10:00PM, Saturday: 4:00PM - 10:00PM, Sunday: 4:00PM - 9:00PM", 3);

INSERT INTO questions (sentence) VALUES
("What is your favorite food?"),
("What is your favorite animal?"),
("What is your favorite color?"),
("What is your favorite TV show?"),
("What is your favorite movie?"),
("What do you like to do on the weekends?"),
("If you could travel anywhere in the world, where would you go?"),
("What is your zodiac sign?"),
("What was your favorite school subject?"),
("If you could have a superpower, what would you want?");
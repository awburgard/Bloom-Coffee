CREATE TABLE users (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) NOT NULL UNIQUE,
    "password" VARCHAR(1000) NOT NULL,
    "first_name" VARCHAR(80) NOT NULL,
    "last_name" VARCHAR(120) NOT NULL,
    "home_city" INT DEFAULT 1 REFERENCES "cities"".city_id"
);

CREATE TABLE "cities" (
	"city_id" SERIAL PRIMARY KEY,
    "city_name" VARCHAR (120) NOT NULL,
    "zipcode" TEXT [] UNIQUE NOT NULL,
    "picture_path" VARCHAR (120) NOT NULL
);

CREATE TABLE "coffee_shop" (
	"coffee_shop_id" SERIAL PRIMARY KEY,
    "shop_name" VARCHAR (80) NOT NULL,
    "shop_address" TEXT [] UNIQUE NOT NULL,
    "city_id" INT REFERENCES "cities",
    "shop_logo" VARCHAR (60) NOT NULL,
    "shop_link" VARCHAR (120) NOT NULL,
);

CREATE TABLE "tasting_journal" (
	"tasting_journal_id" SERIAL PRIMARY KEY,
    "coffee_name" VARCHAR (120) NOT NULL,
    "coffee_shop_name" INT REFERENCES "coffee_shop",
    "date" DATE,
    "user_id" INT REFERENCES "users",
    "description" TEXT NOT NULL,
    "overall" INTEGER,
    "aroma" INTEGER,
    "flavor" INTEGER,
    "aftertaste" INTEGER,
    "acidity" INTEGER,
    "sweetness" INTEGER,
    "mouthfeel" INTEGER,
    "balance" INTEGER,
    "clean_cup" INTEGER,
    "uniformity" INTEGER
);

INSERT INTO "coffee_shop" ("shop_name", 'city_id', "shop_logo", "shop_address", "shop_link")
VALUES ('Messenger Coffee Co.','1', 'images/messenger.jpg', '1624 Grand Blvd', 'https://messengercoffee.co/'),
('Oddly Correct', '1','images/oddly.jpg', '3940 Main St', "https://oddlycorrect.com/"),
('Blip Roasters', '1', 'images/blip.jpg', '1101 Mulberry St,1106 E 30th St', 'http://www.bliproasters.com/'),
('Crows Coffee', '1', 'images/crows.jpg', '535 E. Red Bridge Road,304 E. 51st Street, 7440 Washington Street', 'https://crowscoffee.com/'),
('Filling Station', '1', 'images/filling.jpg', '2980 McGee Trafficway,7420 Johnson Dr,1010 Westport Rd,2460 E Pershing Rd', 'https://fillingstationcoffee.com/'),
('Monarch Coffee', '1', 'images/monarch.jpg', '3550 Broadway Blvd', 'https://www.monarchcoffeekc.com/'),
('The Roasterie', '1', 'images/roasterie.jpg', '4223 Main Street,8750 Penrose Ln,2401 Gillham Rd,2250 W. 47th Pl,1828 Walnut St.,Suite 102,2663 Southwest Blvd,6223 Brookside Blvd,4511 119th St,1204 W 27th Street', 'https://www.theroasterie.com/'),
('Second Best Coffee', '1', 'images/second.jpg', '328 w. 85th street', 'http://www.secondbestcoffee.com/'),
('Cafe Equinox', '1', 'images/equinox.jpg', '7036 Nieman Rd', 'https://www.familytreenursery.com/cafe-equinox.html'),
('PTs Coffee Roasting Co', '1', 'images/pt.jpg', '310 Southwest Blvd', 'https://www.ptscoffee.com/'),
('Colony KC', '1', 'images/colony.jpg', '312 Armour Rd', 'http://www.colonykc.com/'),
('Headrush Roasters Coffee & Tea', '1', 'images/headrush.jpg', '7108 N. Oak Trafficway, 4115 N. Mulberry Dr.', 'https://www.headrushroasters.com/'),
('Homers Coffee House', '1', 'images/homer.jpg', '7126 West 80th Street', 'http://homerscoffeehouse.com/'),
('Parkville Coffee', '1', 'images/parkville.jpg', '103 Main St', 'https://parkvillecoffee.com/'),
('Eleos Coffee', '1', 'images/eleos.jpg', '3401 Independence Ave' 'https://www.eleoscoffee.com/'),
('Hammerhand Coffee', '1', 'images/hammerhand.jpg', '22 North Main Street',	'https://www.hammerhand.coffee/'),
('Blackdog Coffee House', '1', 'images/blackdog.jpg', '12815 W 87th St Pkwy',' http://www.bdcoffeehouse.com/'),
('Post Coffee Co.',	'1', 'images/post.jpg', '200 NE Chipman Rd',' http://www.postcoffeecompany.com/'),
('Vested Coffee', '1',' images/vested.jpg',' 310 West 8th Street', 'https://www.vested.coffee/'),
('Pilgrim Coffee Co.', '1', 'images/pilgrim.jpg', '12643 Metcalf Ave.', 'https://pilgrimcoffeecompany.com/'),
('Quay Coffee', '1', 'images/quay.jpg', '412 Delaware St, 4525 Oak Street',	'https://www.quaycoffee.com/'),
('Made in KC Cafe', '1', 'images/made.jpg', '1114 Baltimore Avenue ,306 W. 47th St', 'https://www.mikccafe.com/'),
('Broadway Cafe and Roasting', '1',	'images/broadway.jpg', '4106 Broadway', 'http://broadwayroasting.com/'),
('Parisi Cafe', '1', 'images/parisi.jpg',' 30 W Pershing Rd #100', 'https://parisicoffee.com/');
CREATE TABLE "cities" (
	"city_id" SERIAL PRIMARY KEY,
    "city_name" VARCHAR (120) NOT NULL,
    "zipcode" TEXT [] UNIQUE NOT NULL,
    "picture_path" VARCHAR (120) NOT NULL
);

INSERT INTO "cities"("city_id","city_name","zipcode","picture_path")
VALUES
('Kansas City','{64108,64111,64101,64109,64131,64112,64114,66202,66219,66205,64113,66209,66203,64116,64118,66204,64152,64124,64068,66215,64063,64106,66213,64105}','images/kcmo.jpg');

CREATE TABLE "coffee_shop" (
	"coffee_shop_id" SERIAL PRIMARY KEY,
    "shop_name" VARCHAR (80) NOT NULL,
    "city_id" INT REFERENCES "cities",
    "shop_logo" VARCHAR (60) NOT NULL,
    "shop_link" VARCHAR (120) NOT NULL,
);

INSERT INTO "coffee_shop" ("shop_name", 'city_id', "shop_logo", "shop_link")
VALUES ('Messenger Coffee Co.','1', 'images/messenger.jpg',  'https://messengercoffee.co/'),
('Oddly Correct', '1','images/oddly.jpg', "https://oddlycorrect.com/"),
('Blip Roasters', '1', 'images/blip.jpg',  'http://www.bliproasters.com/'),
('Crows Coffee', '1', 'images/crows.jpg', 'https://crowscoffee.com/'),
('Filling Station', '1', 'images/filling.jpg', 'https://fillingstationcoffee.com/'),
('Monarch Coffee', '1', 'images/monarch.jpg', 'https://www.monarchcoffeekc.com/'),
('The Roasterie', '1', 'images/roasterie.jpg', 'https://www.theroasterie.com/'),
('Second Best Coffee', '1', 'images/second.jpg', 'http://www.secondbestcoffee.com/'),
('Cafe Equinox', '1', 'images/equinox.jpg', 'https://www.familytreenursery.com/cafe-equinox.html'),
('PTs Coffee Roasting Co', '1', 'images/pt.jpg', 'https://www.ptscoffee.com/'),
('Colony KC', '1', 'images/colony.jpg', 'http://www.colonykc.com/'),
('Headrush Roasters Coffee & Tea', '1', 'images/headrush.jpg', 'https://www.headrushroasters.com/'),
('Homers Coffee House', '1', 'images/homer.jpg', 'http://homerscoffeehouse.com/'),
('Parkville Coffee', '1', 'images/parkville.jpg', 'https://parkvillecoffee.com/'),
('Eleos Coffee', '1', 'images/eleos.jpg', 'https://www.eleoscoffee.com/'),
('Hammerhand Coffee', '1', 'images/hammerhand.jpg',	'https://www.hammerhand.coffee/'),
('Blackdog Coffee House', '1', 'images/blackdog.jpg','http://www.bdcoffeehouse.com/'),
('Post Coffee Co.',	'1', 'images/post.jpg','http://www.postcoffeecompany.com/'),
('Vested Coffee', '1',' images/vested.jpg', 'https://www.vested.coffee/'),
('Pilgrim Coffee Co.', '1', 'images/pilgrim.jpg', 'https://pilgrimcoffeecompany.com/'),
('Quay Coffee', '1', 'images/quay.jpg', 'https://www.quaycoffee.com/'),
('Made in KC Cafe', '1', 'images/made.jpg', 'https://www.mikccafe.com/'),
('Broadway Cafe and Roasting', '1',	'images/broadway.jpg','http://broadwayroasting.com/'),
('Parisi Cafe', '1', 'images/parisi.jpg', 'https://parisicoffee.com/');


CREATE TABLE "users" (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) NOT NULL UNIQUE,
    "password" VARCHAR(1000) NOT NULL,
    "first_name" VARCHAR(80) NOT NULL,
    "last_name" VARCHAR(120) NOT NULL,
    "home_city" INT DEFAULT 1 REFERENCES "cities"".city_id"
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



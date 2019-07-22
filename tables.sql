CREATE TABLE cities(
   city_id      SERIAL PRIMARY KEY
  ,city_name    VARCHAR(120) NOT NULL
  ,zipcode      VARCHAR [] NOT NULL
  ,picture_path VARCHAR(60) NOT NULL
);
INSERT INTO cities(city_name,zipcode,picture_path) VALUES ('Kansas City','{64108,64111,64101,64109,64131,64112,64114,66202,66219,66205,64113,66209,66203,64116,64118,66204,64152,64124,64068,66215,64063,64106,66213,64105}','images/kcmo.jpg');

CREATE TABLE coffee_shop(
   coffee_shop_id SERIAL PRIMARY KEY 
  ,shop_name      VARCHAR(120) NOT NULL
  ,city_id        INTEGER REFERENCES "cities" NOT NULL
  ,shop_logo      VARCHAR(120) NOT NULL
  ,shop_link      VARCHAR(120) NOT NULL
  ,lat  NUMERIC NOT NULL
  ,lng NUMERIC NOT NULL
);

INSERT INTO coffee_shop(shop_name,city_id,shop_logo,shop_link, lat, lng) VALUES
 ('Messenger Coffee Co.',1,'images/messenger.jpg','https://messengercoffee.co/', 39.0935139, -94.583812)
,('Oddly Correct',1,'images/oddly.jpg','https://oddlycorrect.com/', 39.0554236, -94.5885522)
,('Crows Coffee',1,'images/crows.jpg','https://crowscoffee.com/', 39.0554026, -94.6564036)
,('Filling Station',1,'images/filling.jpg','https://fillingstationcoffee.com/',39.0553607, -94.6564037)
,('Monarch Coffee',1,'images/monarch.jpg','https://www.monarchcoffeekc.com/', 39.0626025, -94.5927733)
,('The Roasterie',1,'images/roasterie.jpg','https://www.theroasterie.com/',39.0469134, -94.6339024)
,('Second Best Coffee',1,'images/second.jpg','http://www.secondbestcoffee.com/', 38.974497, -94.5965347)
,('Cafe Equinox',1,'images/equinox.jpg','https://www.familytreenursery.com/cafe-equinox.html', 39.0006989, -94.7175002)
,('PT''s Coffee Roasting Co.',1,'images/pt.jpg','https://www.ptscoffee.com/', 39.0885515, -94.5903114)
,('Colony KC',1,'images/colony.jpg','http://www.colonykc.com/', 39.1422686, -94.5787672)
,('Headrush Roasters Coffee & Tea',1,'images/headrush.jpg','https://www.headrushroasters.com/', 39.1694286, -94.600445)
,('Homer''s Coffee House',1,'images/homer.jpg','http://homerscoffeehouse.com/', 38.9841913, -94.6704537)
,('Parkville Coffee',1,'images/parkville.jpg','https://parkvillecoffee.com/', 39.1893197, -94.6857902)
,('Eleos Coffee',1,'images/eleos.jpg','https://www.eleoscoffee.com/', 39.105885, -94.5438507)
,('Hammerhand Coffee',1,'images/hammerhand.jpg','https://www.hammerhand.coffee/', 39.24671, -94.4226957)
,('Blackdog Coffee House',1,'images/blackdog.jpg','http://www.bdcoffeehouse.com/', 38.9703342, -94.7365506)
,('Post Coffee Co.',1,'images/post.jpg','http://www.postcoffeecompany.com/', 38.9255477, -94.3777942)
,('Vested Coffee',1,'images/vested.jpg','https://www.vested.coffee/', 39.1047788, -94.5890794)
,('Pilgrim Coffee Co.',1,'images/pilgrim.jpg','https://pilgrimcoffeecompany.com/', 38.899376, -94.6684749)
,('Quay Coffee',1,'images/quay.jpg','https://www.quaycoffee.com/', 39.077016, -94.6173049)
,('Made in KC Cafe',1,'images/made.jpg','https://www.mikccafe.com/', 39.1002859, -94.5866159)
,('Broadway Cafe and Roasting',1,'images/broadway.jpg','http://broadwayroasting.com/', 39.052861,-94.5926726)
,('Parisi Cafe',1,'images/parisi.jpg','https://parisicoffee.com/', 39.0848231,-94.5950817)
,('Splitlog Coffee Co',1,'images/split.jpg','https://www.splitlog.coffee/', 39.1028458,-94.6263194);



CREATE TABLE users(
   user_id    SERIAL PRIMARY KEY 
  ,username   VARCHAR(120) NOT NULL
  ,password   VARCHAR(120) NOT NULL
  ,first_name VARCHAR(60) NOT NULL
  ,last_name  VARCHAR(120) NOT NULL
  ,home_city  INTEGER  REFERENCES "cities" DEFAULT 1 NOT NULL 
);

CREATE TABLE tasting_journal(
   tasting_journal_id SERIAL PRIMARY KEY 
  ,coffee_name        VARCHAR(120) NOT NULL
  ,coffee_shop_id     INTEGER  REFERENCES "coffee_shop" NOT NULL
  ,user_id            INTEGER  REFERENCES "users" NOT NULL
  ,description        VARCHAR(512) NOT NULL
  ,overall            INTEGER  NOT NULL
  ,aroma              INTEGER  NOT NULL
  ,flavor             INTEGER  NOT NULL
  ,aftertaste         INTEGER  NOT NULL
  ,acidity            INTEGER  NOT NULL
  ,sweetness          INTEGER  NOT NULL
  ,mouthfeel          INTEGER  NOT NULL
  ,balance            INTEGER  NOT NULL
  ,clean_cup          INTEGER  NOT NULL
  ,uniformity         INTEGER  NOT NULL
);

SELECT * FROM "coffee_shop"
JOIN "cities"
ON "coffee_shop"."city_id" = "cities"."city_id";
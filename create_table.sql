CREATE TABLE "users" (
	"user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (120) NOT NULL
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
    "shop_address" VARCHAR (120) NOT NULL,
    "city_id" INT REFERENCES "cities",
    "shop_logo" VARCHAR (60) NOT NULL
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

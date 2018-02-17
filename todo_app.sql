CREATE TABLE categories (
id SERIAL PRIMARY KEY,
description VARCHAR(75) NOT NULL);

CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
description VARCHAR(75) NOT NULL,
complete BOOLEAN NOT NULL DEFAULT 'No',
date DATE DEFAULT now(),
category_id INT REFERENCES "categories" DEFAULT '1');

INSERT INTO categories (description) 
VALUES ('Low Priority'), ('Medium Priority'), ('High Priority');

INSERT INTO tasks (description, category_id) 
VALUES ('Class at Prime', 3), ('Lunch', 2), ('Dinner', 1), ('Homework Assignment', 3), ('Ready Alarms For Tomorrow', 2), ('Sleep', 3);
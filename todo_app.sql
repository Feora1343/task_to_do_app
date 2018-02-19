CREATE TABLE categories (
id SERIAL PRIMARY KEY,
description VARCHAR(75) NOT NULL);

CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
description VARCHAR(75) NOT NULL,
complete BOOLEAN NOT NULL DEFAULT 'No',
due_date DATE,
category_id INT REFERENCES "categories" DEFAULT '1');

INSERT INTO categories (description) 
VALUES ('Low Priority'), ('Medium Priority'), ('High Priority');

INSERT INTO tasks (description, category_id, due_date) 
VALUES ('Class at Prime', 3, '02/19/18'), ('Homework Assignment', 3, '02/19/18'), ('Sleep', 3, '02/19/18');



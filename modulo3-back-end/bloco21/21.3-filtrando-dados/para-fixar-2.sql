SELECT * FROM film
WHERE title LIKE '%ace%';

SELECT * FROM film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE title LIKE '%lord' AND description LIKE '%girl%';

SELECT * FROM film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%documentary%';

SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
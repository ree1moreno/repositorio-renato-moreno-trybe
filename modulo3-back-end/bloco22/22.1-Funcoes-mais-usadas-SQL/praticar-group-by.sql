SELECT active, COUNT(*)
FROM customer
GROUP BY active;

SELECT * FROM customer;

SELECT store_id, active, COUNT(*)
FROM customer
GROUP BY store_id, active;

SELECT * FROM film;

SELECT rating, AVG(rental_duration) as MÉDIA
FROM film
GROUP BY rating
ORDER BY MÉDIA DESC;

SELECT * FROM address;

SELECT district, COUNT(*) AS quantidade
FROM address
GROUP BY district
ORDER BY quantidade DESC;

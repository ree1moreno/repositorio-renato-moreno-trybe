SELECT * FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

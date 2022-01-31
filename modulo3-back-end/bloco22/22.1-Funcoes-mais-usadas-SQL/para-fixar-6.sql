    SELECT rating, AVG(length) AS média
    FROM sakila.film
    GROUP BY rating
    HAVING média BETWEEN 115.0 AND 121.50
    ORDER BY média DESC;
    
	SELECT rating, SUM(replacement_cost) AS total_custo
    FROM sakila.film
    GROUP by rating
    HAVING total_custo > 3950.50
    ORDER BY total_custo;
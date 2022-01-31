SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS `Par ou Ímpar`;

SELECT 220 DIV 12 AS `Grupos Completos`;

SELECT 
    IF(220 MOD 12 = 0,
        'NÃO',
        CONCAT('SIM, ', 220 MOD 12)) AS `Lugares Sobrando`;
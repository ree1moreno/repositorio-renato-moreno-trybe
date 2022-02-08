SELECT * FROM employees;

-- Exercício 1
SELECT 
    MAX(salary) AS `Maior salário` 
FROM
    employees;

-- Exercício 2
SELECT 
    (MAX(salary) - MIN(salary)) AS Diferença
FROM
    employees;
    
-- Exercício 3
SELECT
	job_id,
    AVG(salary) AS média_salarial
FROM
    employees
GROUP BY job_id
ORDER BY média_salarial DESC;

-- Exercício 4
SELECT 
    SUM(salary) AS `Total de salários a pagar`
FROM
    employees;
    
-- Exercício 5
SELECT 
    MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary),2)
FROM
    employees;
    
-- Exercício 6
SELECT 
    job_id, COUNT(*)
FROM
    employees
WHERE job_id = 'IT_PROG';

-- Exercício 7
SELECT 
    job_id, SUM(salary) AS `Total de salários a pagar`
FROM
    employees
GROUP BY
    job_id;
    
-- Exercício 8
SELECT 
    job_id, SUM(salary) AS `Total de salários a pagar`
FROM
    employees
WHERE
    job_id = 'IT_PROG';
    
-- Exercício 9
SELECT 
    job_id, AVG(salary) AS Média_salarial
FROM
    employees
WHERE
    job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY Média_salarial DESC;

-- Exercício 10
SELECT 
    department_id,
    COUNT(*) AS quantidade_de_funcionários,
    ROUND(AVG(salary), 2) AS média_salarial
FROM
    employees
GROUP BY department_id
HAVING quantidade_de_funcionários > 10;

-- Exercício 11
SELECT * FROM employees;
SET SQL_SAFE_UPDATES=0;
UPDATE employees 
SET 
    phone_number = REPLACE(phone_number, '515', '777')
WHERE
    phone_number LIKE '515%';
SET SQL_SAFE_UPDATES=1;
    
-- Exercício 12
SELECT 
    first_name
FROM
    employees
WHERE
    CHAR_LENGTH(first_name) >= 8;

-- Exercício 13
SELECT 
    employee_id, first_name, YEAR(hire_date)
FROM
    employees;
    
-- Exercício 14
SELECT 
    employee_id, first_name, DAY(hire_date)
    
FROM
    employees;
    
-- Exercício 15
SELECT 
    employee_id, first_name, MONTH(hire_date)
    
FROM
    employees;
    
-- Exercício 16
SELECT 
    UCASE(first_name) AS nomes
FROM
    employees;

-- Exercício 17
SELECT 
    last_name, hire_date
FROM
    employees
WHERE
    MONTH(hire_date) = 7
        AND YEAR(hire_date) = 1987;

-- Exercício 18
SELECT 
    first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(), hire_date) AS dias_trabalhados
FROM
    employees;
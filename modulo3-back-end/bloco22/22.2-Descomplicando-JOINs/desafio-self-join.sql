SELECT 
    CONCAT(emp.first_name,
            ' ',
            emp.last_name) AS nome_pessoa_colaboradora,
    CONCAT(man.first_name,
            ' ',
            man.last_name) AS nome_gerente
FROM
    employees AS emp
        INNER JOIN
    employees AS man ON emp.manager_id = man.employee_id
WHERE
    emp.department_id <> man.department_id;
    
SELECT 
    CONCAT(man.first_name, ' ', man.last_name) AS nome_gerente,
    COUNT(*)
FROM
    employees AS man
        INNER JOIN
    employees AS emp ON emp.manager_id = man.employee_id
GROUP BY man.employee_id;
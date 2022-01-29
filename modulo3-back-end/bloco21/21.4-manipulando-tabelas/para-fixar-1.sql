SELECT * FROM staff;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Renato', 'Moreno', 3, 'renats.mc@gmail.com', 1, 1, 'ree', 'teste');

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
('Renato2', 'Moreno', 4, 'renats.mc2@gmail.com', 1, 1, 'ree2', 'teste2'),
('Renato3', 'Moreno', 5, 'renats.mc3@gmail.com', 1, 1, 'ree3', 'teste3');

INSERT INTO actor(first_name, last_name)
    SELECT first_name, last_name
    FROM customer
    LIMIT 5;

SELECT * FROM actor;
    
INSERT INTO category (name)
VALUES
    ('teste1'),
    ('teste2'),
    ('teste3');
    
SELECT * FROM category;

SELECT * FROM store;

INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);


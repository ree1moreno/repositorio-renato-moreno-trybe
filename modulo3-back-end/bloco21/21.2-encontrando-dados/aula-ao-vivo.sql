CREATE DATABASE IF NOT EXISTS Faculdade;

USE Faculdade;

CREATE TABLE IF NOT EXISTS biblioteca (
	id INT PRIMARY KEY AUTO_INCREMENT,
	`nome` VARCHAR(50),
    `emprestado` BOOLEAN,
    `número de cópias` INT,
    `gênero` VARCHAR(50),
    `ano` INT
);

INSERT INTO 
	Faculdade.biblioteca(`nome`, `emprestado`, `número de cópias`, `gênero`,`ano`)
VALUES 
	('Um livro do Ano', false, 5, 'Terror', 2019),
    ('A linugagem Javascript', true, 10, 'Tech', 2020),
    ('O retorno de Jedi', false, 6, 'Ficção', 1979),
    ('Biscoito ou bolacha? O guia definitivo', false, 20, 'Auto ajuda', 2021);

SELECT * FROM biblioteca;

SELECT nome FROM biblioteca;

SELECT COUNT(*) FROM biblioteca;
SELECT SUM(`número de cópias`) AS soma FROM biblioteca;

SELECT * FROM biblioteca LIMIT 2 OFFSET 2;

SELECT * FROM biblioteca
ORDER BY ano DESC, nome DESC;

SELECT * FROM biblioteca
ORDER BY nome;

SELECT * FROM biblioteca
ORDER BY `número de cópias` DESC LIMIT 1;

SELECT * FROM biblioteca
ORDER BY `número de cópias` DESC;

INSERT INTO 
	Faculdade.biblioteca(`nome`, `emprestado`, `número de cópias`, `gênero`,`ano`)
VALUES 
	('Teste', false, 5, 'Terror', 2019);
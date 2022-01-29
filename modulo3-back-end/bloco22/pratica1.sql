CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
SELECT * FROM escola.alunos;
SELECT nome, idade FROM escola.alunos;
SELECT DISTINCT nome FROM escola.alunos;
SELECT DISTINCT
    idade
FROM
    escola.alunos;

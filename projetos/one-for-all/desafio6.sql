SELECT
    MIN(planos.valor_assinatura) AS faturamento_minimo,
    MAX(planos.valor_assinatura) AS faturamento_maximo,
    ROUND(AVG(planos.valor_assinatura), 2) AS faturamento_medio,
    SUM(planos.valor_assinatura) AS faturamento_total
FROM
    SpotifyClone.usuarios AS usuarios
        INNER JOIN
    SpotifyClone.planos AS planos ON usuarios.plano_id = planos.plano_id;

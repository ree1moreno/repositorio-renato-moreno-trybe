SELECT 
    cancoes.cancao AS nome,
    COUNT(reproducoes.cancao_id) AS reproducoes
FROM
    SpotifyClone.cancoes AS cancoes
        INNER JOIN
    SpotifyClone.reproducoes AS reproducoes ON cancoes.cancao_id = reproducoes.cancao_id
        INNER JOIN
    SpotifyClone.usuarios AS usuarios ON usuarios.usuario_id = reproducoes.usuario_id
        INNER JOIN
    SpotifyClone.planos AS planos ON planos.plano_id = usuarios.plano_id
WHERE
    planos.planos = 'gratuito'
        OR planos.planos = 'pessoal'
GROUP BY cancoes.cancao
ORDER BY cancoes.cancao;
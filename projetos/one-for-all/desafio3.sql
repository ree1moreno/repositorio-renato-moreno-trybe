SELECT 
    usuario.usuario AS usuario,
    COUNT(reproducoes.cancao_id) AS qtde_musicas_ouvidas,
    ROUND((SUM(duracao_segundos) / 60), 2) AS total_minutos
FROM
    SpotifyClone.usuarios AS usuario
        INNER JOIN
    SpotifyClone.reproducoes AS reproducoes ON usuario.usuario_id = reproducoes.usuario_id
        INNER JOIN
    SpotifyClone.cancoes AS cancoes ON reproducoes.cancao_id = cancoes.cancao_id
GROUP BY usuario
ORDER BY usuario;
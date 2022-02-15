SELECT 
    COUNT(reproducoes.cancao_id) AS quantidade_musicas_no_historico
FROM
    SpotifyClone.usuarios AS usuarios
        INNER JOIN
    SpotifyClone.reproducoes AS reproducoes ON usuarios.usuario_id = reproducoes.usuario_id
WHERE
    usuarios.usuario = 'Bill';
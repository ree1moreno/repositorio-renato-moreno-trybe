SELECT 
    usuarios.usuario AS usuario,
    CASE WHEN MAX(reproducoes.data_reproducao) > '2021-01-01'
		THEN 'Usuário ativo'
        ELSE 'Usuário inativo'
    END AS condicao_usuario
FROM
    SpotifyClone.usuarios AS usuarios
        INNER JOIN
    SpotifyClone.reproducoes AS reproducoes ON usuarios.usuario_id = reproducoes.usuario_id
GROUP BY usuarios.usuario
ORDER BY usuarios.usuario;
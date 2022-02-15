SELECT 
    artistas.artista AS artista,
    albums.album AS album,
    COUNT(seguidos.artista_id) AS seguidores
FROM
    SpotifyClone.artistas AS artistas
        INNER JOIN
    SpotifyClone.albums AS albums ON artistas.artista_id = albums.artista_id
        INNER JOIN
    SpotifyClone.artistas_seguidos AS seguidos ON artistas.artista_id = seguidos.artista_id
GROUP BY albums.album , artistas.artista
ORDER BY seguidores DESC, artista, album;
SELECT 
    COUNT(DISTINCT cancoes.cancao) AS cancoes,
    COUNT(DISTINCT artistas.artista) AS artistas,
    COUNT(DISTINCT albums.album) AS albuns
FROM
    SpotifyClone.cancoes AS cancoes
        INNER JOIN
    SpotifyClone.artistas AS artistas ON cancoes.artista_id = artistas.artista_id
        INNER JOIN
    SpotifyClone.albums AS albums ON albums.artista_id = artistas.artista_id;
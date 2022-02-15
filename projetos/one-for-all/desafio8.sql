SELECT 
    artistas.artista AS artista, albums.album AS album
FROM
    SpotifyClone.artistas AS artistas
        INNER JOIN
    SpotifyClone.albums AS albums ON artistas.artista_id = albums.artista_id
WHERE
    artistas.artista = 'Walter Phoenix';
SELECT cancao.cancao AS cancao, COUNT(reproducoes.cancao_id) AS reproducoes
FROM SpotifyClone.cancoes AS cancao
INNER JOIN SpotifyClone.reproducoes AS reproducoes
ON cancao.cancao_id = reproducoes.cancao_id
GROUP BY reproducoes.cancao_id
ORDER BY reproducoes DESC, cancao
LIMIT 2;
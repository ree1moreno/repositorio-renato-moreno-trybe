# Podemos instanciar um set vazio ou inicializar com valores de um objeto
# iterável, como uma lista
conjuntoA = set()

# Ao inicializar com valores de uma lista, os valores duplicados serão
# desconsiderados e a ordem de inserção será perdida.
conjuntoB = set([1, 1, 2, 3, 3, 3])

# Add - adiciona o elemento ao conjunto
conjuntoA.add(5)
conjuntoA.add(3)
conjuntoA.add(0)

# sets admitem objetos mistos. Ou seja, admitem ter _strings_ com _ints_
# dentro de um mesmo objeto, por exemplo.
conjuntoA.add('elemento')

# Temos 2 jeitos de remover elementos:
# - remove() causa erro caso o elemento não esteja no set;
# - discard() não causa erro caso o elemento não esteja no set.

# Não vai dar erro
conjuntoB.remove(3)

# Vai dar erro pois já removemos esse elemento e set não guarda duplicatas
conjuntoB.remove(3)

# Não vai dar erro
conjuntoB.discard(3)

# Pop - remove e retorna um elemento aleatório do set
# - set é um objeto iterável, mas não conseguimos garantir em que ordem os
#   elementos serão acessados.
# - A função pop () é útil quando queremos trabalhar com algum elemento do
#   set, mas não sabemos de antemão quais elementos estão dentro dele.
some_element = conjuntoA.pop()

# clear() remove todos os itens do set
conjuntoB.clear()

# Consulta
# A consulta é feita com o operador "in"
if 2 in conjuntoA:
    print("2 está em A")

if 7 not in conjuntoA:
    print("7 não está em A")

# Operações que envolvem outro conjunto
# As operações que envolvem outros conjuntos implementam todas as operações matemáticas que se aplicam a conjuntos. Vamos listar essas operações aqui mas podem ser consultadas na documentação sempre que necessário.
# set.isdisjoint(other): retorna True se o set não tem nenhum elemento em comum com other, ou seja, se a intersecção é vazia;
# set.issubset(other): verifica se set é um subconjunto de other, ou seja, se todo elemento de set está em other;
# set.issuperset(other): verifica se set é um superconjunto de other, ou seja, se todos os elementos de other estão em set. A diferença de um superconjunto e de um subconjunto é que no superconjunto podem haver outros elementos, além dos elementos de other já presentes dentro de set. Já no subconjunto não;
# set == other: verifica se os conjuntos são iguais, ou seja, se todos os elementos de set estão em other e se todos os elementos de other estão em set. Lembre-se que a ordem não importa. Não existe função dedicada para a comparação de igualdade.
# Os métodos a seguir operam sobre dois ou mais conjuntos por vez. Cada uma das operações nessa seção tem a sua versão que modifica o set original com o resultado da operação e não retorna nada.
# set.union(others): retorna a união entre o set e todos os other passados;
# set.intersection(others): retorna a intersecção entre set e todos os other passados;
# set.difference(others): retorna a diferença entre set e todos os other passados;
# set.symmetric_difference(others): retorna todos os elementos que estejam em um mas não estejam no outro conjunto (opera apenas sobre dois conjuntos).

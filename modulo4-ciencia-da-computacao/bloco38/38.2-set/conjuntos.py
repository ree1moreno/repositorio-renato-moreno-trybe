class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

    conj5 = Conjunto()
    for i in [1, 2, 3]:
        conj5.add(i)
    print(conj5)
    print(1 in conj5)
    print(0 in conj5)

    conj6 = Conjunto()
    for i in range(1, 11):
        conj6.add(i)

    conj7 = Conjunto()
    for i in range(10, 21):
        conj7.add(i)

    conj8 = conj6.union(conj7)
    print(conj8)

    conj9 = Conjunto()
    for i in [1, 2, 3]:
        conj9.add(i)

    conj10 = Conjunto()
    for i in [7, 2, 10]:
        conj10.add(i)

    conj11 = conj9.intersection(conj10)
    print(conj11)

    conj12 = Conjunto()
    for i in [1, 2, 3]:
        conj12.add(i)

    conj13 = Conjunto()
    for i in [7, 2, 10]:
        conj13.add(i)

    conj14 = Conjunto()
    conj15 = conj12.union(conj13)

    print(conj12.issubset(conj15))
    print(conj15.issuperset(conj12))
    print(conj3.issubset(conj15))

    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    for elem in estudantes:
        conj_estudantes.add(elem)

    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print("Quem já entregou pelo menos uma lista:", (
      conj_lista1.union(conj_lista2)))
    print("Quem não entregou nenhuma:", (
      conj_estudantes.difference(conj_lista1.union(conj_lista2))))

# https://pt.stackoverflow.com/questions/407400/calcular-quantas-vezes-se-repetem-os-valores-dentro-de-uma-key-em-dicion%C3%A1rio-p
from collections import Counter


class SimpleReport:
    @classmethod
    def generate(cls, list):
        manufacturing_date_list = []
        expiration_date_list = []
        companies_list = []

        for product in list:
            manufacturing_date_list.append(product["data_de_fabricacao"])
            expiration_date_list.append(product["data_de_validade"])
            companies_list.append(product["nome_da_empresa"])

        oldest_manufacturing_date = min(manufacturing_date_list)
        closest_expiration_date = min(expiration_date_list)
        most_repeated_company = Counter(companies_list).most_common()[0][0]

        return (
            f"Data de fabricação mais antiga: {oldest_manufacturing_date}\n"
            f"Data de validade mais próxima: {closest_expiration_date}\n"
            f"Empresa com mais produtos: {most_repeated_company}"
        )

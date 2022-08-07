from collections import Counter
from .simple_report import SimpleReport


class CompleteReport(SimpleReport):
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
        companies_info = Counter(companies_list).most_common()
        # print("info", companies_list, companies_info)

        return (
            f"Data de fabricação mais antiga: {oldest_manufacturing_date}\n"
            f"Data de validade mais próxima: {closest_expiration_date}\n"
            f"Empresa com mais produtos: {most_repeated_company}\n"
            f"{cls.get_products_quantity(cls, companies_info)}"
        )

    def get_products_quantity(self, list):
        answer = "Produtos estocados por empresa:\n"

        for procuct in list:
            answer += f"- {procuct[0]}: {procuct[1]}\n"
            # print(procuct[1])

        # print(answer)
        return answer

import csv
import json
import xmltodict
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @classmethod
    def import_data(cls, path, type):
        if "csv" in path:
            with open(path, encoding="utf-8") as file:
                report_reader = csv.DictReader(file)
                report_info = list(report_reader)

        if "json" in path:
            with open(path) as file:
                report_info = json.load(file)

        if "xml" in path:
            with open(path) as file:
                xml_info = xmltodict.parse(file.read())["dataset"]["record"]
                report_info = list(xml_info)

        if type == "simples":
            return SimpleReport.generate(report_info)

        return CompleteReport.generate(report_info)

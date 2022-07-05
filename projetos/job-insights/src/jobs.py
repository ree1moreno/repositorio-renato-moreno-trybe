from functools import lru_cache
import csv


@lru_cache
def read(path):
    with open(path, encoding="utf-8") as file:
        jobs_reader = csv.DictReader(file)
        jobs_info = []
        for info in jobs_reader:
            jobs_info.append(info)

        # print("info", jobs_info[1])
    return jobs_info

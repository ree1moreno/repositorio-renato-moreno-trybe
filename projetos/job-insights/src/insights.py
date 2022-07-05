from .jobs import read


def get_unique_job_types(path):
    jobs_reader = read(path)
    jobs_types = set()
    for job in jobs_reader:
        jobs_types.add(job["job_type"])
    # print("tipos", jobs_types)
    return jobs_types


def filter_by_job_type(jobs, job_type):
    filtered_jobs = []

    for job in jobs:
        if job["job_type"] == job_type:
            filtered_jobs.append(job)
    # print("lista", filtered_jobs)
    return filtered_jobs


def get_unique_industries(path):
    jobs_reader = read(path)
    industries_types = set()
    for industry in jobs_reader:
        if industry["industry"] != "":
            industries_types.add(industry["industry"])
    # print("tipos", industries_types)
    return industries_types


def filter_by_industry(jobs, industry):
    filtered_industries = []

    for job in jobs:
        if job["industry"] == industry:
            filtered_industries.append(job)
    # print("lista", filtered_industries)
    return filtered_industries


def get_max_salary(path):
    jobs_reader = read(path)
    max_salary = 0

    for salary in jobs_reader:
        if salary["max_salary"].isdigit():
            if int(salary["max_salary"]) > max_salary:
                max_salary = int(salary["max_salary"])

    # print("maior salario", max_salary)
    return max_salary


def get_min_salary(path):
    jobs_reader = read(path)
    min_salary = 999999

    for salary in jobs_reader:
        if salary["min_salary"].isdigit():
            if int(salary["min_salary"]) < min_salary:
                min_salary = int(salary["min_salary"])

    # print("menor salario", min_salary)
    return min_salary


def matches_salary_range(job, salary):
    if "min_salary" not in job or "max_salary" not in job:
        raise ValueError("key doesn't exist")
    elif (
        type(job["min_salary"]) is not int
        or type(job["max_salary"]) is not int
        or type(salary) is not int
    ):
        raise ValueError("salary is not a number")
    elif job["min_salary"] > job["max_salary"]:
        raise ValueError("min_salary bigger than max_salary")
    elif job["min_salary"] <= salary <= job["max_salary"]:
        return True
    else:
        return False


def filter_by_salary_range(jobs, salary):
    filtered_jobs_list = []

    for job in jobs:
        try:
            if matches_salary_range(job, salary):
                filtered_jobs_list.append(job)
        except ValueError:
            print("Something went wrong.")

    return filtered_jobs_list

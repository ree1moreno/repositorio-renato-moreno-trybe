def study_schedule(permanence_period, target_time):
    # https://acervolima.com/python-frequencia-maxima-em-tupla/
    count = 0
    if target_time is None:
        return None

    for item in permanence_period:
        if type(item[0]) != int or type(item[1]) != int:
            return None

        if item[0] <= target_time <= item[1]:
            count += 1

    return count

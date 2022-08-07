def check_strings(first_string, second_string):
    if (
        first_string == ""
        or second_string == ""
        or len(first_string) != len(second_string)
    ):
        return False


def is_anagram(first_string, second_string):
    check_strings(first_string, second_string)

    lower_fisrt = first_string.lower()
    lower_second = second_string.lower()
    # https://www.techiedelight.com/pt/determine-if-two-strings-are-anagram-or-not/
    freq_first = {}
    freq_second = {}

    for letter in range(len(lower_fisrt)):
        freq_first[lower_fisrt[letter]] = (
            freq_first.get(lower_fisrt[letter], 0) + 1
        )

    for letter in range(len(lower_second)):
        freq_second[lower_second[letter]] = (
            freq_second.get(lower_second[letter], 0) + 1
        )

    return freq_first == freq_second

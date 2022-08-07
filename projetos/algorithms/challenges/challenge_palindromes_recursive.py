def is_palindrome_recursive(word, low_index, high_index):
    if len(word) == 0 or word[low_index] != word[high_index]:
        # print('1', word)
        return False

    if (low_index == high_index) or (low_index > high_index):
        # print('2', word, word[low_index], word[high_index])
        return True

    else:
        # print('3', word, word[low_index], word[high_index])
        return is_palindrome_recursive(word, low_index + 1, high_index - 1)

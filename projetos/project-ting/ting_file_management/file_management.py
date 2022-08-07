import sys


def txt_importer(path_file):
    if ".txt" not in path_file:
        return sys.stderr.write("Formato inválido\n")
    try:
        with open(path_file) as file:
            data = file.read().split("\n")
            return data
    except FileNotFoundError:
        return sys.stderr.write(f"Arquivo {path_file} não encontrado\n")

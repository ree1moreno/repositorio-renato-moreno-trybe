def exists_word(word, instance):
    for index in range(len(instance)):
        file = instance.search(index)
        line = 0
        data = {
            "palavra": word,
            "arquivo": file["nome_do_arquivo"],
            "ocorrencias": [],
        }

    for lines in file["linhas_do_arquivo"]:
        if word.lower() in lines.lower():
            line += 1
            data["ocorrencias"].append({"linha": line})

    info = list()
    if len(data["ocorrencias"]) > 0:
        info.append(data)

    return info


def search_by_word(word, instance):
    """Aqui irá sua implementação"""

from tech_news.database import search_news
from datetime import datetime


# https://datapeaker.com/big-data/procesamiento-de-imagenes-opencv-procesamiento-de-imagenes-con-opencv/
# Requisito 6
def search_by_title(title):
    news_list = list()
    news = search_news({"title": {"$regex": title, "$options": "i"}})

    for new in news:
        news_list.append((new["title"], new["url"]))

    return news_list


# Requisito 7
def search_by_date(date):
    news_list = list()
    # print("date", date)
    # https://docs.python.org/3/library/datetime.html
    try:
        news_date = datetime.strptime(date, "%Y-%m-%d")
        # print("news_date", news_date)
        news = search_news({"timestamp": news_date.strftime("%d/%m/%Y")})
        # print("news", news)
        for new in news:
            news_list.append((new["title"], new["url"]))
            # print("news_list", news_list)
        return news_list

    except ValueError:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_tag(tag):
    news_list = list()
    news = search_news({"tags": {"$regex": tag, "$options": "i"}})

    for new in news:
        news_list.append((new["title"], new["url"]))

    # print(news_list)
    return news_list


# Requisito 9
def search_by_category(category):
    news_list = list()
    news = search_news({"category": {"$regex": category, "$options": "i"}})

    for new in news:
        news_list.append((new["title"], new["url"]))

    return news_list

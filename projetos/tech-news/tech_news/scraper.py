import requests
import time
from parsel import Selector
from .database import create_news


# Requisito 1
def fetch(url):
    try:
        response = requests.get(url, headers={"user-agent": "Fake user-agent"})
        time.sleep(1)
    except requests.ReadTimeout:
        return None

    if response.status_code == 200:
        return response.text
    return None


# Requisito 2
def scrape_novidades(html_content):
    selector = Selector(text=html_content)
    news = selector.css(".archive-main .cs-overlay a::attr(href)").getall()

    return news


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(text=html_content)
    next_page = selector.css(".nav-links .next::attr(href)").get()

    return next_page


# Requisito 4
def scrape_noticia(html_content):
    selector = Selector(text=html_content)

    url = selector.css('head link[rel="canonical"]::attr(href)').get()
    title = selector.css("h1.entry-title::text").get().strip()
    timestamp = selector.css("li.meta-date::text").get()
    writer = selector.css("span.author a::text").get()
    comments_count = 0 or len(selector.css("ol.comment-list li").getall())
    summary_list = selector.css(
        "div.entry-content > p:nth-of-type(1) *::text"
    ).getall()
    summary = "".join(summary_list).strip()
    tags = selector.css("section.post-tags ul li a::text").getall()
    category = selector.css("a.category-style span.label::text").get()

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer,
        "comments_count": comments_count,
        "summary": summary,
        "tags": tags,
        "category": category,
    }


# Requisito 5
def get_tech_news(amount):
    url = "https://blog.betrybe.com"
    news_list = list()

    while amount > len(news_list):
        data = scrape_novidades(fetch(url))

        for link in data:
            if amount > len(news_list):
                result = scrape_noticia(fetch(link))
                news_list.append(result)

        url = scrape_next_page_link(fetch(url))

    print(news_list)
    create_news(news_list)
    return news_list

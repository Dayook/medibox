import requests
from bs4 import BeautifulSoup

url = "https://www.medicalnewstoday.com/";

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    titles = soup.select('#latest-news > ul > li > div > div > a')
    # images = soup.select('#latest-news > ul > li > div > figure > a > span > span > lazy-image')
    data_list = []
    medical_article = {
        "title": "",
        "url": "",
        "img": "",
        "contents": ""
    }

    for title in titles:

        detail_url = url + title['href']
        detail_response = requests.get(detail_url)
        if detail_response.status_code == 200:
            detail_html = detail_response.text
            detail_soup = BeautifulSoup(detail_html, 'html.parser')
            detail_image = detail_soup.select_one('figure > span > span > picture > img')
            detail_contents = detail_soup.select_one('article > div').get_text().replace('Share on Pinterest', '')
            # detail_contents = detail_contents.replace('Share on Pinterest', '')
            # print(detail_contents)
            medical_article = {"title": title.get_text(), "url": detail_url,
                               "img": detail_image['src'],
                               "contents": detail_contents}

        data_list.append(medical_article)

    for data in data_list:
        print(data)
    # print(data_list)
    #
    # print(images)
    # for image in images :
    #     print(image['src'])

else:
    print(response.status_code)

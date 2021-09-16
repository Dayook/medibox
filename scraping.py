from bs4 import BeautifulSoup
import urllib.request
from urllib.parse import quote


class Product:
    def __init__(self,
                 url: str,
                 title: str,
                 price: float,
                 img_url: str,
                 product_code: str
                 ):
        self.url = url
        self.title = title
        self.price = price
        self.img_url = img_url
        self.product_code = product_code


def get_iherb_product(product_num):
    url = 'https://kr.iherb.com/pr/' + str(product_num)



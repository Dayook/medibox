from PIL import Image
import json
import requests
from io import BytesIO


with open('./medicineData2.json', 'r', encoding='UTF-8') as f:
    json_data = json.load(f, strict=True)

json_data_copy = json_data[:]

for i in range(len(json_data) - 1) :
    try:
        print(json_data[i]['INSERT_FILE'])
        url = "https://www.pharm.or.kr:442/images/sb_photo/big3/" + json_data[i]['INSERT_FILE'][-20:-7] + "01.jpg"
        json_data[i]['DRUG_CD'] = json_data[i]['INSERT_FILE'][-20:-7] + "01"
        json_data[i]['COLOR'] = "A"
        response = requests.get(url)
        if response.status_code == 200:
            im = Image.open(BytesIO(response.content))
            pix = im.load()
            rgb = pix[im.size[0] * 3 / 4, im.size[1] * 4 / 11]
            json_data[i]['COLOR'] = 'rgb' + str(rgb)
            print(url + " " + json_data[i]['COLOR'])
    except KeyError:
        print("없다")

# json_data.replace("/", "")
with open('./medicineInfoWithColor3.json', 'w', encoding='UTF-8') as outfile:
    json.dump(json_data_copy, outfile, ensure_ascii=False)



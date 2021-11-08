from PIL import Image
import json
import requests
from io import BytesIO


with open('./medicineInfo.json', 'r', encoding='UTF-8') as f:
    json_data = json.load(f, strict=True)

for data in json_data :
    if data['INSERT_FILE']:
        url = "https://www.pharm.or.kr:442/images/sb_photo/big3/" + data['INSERT_FILE'][-20:-7] + "01.jpg"
        data['DRUG_CD'] = data['INSERT_FILE'][-20:-7] + "01"
        data['COLOR'] = ""
        response = requests.get(url)
        if response.status_code == 200:
            im = Image.open(BytesIO(response.content))
            pix = im.load()
            rgb = pix[im.size[0] * 3 / 4, im.size[1] * 4 / 11]
            data['COLOR'] = 'rgb' + str(rgb);
            print(url + " " + data['COLOR'])
# json_data.replace("/", "")
with open('./medicineInfoWithColor.json', 'w', encoding='UTF-8') as outfile:
    json.dump(json_data, outfile, ensure_ascii=False)



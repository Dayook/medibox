from PIL import Image
import json

with open('./medicineInfo.json', 'r', encoding='UTF8') as f:
    json_data = json.load(f)

print(json_data)
for data in json_data :
    print(data['INSERT_FILE'])

im = Image.open('./dahh.png')
pix = im.load()
print(im.size)
print(pix[20,30])

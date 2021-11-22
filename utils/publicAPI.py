import requests

url = 'http://apis.data.go.kr/1470000/DURPrdlstInfoService/'+ 'getUsjntTabooInfoList'\
      + '?ServiceKey=aGeQldhT9zqdEHY5KQKzNWlU%2BBPUa7SCjX8FRJtdYmyq%2F4PKERA22YLOFNh%2FAeiGNQGBhvtoI2pM5k5NKznxsg%3D%3D'\
      + '&pageNo=550&numOfRows=100'\

url = 'http://apis.data.go.kr/1470000/DURPrdlstInfoService/'+ 'getDurPrdlstInfoList'\
      + '?ServiceKey=aGeQldhT9zqdEHY5KQKzNWlU%2BBPUa7SCjX8FRJtdYmyq%2F4PKERA22YLOFNh%2FAeiGNQGBhvtoI2pM5k5NKznxsg%3D%3D'\
      + '&itemName=카스졸정'\
      + '&pageNo=1&numOfRows=100'

url = 'http://apis.data.go.kr/1470000/DURPrdlstInfoService/'+ 'getDurPrdlstInfoList'\
      + '?ServiceKey=aGeQldhT9zqdEHY5KQKzNWlU%2BBPUa7SCjX8FRJtdYmyq%2F4PKERA22YLOFNh%2FAeiGNQGBhvtoI2pM5k5NKznxsg%3D%3D'\
      + '&pageNo=2&numOfRows=100'

response = requests.get(url)

if response.status_code ==200:
      html = response.text
      print(html)
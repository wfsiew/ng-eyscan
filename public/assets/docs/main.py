import sys
import json

if __name__ == '__main__':

    path = 'Chinese.properties'

    f = open(path, mode='r', encoding='utf-8')
    lines = f.read().splitlines()
    f.close()

    data = {}

    for i, line in enumerate(lines):
        print(i, line)
        arr = line.split("=", 1)
        key = arr[0].strip()
        kkey = key.replace(' ', '.')
        kkey = kkey.lower()
        val = arr[1].strip()
        data[kkey] = val

    json_data = json.dumps(data, sort_keys=False, indent=2, separators=(',', ': '))
    print(json_data)

    text_file = open((path + ".json"), "w")
    text_file.write(json_data)
    text_file.close()

    print("wrote to", (path + ".json"))
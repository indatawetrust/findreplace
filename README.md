[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/findreplace.svg)](https://travis-ci.org/indatawetrust/findreplace)

# findreplace
Find and replace or add the desired value for the arrays.

#### install

```
npm i findreplace -S
```

```js
const findReplace = require('findreplace')

const data = [
  {
    "_id": "59a181ddb87ac4274f1d7d19",
    "name": "Camacho Richards"
  },
  {
    "_id": "59a181dd28bf0b9fc7d7e417",
    "name": "Lara Boyle"
  },
  {
    "_id": "59a181ddd082984625f118df",
    "name": "Blackburn Cervantes"
  },
  {
    "_id": "59a181ddb91ec935320c4bb4",
    "name": "Esther Jensen"
  },
  {
    "_id": "59a181ddb08e367b20c452fb",
    "name": "Chapman Leonard"
  }
]

const select = { "_id": "59a181ddb91ec935320c4bb4" },
      change = {
        "name": "Lynn Levy",
        "age": 25
      }

console.log(findReplace(data,select,change))

// log
[
  {
    "_id": "59a181ddb87ac4274f1d7d19",
    "name": "Camacho Richards"
  },
  {
    "_id": "59a181dd28bf0b9fc7d7e417",
    "name": "Lara Boyle"
  },
  {
    "_id": "59a181ddd082984625f118df",
    "name": "Blackburn Cervantes"
  },
  {
    "_id": "59a181ddb91ec935320c4bb4",
    "name": "Lynn Levy",
    "age": 25
  },
  {
    "_id": "59a181ddb08e367b20c452fb",
    "name": "Chapman Leonard"
  }
]
```

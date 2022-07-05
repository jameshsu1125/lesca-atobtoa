[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

It's increase charCode in special number. It's not easy to decode.

#### [Live Demo](https://jameshsu1125.github.io/lesca-atobtoa/)

# Installation

```sh
npm install lesca-atobtoa --save
```

## Usage

As a Node module:

```javascript
import Atobtoa from 'lesca-atobtoa';

const Data = { name: 'james', age: '18' };
const base64 = Atobtoa.toBase64(Data);
console.log(base64); //JTI1NUIlMjU3QiUyNTIybmFtZSUyNTIyJTI1M0ElMjUyMmphbWVzJTI1MjIlMjUyQyUyNTIyYWdlJTI1MjIlMjUzQTE4JTI1N0QlMjU1RA==
console.log(Atobtoa.toJson(base64)); //[{ name: 'james', age: 18 }]
```

## Development

### Methods

| method                                           |  description   |  default | return |
| :----------------------------------------------- | :------------: | -------: | -----: |
| .**toBase64**(**JSON**:_object_, **push**:_int_) | json to base64 | push = 1 | base64 |
| .**toJson**(**base64**:_string_, **push**:_int_) | base64 to json | push = 1 |   json |

### Features

- maintain if necessary

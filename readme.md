[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-atobtoa --save
```

# Usage

```javascript
import Atobtoa from 'lesca-atobtoa';
let Data = [
	{
		name: 'james',
		age: '18',
	},
];

const Data = [{ name: 'james', age: 18 }];
const base64 = Atobtoa.toBase64(Data);
console.log(base64); //JTI1NUIlMjU3QiUyNTIybmFtZSUyNTIyJTI1M0ElMjUyMmphbWVzJTI1MjIlMjUyQyUyNTIyYWdlJTI1MjIlMjUzQTE4JTI1N0QlMjU1RA==
console.log(Atobtoa.toJson(base64)); //[{ name: 'james', age: 18 }]
```

# Methods

| method         | options |  description   | default |
| :------------- | :-----: | :------------: | ------: |
| toBase64(JSON) |  json   | json to base64 |         |
| toJson(str)    |   str   | base64 to json |         |

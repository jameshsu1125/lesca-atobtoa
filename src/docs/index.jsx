import React from 'react';
import { render } from 'react-dom';
import MyClass from './../lib/index';
const Data = [{ name: 'james', age: 18 }];
const base64 = MyClass.toBase64(Data);
console.log(base64);
console.log(MyClass.toJson(base64));

import { toBase64, toJson } from './../lib/index';
console.log(toBase64, toJson);

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));

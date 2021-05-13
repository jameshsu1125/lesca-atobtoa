import React from 'react';
import { render } from 'react-dom';
import MyClass from './../lib/index';

const pushData = 3;
const Data = [{ name: 'james', age: 18 }];
const base64 = MyClass.toBase64(Data, pushData);
const result = MyClass.toJson(base64, pushData);
console.log(base64);
console.log(result);

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));

# ⚡ FAST  CAPTCHA ⚡
![Fast captcha logo](https://firebasestorage.googleapis.com/v0/b/optimus-8c379.appspot.com/o/importent%20npm%20package%20images%2Fsvgviewer-png-output.png?alt=media&token=f7930a9b-9900-436c-9cbb-896f2231cd34&_gl=1*1y4j5a9*_ga*MTY3MzI1OTg1Mi4xNjk4NDc3NDkw*_ga_CW55HF8NVT*MTY5ODU4MDAyOC4yLjEuMTY5ODU4MDE3MS41Ny4wLjA.)

By using "Fast Captcha," you can enhance the security and user experience of your web application by adding CAPTCHA protection to your forms. This npm package simplifies the process of CAPTCHA generation and validation, helping you guard against automated spam and fraudulent submissions.

## Installation

To install the Fast Captcha package, you can use npm:

```console
npm install fast-captcha
```
## Usage
**Generate a new CAPTCHA:**
```js
const { getNewCaptcha } = require('fast-captcha');

const newCaptcha = getNewCaptcha();
console.log('CAPTCHA ID:', newCaptcha.id); // unique image id
console.log('CAPTCHA Data URL:', newCaptcha.imageData); // base64 image

```
**Verify a new CAPTCHA:**
```js
const { verifyCaptcha} = require('fast-captcha');

const userAnswer = '1aOMC'; 
const captchaId = newCaptcha.id; 

const isVerified = .verifyCaptcha(captchaId, userAnswer);
console.log('CAPTCHA Verification Result:', isVerified); // true or false

if(isVerified){
    console.log("okkkkkk");
}
else{
    console.log("Wrong Captcha");
}

```


#### Parameters:

- `captchaId`: repalce with your uniqe captcha id.
- `userAnswer`: Enter answer of captcha.
#### Returns:

It Return True Or False Boolean Value.


## Express Example
**Show Captcha Image:**
```js
const express = require('express')
const app = express()
const { getNewCaptcha } = require('fast-captcha');

app.get('/', function (req, res) {
    let Captcha = getNewCaptcha();
    let uniqId = Captcha.id; // store it in you database to cross check captcha 
    res.send(`<img src="${Captcha.imageData}">`);
})

app.listen(3000, () => console.log("app running on port http://localhost:3000"))
```
```console
$ npm install
```

  Start the server:

```console
$ npm start
```

View the website at: http://localhost:3000


## License


[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This project is released under the [MIT License](LICENSE).  
**Free Package, Hell Yeah!**



## Contact

**[avinashtare.work@gmail.com](mailto:avinashtare.work@gmail.com)**

## Author
**卐🕉 Avinash Tare 🕉 卐**
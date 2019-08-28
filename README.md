# CRYPTKHEN
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/%40ryanbekhen%2Fcryptkhen.svg)](https://badge.fury.io/js/%40ryanbekhen%2Fcryptkhen)

## Features
Cryptkhen is simple module of security signature for encryption data with RSA.

* Generate Key Pair
* Encrypt plain text using private key or public key RSA
* Decrypt plain text using private key or public key RSA

## Installing
```shell script
npm i @ryanbekhen/cryptkhen
```
> <sub>Requires nodejs >= 10.12.0</sub>

## Example Code
Generate RSA Key pair:
```javascript
const { SignatureRSA } = require('@ryanbekhen/cryptkhen');
signatureRSA = new SignatureRSA({
    modulusLength: 4096 // Recommended using modulus length 4096
});
let signatureKey = signatureRSA.generateKeyPair();
console.log(signatureKey.publicKey);
console.log(signatureKey.privateKey);
```

Encrypt text using public key:
```javascript
const { RSAEncryption } = require('@ryanbekhen/cryptkhen');
let encryptText = RSAEncryption.encrypt({
    plainText: "test",
    pemKey: signatureKey.publicKey // public key permission
});
console.log(encryptText);
```

Decrypt text using private key:
```javascript
const { RSAEncryption } = require('@ryanbekhen/cryptkhen');
let decryptText = RSAEncryption.decrypt({
    encryptionText: encryptText, // Encrypt text
    pemKey: signatureKey.privateKey // private key public
});
console.log(decryptText);
```

## Contributing
Questions, comments, bug reports, and pull requests are all welcome

# CRYPTKHEN

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/%40ryanbekhen%2Fcryptkhen.svg)](https://badge.fury.io/js/%40ryanbekhen%2Fcryptkhen)

## Features

Cryptkhen library is a simple security signature module for encrypted data with reference from Node.js
[crypto module](https://nodejs.org/api/crypto.html).

* Generate Key Pair
* Encrypt plain text using private key or public key RSA
* Decrypt plain text using private key or public key RSA

## Installing

```shell script
yarn add @ryanbekhen/cryptkhen # yarn package manager

npm i @ryanbekhen/cryptkhen # npm package manager
```

> Requires nodejs >= 10.23.1

## Example Code

Load module to project:

```typescript & javascript
// In Typescript
import { Cryptkhen } from '@ryanbekhen/cryptkhen';
const cryptkhen: Cryptkhen = new Cryptkhen();

// In Javascript
const { Cryptkhen } = require("@ryanbekhen/cryptkhen");
const cryptkhen = new Cryptkhen();
```

Generate RSA Key Pair:

```typescript
const { publicKey, privateKey } = cryptkhen.generateKeypair(2048);
```

Encrypt or Decrypt using passphrase:

```typescript & javascript
// in generate key pair must have modulus lenght and passphrase 
const { publicKey, privateKey } = cryptkhen.generateKeypair(2048, 'passphrase');

// Encrypt
const encryptText = cryptkhen.encrypt('Hello World!', publicKey);

// Decrypt
const decrypt = cryptkhen.decrypt(encryptText, privateKey);
```
 




If you encrypt using a public key, you must decrypt it using the private key and vice versa.

## Contributing

Questions, comments, bug reports, and pull requests are all welcome

## Donate

[![npm version](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=ryanbekhen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/ryanbekhen)

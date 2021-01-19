# CRYPTKHEN

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Features

Cryptkhen is simple module of security signature for encryption data with RSA.

* Generate Key Pair
* Encrypt plain text using private key or public key RSA
* Decrypt plain text using private key or public key RSA

## Installing

```shell script
yarn add @ryanbekhen/cryptkhen
```

><sub>Requires nodejs >= 14.15.1</sub>

## Example Code

Generate RSA Key pair:

```typescript
import { Cryptkhen } from '@ryanbekhen/cryptkhen';

const cryptkhen: Cryptkhen = new Cryptkhen();
const { publicKey, privateKey } = cryptkhen.generateKeypair(2048);

console.log(publicKey);
console.log(privateKey);
```

Encrypt text using public key:

```typescript
import { Cryptkhen } from '@ryanbekhen/cryptkhen';

const cryptkhen: Cryptkhen = new Cryptkhen();
const result: any = cryptkhen.encrypt('test', publicKey);
console.log(result);
```

Decrypt text using private key:

```typescript
import { Cryptkhen } from '@ryanbekhen/cryptkhen';

const cryptkhen: Cryptkhen = new Cryptkhen();
const result: any = cryptkhen.encrypt('pem key', publicKey);
console.log(result);
```

## Contributing

Questions, comments, bug reports, and pull requests are all welcome
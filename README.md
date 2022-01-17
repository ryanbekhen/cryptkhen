# CRYPTKHEN

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/%40ryanbekhen%2Fcryptkhen.svg)](https://badge.fury.io/js/%40ryanbekhen%2Fcryptkhen)

Node.js library for simple implementation of encryption, decryption and digital signatures based on the Node.js [crypto module](https://nodejs.org/api/crypto.html)

## Features

- Encryption & Decryption (RSA, AES-256).
- Generate signature & verify (RSA)

## Install

```bash
npm i @ryanbekhen/cryptkhen
```

## Quick start

First of all, initialize:

```typescript
import { AES256Encryption, RSAEncryption } from '@ryanbekhen/cryptkhen';
const aes256 = new AES256Encryption('secret');
const rsa = new RSAEncryption();
```

### AES-256

Before encrypting data of type string, the data is first converted into a buffer. The encrypted data will be in the form of a buffer and converted to base64.

```typescript
const data = Buffer.from('data');
const encryptedText = aes256.encrypt(data).toString('base64');
```

When decrypting encrypted text, the encrypted text will be converted into a buffer first. The decrypted data will be buffered and converted to a string.

```typescript
const decryptedText = aes256.decrypt(Buffer.from(encryptedText, 'base64')).toString();
```

If you are encrypting a file that will produce an encrypted file, there is no need to change the encryption result to base64 because the encryption result in the form of a buffer will be written into a new file, for example it will be written in the `data.enc` file.

### RSA

When generating a public key and a private key, the function defaults to using bits of size 2048 without a passphrase.

```typescript
const pem = await rsa.generateKey();
```

Text encryption will produce encrypted text in base64 form.

```typescript
const encryptedText = rsa.encrypt(pem.publicKey, 'data');
```

When decrypting encrypted text, a passphrase is required if at the time of generating the RSA key the passphrase is used.

```typescript
const decryptedText = rsa.decrypt(pem.privateKey, encryptedText);
```

Create digital signatures based on verifiable data.

```typescript
const signature = rsa.signature(pem.privateKey, 'data');
```

Verify signature authenticity.

```typescript
const verify = rsa.isVerified(pem.publicKey, signature, 'data');
```

## Contributing

Questions, comments, bug reports, and pull requests are all welcome.

## License

This software is licensed under the [Apache 2 license](./LICENSE).

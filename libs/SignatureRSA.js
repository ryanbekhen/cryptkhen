'use strict';
const { generateKeyPairSync } = require('crypto');

module.exports = class SignatureRSA {
    constructor({modulusLength: modulusLength}){
        console.log(`Using modulus length ${modulusLength}`);
        this.modulusLength = modulusLength;
        this.publicKeyEncoding = {
            type: 'spki',
            format: 'pem'
        };
        this.privateKeyEncoding = {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: ''
        }
    }

    generateKeyPair() {
        const { publicKey, privateKey } = generateKeyPairSync('rsa', {
            modulusLength: this.modulusLength,
            publicKeyEncoding: this.publicKeyEncoding,
            privateKeyEncoding: this.privateKeyEncoding
        });

        return {
            publicKey: publicKey,
            privateKey: privateKey
        }
    }
};
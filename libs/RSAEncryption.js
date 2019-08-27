'use strict';
const formatPemKey = require('./formats/formats');
const crypto = require('crypto');

module.exports = class RSAEncryption {
    static encrypt({plainText='', pemKey}) {
        const buffer = Buffer.from(plainText);
        let resultEncrypt;
        if (formatPemKey.isPublicKey(pemKey)) {
            resultEncrypt = crypto.publicEncrypt(pemKey, buffer);
        } else if (formatPemKey.isPrivateKey(pemKey)) {
            resultEncrypt = crypto.privateEncrypt(pemKey, buffer);
        } else {
            const error = new Error();
            error.name = 'ErrorPublicOrPrivateKey';
            error.message = 'Invalid pemKey, you must enter a good formats public key or private key';
            throw error;
        }
        return resultEncrypt.toString("base64");
    }

    static decrypt({encryptionText = '', pemKey}) {
        let buffer = Buffer.from(encryptionText, "base64");
        let resultDecrypt;
        if (formatPemKey.isPublicKey(pemKey)) {
            resultDecrypt = crypto.publicDecrypt(pemKey, buffer)
        } else if (formatPemKey.isPrivateKey(pemKey)) {
            resultDecrypt = crypto.privateDecrypt(pemKey, buffer);
        } else {
            const error = new Error();
            error.name = 'ErrorPublicOrPrivateKey';
            error.message = 'Invalid pemKey, you must enter a good formats public key or private key';
            throw error;
        }
        return resultDecrypt.toString('utf8');
    }
};
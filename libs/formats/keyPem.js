'use strict';

const PRIVATE_OPENING_BOUNDARY = "-----BEGIN ENCRYPTED PRIVATE KEY-----";
const PRIVATE_CLOSING_BOUNDARY = "-----END ENCRYPTED PRIVATE KEY-----";
const PUBLIC_OPENING_BOUNDARY = "-----BEGIN PUBLIC KEY-----";
const PUBLIC_CLOSING_BOUNDARY = "-----END PUBLIC KEY-----";

function isPrivateKey(pemKey) {
    return pemKey.includes(PRIVATE_OPENING_BOUNDARY) && pemKey.includes(PRIVATE_CLOSING_BOUNDARY);
}

function isPublicKey(pemKey) {
    return pemKey.includes(PUBLIC_OPENING_BOUNDARY) && pemKey.includes(PUBLIC_CLOSING_BOUNDARY)
}

module.exports = {
    isPrivateKey: isPrivateKey,
    isPublicKey: isPublicKey,
    isPemKey: function (pemKey) {
        return isPrivateKey(pemKey) || isPublicKey(pemKey)
    }
};
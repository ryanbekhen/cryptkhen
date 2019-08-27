'use strict';
module.exports = {
    isPrivateKey: require('./keyPem').isPrivateKey,
    isPublicKey: require('./keyPem').isPublicKey,
    isPemKey: require('./keyPem').isPemKey
};
import { privateEncrypt, publicEncrypt, privateDecrypt, publicDecrypt } from 'crypto';
import { PemFormat } from '../common/formats/pem.format';

export class RSAEncryption {
  static encrypt(plainText: any, pem: any) {
    const buffer = Buffer.from(plainText);
    let chipher: any;

    if (PemFormat.isPublicKey(pem)) {
      chipher = publicEncrypt(pem, buffer);
    } else if (PemFormat.isPrivateKey(pem)) {
      chipher = privateEncrypt(
        {
          key: pem,
          passphrase: '',
        },
        buffer,
      );
    } else {
      throw new Error('Invalid pemKey, you must enter a good formats public key or private key');
    }
    return chipher.toString('base64');
  }

  static decrypt(chipher: any, pem: any) {
    const buffer = Buffer.from(chipher, 'base64');
    let plainText;

    if (PemFormat.isPublicKey(pem)) {
      plainText = publicDecrypt(pem, buffer);
    } else if (PemFormat.isPrivateKey(pem)) {
      plainText = privateDecrypt(
        {
          key: pem,
          passphrase: '',
        },
        buffer,
      );
    } else {
      throw new Error('Invalid pemKey, you must enter a good formats public key or private key');
    }
    return plainText.toString('utf-8');
  }
}

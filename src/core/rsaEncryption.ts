import { privateEncrypt, publicEncrypt, privateDecrypt, publicDecrypt } from 'crypto';
import { PemFormat } from '../common/formats/pem.format';

export class RSAEncryption {
  static encrypt(plainText: any, pem: any, passphrase: string) {
    const buffer = Buffer.from(plainText);
    let cipher: any;

    if (PemFormat.isPublicKey(pem)) {
      cipher = publicEncrypt(pem, buffer);
    } else if (PemFormat.isPrivateKey(pem)) {
      cipher = privateEncrypt(
        {
          key: pem,
          passphrase: passphrase,
        },
        buffer,
      );
    } else {
      throw new Error('Invalid pemKey, you must enter a good formats public key or private key');
    }
    return cipher.toString('base64');
  }

  static decrypt(cipher: any, pem: any, passphrase: string) {
    const buffer = Buffer.from(cipher, 'base64');
    let plainText;

    if (PemFormat.isPublicKey(pem)) {
      plainText = publicDecrypt(pem, buffer);
    } else if (PemFormat.isPrivateKey(pem)) {
      plainText = privateDecrypt(
        {
          key: pem,
          passphrase: passphrase,
        },
        buffer,
      );
    } else {
      throw new Error('Invalid pemKey, you must enter a good formats public key or private key');
    }
    return plainText.toString('utf-8');
  }
}

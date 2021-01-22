import { ModulusLength } from '../common/types/modulusLength.type';
import { KeyPairSyncResult } from 'crypto';
import { SignatureRSA } from './signatureRSA';
import { RSAEncryption } from './rsaEncryption';

export class Cryptkhen {
  generateKeypair(modulusLength?: ModulusLength, passphrase?: string): KeyPairSyncResult<string, string> {
    const _passphrase = passphrase == undefined ? '' : passphrase;
    const signatureRSA: SignatureRSA = new SignatureRSA(_passphrase, modulusLength);
    return signatureRSA.generateKeyPair();
  }

  encrypt(plainText: any, pem: any, passphrase?: string) {
    const _passphrase = passphrase == undefined ? '' : passphrase;
    return RSAEncryption.encrypt(plainText, pem, _passphrase);
  }

  decrypt(cipher: any, pem: any, passphrase?: string) {
    const _passphrase = passphrase == undefined ? '' : passphrase;
    return RSAEncryption.decrypt(cipher, pem, _passphrase);
  }
}

import { ModulusLength } from '../common/types/modulusLength.type';
import { KeyPairSyncResult } from 'crypto';
import { SignatureRSA } from './signatureRSA';
import { RSAEncryption } from './rsaEncryption';

export class Cryptkhen {
  generateKeypair(modulusLength?: ModulusLength): KeyPairSyncResult<string, string> {
    const signatureRSA: SignatureRSA = new SignatureRSA(modulusLength);
    return signatureRSA.generateKeyPair();
  }

  encrypt(plainText: any, pem: any) {
    return RSAEncryption.encrypt(plainText, pem);
  }

  decrypt(chipher: any, pem: any) {
    return RSAEncryption.decrypt(chipher, pem);
  }
}

import { ModulusLength } from '../common/types/modulusLength.type';
import { generateKeyPairSync, KeyPairSyncResult, RSAKeyPairOptions } from 'crypto';

export class SignatureRSA {
  private _modulusLength: number;
  private _privateKeyEncoding: object;
  private _publicKeyEncoding: object;

  constructor(passphrase: string, modulusLength?: ModulusLength) {
    this._modulusLength = modulusLength === undefined ? 2048 : modulusLength;
    this._publicKeyEncoding = {
      type: 'spki',
      format: 'pem',
    };
    this._privateKeyEncoding = {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: passphrase,
    };
  }

  generateKeyPair(): KeyPairSyncResult<string, string> {
    return generateKeyPairSync('rsa', <RSAKeyPairOptions<'pem', 'pem'>>{
      modulusLength: this._modulusLength,
      publicKeyEncoding: this._publicKeyEncoding,
      privateKeyEncoding: this._privateKeyEncoding,
    });
  }
}

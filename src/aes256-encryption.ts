import { AES256CBC, AES256CGM } from "./encryptions";
import { AES256Base } from "./encryptions/aes256-base";
import { CipherAlgorithm } from "./types";

export class AES256Encryption {
  private aes256base: AES256Base;

  constructor(key: string, algorithm?: CipherAlgorithm) {
    algorithm = algorithm ? algorithm : 'aes-256-cbc';
    switch (algorithm) {
      case 'aes-256-cbc':
        this.aes256base = new AES256CBC(key, algorithm);
        break;
      case 'aes-256-gcm':
        this.aes256base = new AES256CGM(key, algorithm);
        break;
    }
  }

  encrypt(data: Buffer): Buffer {
    return this.aes256base.encrypt(data);
  }

  decrypt(data: Buffer): Buffer {
    return this.aes256base.decrypt(data);
  }
}
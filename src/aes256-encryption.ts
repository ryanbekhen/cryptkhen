import { AES256CBC, AES256CGM } from './encryptions';
import { AES256Base } from './encryptions/aes256-base';
import { CipherAES256Mode } from './types';

/**
 * Advanced Encryption Standard (AES) symmetric algorithm with 256 bit key size.
 */
export class AES256Encryption {
  private aes256base: AES256Base;

  /**
   * @param key - encryption key
   * @param mode - encryption operation mode
   */
  constructor(key: string, mode?: CipherAES256Mode) {
    mode = mode ? mode : 'cbc';
    switch (mode) {
      case 'cbc':
        this.aes256base = new AES256CBC(key, mode);
        break;
      case 'gcm':
        this.aes256base = new AES256CGM(key, mode);
        break;
    }
  }

  /**
   * Encrypt data
   * @param data - data to be encrypted
   * @returns encrypted data in the form of a buffer
   */
  encrypt(data: Buffer): Buffer {
    return this.aes256base.encrypt(data);
  }

  /**
   * Decrypt data
   * @param data - encrypted data in the form of a buffer
   * @returns the result of the decryption is in the form of a buffer
   */
  decrypt(data: Buffer): Buffer {
    return this.aes256base.decrypt(data);
  }
}

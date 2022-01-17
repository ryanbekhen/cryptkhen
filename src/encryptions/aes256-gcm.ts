import { randomBytes, pbkdf2Sync, createCipheriv, CipherGCMTypes, createDecipheriv } from 'crypto';
import { AES256Base } from './aes256-base';

export class AES256CGM extends AES256Base {
  // initialization vector length
  public ivLength: number = 16;

  public encrypt(data: Buffer): Buffer {
    const iv = randomBytes(this.ivLength);
    const salt = randomBytes(64);
    const key = pbkdf2Sync(this.key, salt, 2145, 32, 'sha512');
    const cipher = createCipheriv(('aes-256-' + this.mode) as CipherGCMTypes, key, iv, {
      authTagLength: 16,
    });
    const cipherText = Buffer.concat([cipher.update(data), cipher.final()]);
    const tag = cipher.getAuthTag();
    const encrypted = Buffer.concat([salt, iv, tag, cipherText]);
    return encrypted;
  }

  public decrypt(data: Buffer): Buffer {
    const salt = data.slice(0, this.ivLength * 4);
    const iv = data.slice(this.ivLength * 4, this.ivLength * 4 + this.ivLength);
    const tag = data.slice(this.ivLength * 4 + this.ivLength, this.ivLength * 4 + this.ivLength * 2);
    const encrypted = data.slice(this.ivLength * 4 + this.ivLength * 2);
    const key = pbkdf2Sync(this.key, salt, 2145, 32, 'sha512');
    const decipher = createDecipheriv(('aes-256-' + this.mode) as CipherGCMTypes, key, iv, {
      authTagLength: 16,
    });
    decipher.setAuthTag(tag);
    const decrypt = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypt;
  }
}

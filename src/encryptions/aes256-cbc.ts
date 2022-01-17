import { createHash, randomBytes, createCipheriv, createDecipheriv } from 'crypto';
import { AES256Base } from './aes256-base';

export class AES256CBC extends AES256Base {
  // initialization vector length
  public ivLength: number = 16;

  public encrypt(data: Buffer): Buffer {
    const key = createHash('sha256').update(this.key).digest();
    const iv = randomBytes(this.ivLength);
    const cipher = createCipheriv('aes-256-' + this.mode, key, iv);
    const encrypted = Buffer.concat([iv, cipher.update(data), cipher.final()]);
    return encrypted;
  }

  public decrypt(data: Buffer): Buffer {
    const key = createHash('sha256').update(this.key).digest();
    const iv = data.slice(0, this.ivLength);
    const encrypted = data.slice(this.ivLength);
    const decipher = createDecipheriv('aes-256-' + this.mode, key, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted;
  }
}

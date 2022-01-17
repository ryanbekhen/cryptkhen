import { CipherAES256Mode } from '../types';

export abstract class AES256Base {
  public abstract readonly ivLength: number;

  constructor(protected key: string, protected mode: CipherAES256Mode) {}

  public abstract encrypt(data: Buffer): Buffer;
  public abstract decrypt(data: Buffer): Buffer;
}

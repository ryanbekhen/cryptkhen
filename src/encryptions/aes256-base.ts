import { CipherAlgorithm } from "../types";

export abstract class AES256Base {

  public abstract readonly ivLength: number;

  constructor(protected key: string, protected algorithm: CipherAlgorithm) { }

  public abstract encrypt(data: Buffer): Buffer;
  public abstract decrypt(data: Buffer): Buffer;

}
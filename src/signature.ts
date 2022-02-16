import { createHash } from 'crypto';
import { Encoding, SignAlgorithm } from './types';

export class Signature {
  private algorithm: SignAlgorithm;
  private encoding: Encoding;
  constructor(algorithm: SignAlgorithm, encoding?: Encoding) {
    this.algorithm = algorithm;
    this.encoding = encoding ? encoding : 'base64';
  }

  generate(data: string) {
    const hash = createHash(this.algorithm);
    hash.update(data);
    const createSignature = hash.digest().toString(this.encoding);
    return createSignature;
  }

  verify(data: string, signature: string) {
    const createSignature = this.generate(data);
    return createSignature === signature;
  }
}

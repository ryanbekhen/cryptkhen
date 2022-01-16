export class PemFormat {
  private static PRIVATE_OPENING_BOUNDARY = '-----BEGIN ENCRYPTED PRIVATE KEY-----';
  private static PRIVATE_CLOSING_BOUNDARY = '-----END ENCRYPTED PRIVATE KEY-----';
  private static PUBLIC_OPENING_BOUNDARY = '-----BEGIN PUBLIC KEY-----';
  private static PUBLIC_CLOSING_BOUNDARY = '-----END PUBLIC KEY-----';

  public static isPrivateKey(key: string): boolean {
    return key.includes(this.PRIVATE_OPENING_BOUNDARY) && key.includes(this.PRIVATE_CLOSING_BOUNDARY);
  }

  public static isPublicKey(key: string): boolean {
    return key.includes(this.PUBLIC_OPENING_BOUNDARY) && key.includes(this.PUBLIC_CLOSING_BOUNDARY);
  }
}

export class PemFormat {
  private static PRIVATE_OPENING_BOUNDARY = '-----BEGIN ENCRYPTED PRIVATE KEY-----';
  private static PRIVATE_CLOSING_BOUNDARY = '-----END ENCRYPTED PRIVATE KEY-----';
  private static PUBLIC_OPENING_BOUNDARY = '-----BEGIN PUBLIC KEY-----';
  private static PUBLIC_CLOSING_BOUNDARY = '-----END PUBLIC KEY-----';

  public static isPrivateKey(pem: any) {
    return pem.includes(this.PRIVATE_OPENING_BOUNDARY) && pem.includes(this.PRIVATE_CLOSING_BOUNDARY);
  }

  public static isPublicKey(pem: any) {
    return pem.includes(this.PUBLIC_OPENING_BOUNDARY) && pem.includes(this.PUBLIC_CLOSING_BOUNDARY);
  }
}

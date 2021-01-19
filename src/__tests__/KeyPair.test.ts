import { PemFormat } from '../common/formats/pem.format';
import { Cryptkhen } from '../index';

test('Test generate keypair', () => {
  let cryptkhen = new Cryptkhen();
  let { publicKey, privateKey } = cryptkhen.generateKeypair(2048);
  expect(PemFormat.isPublicKey(publicKey)).toBe(true);
  expect(PemFormat.isPrivateKey(privateKey)).toBe(true);
});

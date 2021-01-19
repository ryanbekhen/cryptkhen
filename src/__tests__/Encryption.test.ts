import { Cryptkhen } from '../core/cryptkhen';

test('Encrypt and decrypt', () => {
  let cryptkhen = new Cryptkhen();
  let { publicKey, privateKey } = cryptkhen.generateKeypair(2048);

  let textPrivateEncrypt = 'text';
  let chipherPrivateEncrypt = cryptkhen.encrypt(textPrivateEncrypt, publicKey);
  let resultPrivateEncrypt = cryptkhen.decrypt(chipherPrivateEncrypt, privateKey);
  expect(resultPrivateEncrypt).toBe(textPrivateEncrypt);
});

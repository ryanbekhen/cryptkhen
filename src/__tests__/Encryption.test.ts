import { Cryptkhen } from '../core/cryptkhen';

test('Encrypt and decrypt', () => {
  let cryptkhen = new Cryptkhen();
  let { publicKey, privateKey } = cryptkhen.generateKeypair(2048);

  let textPrivateEncrypt = 'text';
  let cipherPrivateEncrypt = cryptkhen.encrypt(textPrivateEncrypt, publicKey);
  let resultPrivateEncrypt = cryptkhen.decrypt(cipherPrivateEncrypt, privateKey);
  expect(resultPrivateEncrypt).toBe(textPrivateEncrypt);
});

test('Encrypt and decrypt passphrase', () => {
  let cryptkhen = new Cryptkhen();
  let { publicKey, privateKey } = cryptkhen.generateKeypair(2048, 'passphrase');

  let textPrivateEncrypt = 'text';
  let cipherPrivateEncrypt = cryptkhen.encrypt(textPrivateEncrypt, privateKey, 'passphrase');
  let resultPrivateEncrypt = cryptkhen.decrypt(cipherPrivateEncrypt, publicKey);
  expect(resultPrivateEncrypt).toBe(textPrivateEncrypt);
});

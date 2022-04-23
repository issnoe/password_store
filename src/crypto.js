const CryptoJS = require("crypto-js");

class Crypto {
  secret_key;
  constructor(secret_key) {
    this.secret_key = secret_key;
  }
  encrypt(message) {
    return CryptoJS.AES.encrypt(message, this.secret_key).toString();
  }
  decrypt(cipher) {
    const bytes = CryptoJS.AES.decrypt(cipher, this.secret_key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  encryptJson(data) {
    // Encrypt
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.secret_key
    ).toString();
  }
  decryptJson(ciphertext) {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, this.secret_key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
module.exports = new Crypto(process.env.SECRET_KEY);

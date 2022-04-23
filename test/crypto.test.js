const Crypto = require("../src/crypto");

test.skip("Crypto add and check  ", () => {
  const cipher = Crypto.encrypt("password123");
  console.log(cipher);
  const decrypt = Crypto.decrypt(cipher);
  console.log(decrypt);
  expect(decrypt).toBe("password123");
});
test.skip("Encrypt json to hash", () => {
  const a = [
    {
      id: "google",
      accound: "luisnoejasso@gmail.com",
      password: "123utbx735128735",
    },
  ];
  const s = Crypto.encryptJson(a);
  console.log(s);
});
test.skip("Decryp", () => {
  const a =
    "U2FsdGVkX18VEJY3OUptYZMScv7qw+i85yi3z/v44MwGZO8kGCLSt7G8TGwunfIxTniKhNL2n45YdPUHQG99iiTUbK+pZ7uJ2zBqALXmsFK4yNTQUyKlWmDC0qocHA1OPusXpnD71xOhrxtHO/1lVQ==";
  const s = Crypto.decryptJson(a);
  console.log(s);
});

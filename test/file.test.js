const File = require("../src/file");
test.skip("File write", () => {
  const filewrite = File.write(
    "U2FsdGVkX18VEJY3OUptYZMScv7qw+i85yi3z/v44MwGZO8kGCLSt7G8TGwunfIxTniKhNL2n45YdPUHQG99iiTUbK+pZ7uJ2zBqALXmsFK4yNTQUyKlWmDC0qocHA1OPusXpnD71xOhrxtHO/1lVQ=="
  );
});

test.skip("File read", async () => {
  const filewrite = await File.read();
  console.log(filewrite.toString());
});

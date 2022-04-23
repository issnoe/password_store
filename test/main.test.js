const Main = require("../src/main");
test.skip("Save", async () => {
  Main.save({
    id: "facebook",
    account: "@gmail.com",
    password: "hjkdhas",
  });
});

test.skip("Search", async () => {
  Main.searchByEmail("@gmail.com");
});

test.skip("Get Password", async () => {
  Main.getPassword(0);
});

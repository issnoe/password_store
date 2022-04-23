const util = require("util");
const Main = require("./main");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(readline.question).bind(readline);

async function add(message) {
  try {
    return await question(message);
  } catch (err) {
    console.error("Question rejected", err);
  }
}

class ReadLine {
  options;
  constructor(options) {
    this.options = options;
  }
  async inputPrompRequest() {
    let credential = {};
    const id = await add("Id: ");
    const mail = await add("Accound: ");
    const password = await add("Password: ");

    credential.id = id;
    credential.account = mail;
    credential.password = password;
    console.table(credential);
    return credential;
  }
  async inputPrompRequestMail() {
    const mail = await add("Accound: ");
    return mail;
  }
  async inputPrompRequestIndex() {
    const index = await add("Index: ");
    return index;
  }

  start() {
    this.options();
    readline.setPrompt("Pass> ");
    readline.prompt();

    readline
      .on("line", async (line) => {
        switch (line) {
          case "1":
            const data = await this.inputPrompRequest();
            Main.save(data);
            this.options();
            break;
          case "2":
            const mail = await this.inputPrompRequestMail();
            const list = await Main.searchByEmail(mail);
            console.table(list);
            this.options();
            break;
          case "3":
            const indexObject = await this.inputPrompRequestIndex();
            const password = await Main.getPassword(indexObject);
            console.table(password);
            this.options();
            break;
          case "4":
            const listAll = await Main.getStore();
            console.table(listAll);
            this.options();
            break;
        }
        readline.prompt();
      })
      .on("close", function () {
        console.log("Saved ");
        process.exit(0);
      });
  }
  basic(call) {
    call();
    readline.setPrompt("Pass> ");
    readline.prompt();

    readline
      .on("line", function (line) {
        switch (line.trim()) {
          case "hello":
            console.log("woreadlined!");
            break;
          default:
            console.log("Say what? I might have heard `" + line.trim() + "`");
            break;
        }
        readline.prompt();
      })
      .on("close", function () {
        console.log("Have a great day!");
        process.exit(0);
      });
  }

  run() {
    const fn = async () => {
      try {
        const answer = await question("What is you favorite food? ");
        if (answer == "exit") {
          readline.close();
        } else {
          console.log(`Oh, so your favorite food is ${answer}`);
          fn();
        }
      } catch (err) {
        console.error("Question rejected", err);
      }
    };
    fn();
  }
}

module.exports = ReadLine;

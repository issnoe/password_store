const fs = require("fs");

class File {
  async write(data) {
    return fs.writeFileSync("file.log", data);
  }
  async read() {
    return fs.readFileSync("file.log");
  }
}

module.exports = new File();

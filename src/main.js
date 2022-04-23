const File = require("./file");
const Crypto = require("./crypto");

class Main {
  constructor() {
    this.store = [];
  }
  search(id) {
    return this.store.findIndex((e) => e.id === id);
  }
  searchAccount(account) {
    return this.store
      .map((elemen, index) => ({
        ...elemen,
        index,
      }))
      .filter((e) => e.account === account);
  }
  async setStore() {
    try {
      const filewrite = await File.read();
      this.store = Crypto.decryptJson(filewrite.toString()) || [];
    } catch (error) {
      console.log(error);
    }
  }
  getStore() {
    this.store;
  }
  async save(newElement) {
    await this.setStore();
    const uniqueId = `${newElement.id}@${newElement.account}`;
    const exist = this.search(uniqueId);
    const aux = this.store;
    if (exist === -1) {
      newElement.password = Crypto.encrypt(newElement.password);
      newElement.id = uniqueId;
      aux.push(newElement);
      const log = Crypto.encryptJson(aux);
      await File.write(log);
    } else {
      newElement.password = Crypto.encrypt(newElement.password);
      newElement.id = uniqueId;
      aux[exist] = newElement;
      const log = Crypto.encryptJson(aux);
      await File.write(log);
    }
  }
  async searchByEmail(query) {
    await this.setStore();
    return this.searchAccount(query);
  }

  async getPassword(index) {
    try {
      await this.setStore();
      const list = this.store;
      return Crypto.decrypt(list[index].password);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Main();

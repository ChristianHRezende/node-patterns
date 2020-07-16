// external module
const logger = require("./console-logger");

let accounts = [];
const addAccount = Symbol("addAccount");

class Bank {
  config() {
    this.logger = logger;
  }

  constructor() {}

  [addAccount](newAccount) {
    this.logger.write("-----------New Account---------");
    const bankClient = Object.assign(newAccount, { id: Math.random() });
    accounts.push(bankClient);
  }

  createAccount(newAccount) {
    this[addAccount](newAccount);
  }

  showExtract() {
    this.logger.write("-----------EXTRACT---------");
    this.logger.write("R$ 2000,99");
    this.logger.write("R$ 2000,99");
    this.logger.write("R$ 2000,99");
    this.logger.write("R$ 2000,99");
  }
}

module.exports = new Bank();

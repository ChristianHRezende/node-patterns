// private because is external of class
let accounts = [];
const addAccount = Symbol("addAccount"); // create immutable  symbol

class Bank {
  constructor() {}

  //private can`t be accessable external
  [addAccount](newAccount) {
    console.log("-----------New Account---------");
    const bankClient = Object.assign(newAccount, { id: Math.random() });
    accounts.push(bankClient);
  }

  // public
  createAccount(newAccount) {
    this[addAccount](newAccount);
  }

  // public
  showExtract() {
    console.log("-----------EXTRACT---------");
    console.log("R$ 2000,99");
    console.log("R$ 2000,99");
    console.log("R$ 2000,99");
    console.log("R$ 2000,99");
  }
}

// export Bank
module.exports = new Bank();

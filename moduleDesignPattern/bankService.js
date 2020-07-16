// public atribute
let accounts = [];

// private function
const addAccount = (newAccount) => {
  console.log("-----------New Account---------");
  const bankClient = Object.assign(newAccount, { id: Math.random() });
  accounts.push(bankClient);
};

//public function can be access external
const createAccount = (newAccount) => addAccount(newAccount);

//public function can be access external

const showExtract = () => {
  console.log("-----------EXTRACT---------");
  console.log("R$ 2000,99");
  console.log("R$ 2000,99");
  console.log("R$ 2000,99");
  console.log("R$ 2000,99");
};
//export functions
module.exports = { createAccount, showExtract };

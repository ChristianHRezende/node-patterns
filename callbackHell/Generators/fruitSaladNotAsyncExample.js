const fruits = ["Apples", "Oranges", "Kiwis", "Strawberries"];

// yield return a { value:any,done:boolean }
function* fruitShop() {
  for (const fruit of fruits) {
    yield fruit; // yield is just like a exec return for generators
  }
}

const getFruits = fruitShop();

function makeSalad() {
  let fruitBasked = getFruits.next();

  if (!fruitBasked.done) {
    // if done is true generator is finished
    console.log(fruitBasked.value);
    makeSalad();
  } else {
    console.log("we're out of fruits");
  }
}

makeSalad();

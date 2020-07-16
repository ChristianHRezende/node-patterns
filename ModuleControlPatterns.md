# Module Design Patterns

## Reveal the Modern Pattern

Padrao de revelacao, ou exposicao de valores (private e public)

Node JS implementa nativamento por padrao.

Descreve a diferenca entra funcoes publicas, privadas e propriedades.

Usamos escopos privados para diminuir a poluicao

Em navegadores as funcoes sao compactadas e immediataly-invoked function expression (IIFE) para simular um escopo privado.

### Scope

O escopo determina o que o seu contexto atual consegue acessar, como por exemplo uma funcao com escopo fechado consegue apenas acessar as variaveis dentro do bloco do escopo daquela funcao e de escopo global. Nenhuma outra funcao de escopo fechado consegue acessar o conteudo daquela funcao.

#### Padrao de nomeclaturas de escopo

- use undercore para constants e functions privadas em modulos funcionais

```js
 //Module happy
    const _happyMessage='I`m so Happy!!!'

    function showHappyMessage() => {
        console.log(_happyMessage)
    }

    module.exports = {showHappyMessage}
```

- use Symbols do javascript para garantir a immutability e tornar funcoes privadas em classes, essas funcoes devem ser declaradas fora do escopo da classe

```js
let accounts = [];
const fundAccount = Symbol("findAccount");

class Bank {
  /**
   *  Funcao privada
   * Immutable
   */
  [findAccount](name) {
    return accounts.find((acc) => acc.name === name);
  }

  /**
   *  Funcao publica
   */
  create(name) {
    //Adiciona nova conta
  }
}

module.exports = new Bank();
```

## Dependency Injection Pattern

### Problema

Organizacao de dependencias

Imagine que voce tenha um modulo cuja responsabilidade é comunicar com um banco mongoDB, porem a arquitetura decide mudar para o uso de DynamoDB. É ai que a injecao de dependencia entra.

Esse padrao propoes implementar baixa coesao entre modulos e disacoplar dependencias disso. o que torna facil a mudanca

```js
const logger = "./console-logger"; // uma implementacao de um logger

class Bank {
  config() {
    //injeta a dependencia no modulo
    this.logger = logger;
  }
  constructor() {}

  extrato() {
    this.logger.write("Extrato"); // no console sera printado a data + a msg
  }
}
```

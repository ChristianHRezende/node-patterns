## Callback Hell

### Problema

Muitos callbacks encadeados, o que torna quase impossivel gerenciar.

### Solucao

Uso de Promises.

No exemplo: ele utiliza a msm funcao callback 3 vezes seguidas para ler um arquivo, utilizando promise ele nao necessita refazer a chamada da funcao, ele utiliza a chamadas do then passando os parametros.

```js
const readReverseFile = (file) => {
  readFileAsync(join(inbox, file), "utf8")
    .then(reverseText)
    .then((data) => writeFileAsync(join(outbox, file), data))
    .then(() => console.log(`${file} has been processed`));
};
```

Uso de ASync/Await

Outra forma de tratar funcoes async que possibilidade melhor leitura e manutencao de codigo.

```js
async function asyncTest() {
  try {
    const result = await asyncFunctionExample();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
```

Generator

Sao functions que podem ser pausadas e executadas utilizando o padrao generator, uma iteracao controlada pela function next(), diferente de funcoes regulares.
Generator sao otimos para implementar paginacoes.

Ex: Imagine uma chamada de api onde vc tem que fazer um fetch elemento por elemento para que possa finalizar.

ASync/Generators (node v10ˆ)

Uma forma de utilizar async e generators combinados

Exemplo de leitura de arquivos

```js
async function* getFilesIterator() {
  try {
    const readDirectory = await readdirAsync(inbox); // funcao para leitura de diretorios
    for (const file of readDirectory) {
      yield file;
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function process() {
  try {
    const allFiles = await getFilesIterator(); //generator instanciado
    for (const file of allFiles) {
      const read = await readFileAsync(join(inbox, file), "utf8");
      //... process
      console.log("Process finished");
    }
  } catch (error) {
    console.log(error);
  }
}
```

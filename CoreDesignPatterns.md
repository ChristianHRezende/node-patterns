# Core Design Patterns

## Singleton

### Problema

Múltiplas instâncias cacheadas na memória;

### Solucao

Um modulo deve ter sempre um instancia
Retornar sempre uma new class

## Factories

### Problema

Quando se tem um produto que tem atributos em comum porem de modelos diferentes.

### Solucao

uma interface para criar um objeto mas deixa as subclasses definirem class instanciar
exemplo um iphone pode ter N modelos, ou seja a classe iphone serve de objeto retorno para o construtor de IphoneXR

## Abstract Factory

### Problema

Quando vc desejar definir apenas aqueles modelos.

### Solucao

- Implementa um outro modulo que ira retornar uima classe com uma funcao q ira retornar a instancia q é permitida, um switch
- O metodo deve receber apenas os atributos diferentes

## Builder

Exemplo da pizza

Separa a construcao de um objeto conplexo.

### Problema

Um objeto complexo que possui varias propriedades a serem definidas.
Exemplo: Voce como dono de uma pizzaria fornece a materia prima para a pizza, porem apenas o pizzaiolo possui os conhecimentos para construir as pizzas.

### Solucao

Cria um objeto,funcao e/ou classe que possui funcoes prontas para receber as propridades obrigatorias ou n e esta executa a construcao e devolve o produto final.
Como eh o caso nos arquivos Pizza.js e SignupBuilder

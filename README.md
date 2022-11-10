# Exemplo do hook useCallback

## Iniciando o projeto

utilize
`npm install`
para instalar as dependencias do projeto para teste e `npm run dev` para iniciar.

## O que é o useCallback?

De acordo com a documentação oficial o hook useCallback:

> Returns a memoized callback.

Ou seja retorna uma uma função _memoizada_ por meio de um _callback_.

_memoizada_ > Memoização _(não confundir com memorização)_ é quando uma função complexa armazena sua saída para a próxima vez que for chamada com a mesma entrada, muito semelhante ao cache.

_callback_ > Uma função callback é uma função passada como parâmetro de outra função

#### Exemplo de `useCallback`

```js
const memoizedCallback = useCallback(() => {
  fazerAlgo(dependencia);
}, [dependencia]);
```

Onde o callback somente será atualizado caso a dependencia passada como parâmetro seja atualizada.

O useCallback é um gancho que retornará uma versão memoizada da função de retorno de chamada que só muda se uma das dependências for alterada. A memoização é uma maneira de armazenar em cache um resultado para que ele não precise ser calculado novamente. Isso pode aumentar o desempenho.
Ou seja, ao invés de rendereizar todas as funções, o usecallback pausa e renderiza somente a que está sendo executata.

#### Leia mais em

- [React Official Docs](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [Blog Kinsta](https://kinsta.com/pt/blog/usecallback-react/)
- [YouTube Kelvin Beltrão](https://youtu.be/c6QO8ePE_a8)

#### Contribuições:

- [Gabriel Camargo](https://github.com/GabrielCamargo92)
- [Welerson Ferreira](https://github.com/welersonfrr/)
- [Assis Júnior](https://github.com/AssFerj)

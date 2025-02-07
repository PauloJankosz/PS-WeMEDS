```
function solution(a)
{
    let N = a.length 

    let ArrayEntradaOrdenado = a.toSorted((a, b) => a - b);

    for (let i = 0; i < N; i++) 
    {
        if (i < N - 1 && ArrayEntradaOrdenado[i] === ArrayEntradaOrdenado[i + 1]) 
        {
            i++; 
        } 
        else 
        {
            return ArrayEntradaOrdenado[i];
        }
    }

}

let N = parseInt(prompt("tamanho do array: "));
let ArrayEntrada = [];
    
for (let i = 0; i < N; i++) 
{
    ArrayEntrada[i] = parseInt(prompt());
}
// chamada da função
solution(ArrayEntrada);
```

## Lógica utilizada
Primeiramente criei um vetor antes da realizar a chamada da função para ser algo interativo com o usuário e passei somente o vetor, sem o tamanho informado pelo usuário, seguindo o escopo de função informado no exercício. Para lidar com isso,
dentro da função, criei uma nova variável N e obtive o tamanho do vetor, feito essa etapa, criei um novo vetor para não manipular o informado pelo usuário, uma vez que o vetor foi passado por referência, e o ordenei utilizando a função toSorted
em uma ordenação não decrescente (pode existir valores iguais dentro do vetor). Por último, realizei um loop percorrendo todo o vetor com um if e comparando a posição atual com a próxima e, caso sejam iguais, adiciono mais um no índice a ser comparado, uma vez que, como é par, não precisa ser comparado novamente. Caso não bata nessa condição informada, não sendo par ou sendo o último elemento do vetor (especificado que é obrigatoriamente ímpar) retorno a solução.



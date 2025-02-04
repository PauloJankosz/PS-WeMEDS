```
function solution(a)
{
    let N = a.length // precisei pegar o tamanho do vetor por não ter sido passado na função base, que só aceita o vetor
    
    //optei pela ordenação pra realizar um menor numero de comparações, o que seria bom para um vetor de tamanho considerável, diminuindo o tempo de execução
    //criei um novo array para não manipular o array anteriormente informado, visto que foi passado por referencia

    let ArrayEntradaOrdenado = a.toSorted((a, b) => a - b);

    for (let i = 0; i < N; i++) 
    {
        if (i < N - 1 && ArrayEntradaOrdenado[i] === ArrayEntradaOrdenado[i + 1]) 
        {
            i++; // como o valor par é obrigatoriamente igual, eu não preciso compara-lo
        } 
        else // condição de ser diferente ou ser o ultimo elemento do vetor, que gera a soluçao
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

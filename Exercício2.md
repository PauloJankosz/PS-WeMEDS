```
function solution(a)
{
    let vetorAux = []
    let N = a.length
    let count = 0
    
    for (let i = 0; i < N; i++)
    {
        if (!vetorAux.includes(a[i]))
        {
            vetorAux.push(a[i])
            count++
        }
    }
    return count
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
Durante minha primeira resolução, utilizei um vetor auxiliar que receberia mesmo valor do índice caso estivesse disponível, por exemplo, percorrendo o vetor principal encontro o número dois, acesso a posição 2 do vetor auxiliar e vejo se ela está
ocupada pelo número dois, caso contrário, adiciono o número lá e somo o contador, o que funcionaria e seria mais eficiente, porém, esbarraria na limitação de não existir um array de índice negativo, não resolvendo totalmente o problema. Na minha segunda resolução, utilizei a função 
includes de manipulação de array, que realiza uma busca para saber se o elemento dentro do vetor principal está presente no vetor auxiliar, caso não estivesse presente, o adicionaria e somaria o contador.

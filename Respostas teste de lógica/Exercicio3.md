```
function solution(n, m)
{
    let comer = true;
    let x = 0;
    let count = 0;
    while (comer === true)
    {
        x = (x + m) % n;
        count++;
        if (x === 0)
        {
            comer = false;
        }
    }
    return count;
}


let n = parseInt(prompt("informe o valor n: "));
let m = parseInt(prompt("informe o valor m: "));
    
// chamada da função
 solution(n, m);
```

## Lógica utilizada
Para a resolução do problema, foquei em seguir o enunciado, que foi muito esclarecedor. O que fiz foi receber dois valores informados pelo usuário (n e m) e passa-los para a função (mesmo escopo informado no problema). Dentro da função, criei a variável
comer, representando a existência de chocolates a serem comidos e realizei a operação descrita no enunciado até o resto da operação dar zero, somando um a cada operação, e retornar o valor count.  Adicionei também uma condição de comer recebendo false, somente
para garantia de, se acontecer algum problema inusitado, o loop não ficar infinito, mas a função acabaria ao chegar na linha do return e retornando o valor de count.

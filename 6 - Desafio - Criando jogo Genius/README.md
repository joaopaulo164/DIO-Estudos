# Desafio - Criando jogo Genius

Repositório de um simples jogo Gênesis 


```javascript
//Tinha um bug AQUI e não apagava a cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Corrigido
let lightColor = (element, number) => {
    number = number * 1000
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(() => {
            element.classList.remove('selected');
        }, number/4);
    }, number);
    
}

```
 
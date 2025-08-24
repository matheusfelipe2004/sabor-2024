
const confirmBtn = document.getElementById("confirm-btn");
const descriptionDiv = document.getElementById("descriptionDiv");

const produtos = [
    {
        id: 126171381,
        name: 'Snack Saudável',
        description: 'Snack feito com frutas desidratadas',
        price: 15.90
    },

    {
        id: 832892802,
        name: 'Refeição Congelada Fitness ',
        description: 'Refeição balanceada, rica em proteinas',
        price: 25.99
    },

    {
        id: 1522373812,
        name: 'Suco Natural Detox',
        description: ' Suco natural a base de frutas e vegetais',
        price: 8.75
    }
];

confirmBtn.addEventListener('click', ()=>{
    const radios = document.getElementsByName("produto");
    let produtoId = null;

    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            produtoId = parseInt(radios[i].value);
            break;
        }
    }

    if(produtoId) {
        const foundProduct = produtos.find(produto => produto.id === produtoId);
        if(foundProduct) {
            descriptionDiv.textContent = `Descrição: ${foundProduct.description}`;
        }
    }
})




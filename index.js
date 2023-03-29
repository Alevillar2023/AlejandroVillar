const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


const cartInfo = document.querySelector('.cart-product')
const rowProduct= document.querySelector('.row-product')

const productsList=document.querySelector('.container-items')

let allProducts= []

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')


productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        console.log()

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(product => product.title === infoProduct.title)

        if(exits){
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                }else {
                    return product
                }
            })

            allProducts = [...products]
        }else{

            allProducts = [...allProducts, infoProduct];

        }
        

      

       showHTML();

    }

    

});

rowProduct.addEventListener('click', (e) => {
if(e.target.classList.contains('icon-close')){
    const product = e.target.parentElement
    const title = product.querySelector('p').textContent

    allProducts = allProducts.filter(
        product => product.title !== title
        );

        console.log(allProducts)
        showHTML()
}

})

const showHTML = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML = `
        <p class = "cart-empty">El carrito esta vacio</p>
        `
    }


    rowProduct.innerHTML='';

    let total = 0;
    let totalOfProducts = 0;



    allProducts.forEach(product => {
        const constainerProduct = document.createElement('div');
        constainerProduct.classList.add('cart-product');

        constainerProduct.innerHTML = `}
        <div class="info-cart-product">
								<span class="cantidad-producto-carrito">${product.quantity}</span>
								<p class="titulo-producto-carrito">${product.title}</p>
								<span class="precio-producto-carrito">${product.price}</span>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="icon-close"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
        `;

         rowProduct.append(constainerProduct)


         total = total + parseInt(product.quantity * product.price.slice(1))
         totalOfProducts = totalOfProducts + product.quantity;

    });

     valorTotal.innerText = `$${total}`;
     countProducts.innerText = totalOfProducts;

};


const productos = `
[

    {
    
        "zapatillas" : "Nike",
        "modelo"     :  "Run",
        "produccion" :  2015,
        "componente" :  "Poliester y caucho"
    
    },
    
    {
    
        "reloj"      : "Casio",
        "modelo"     : "S-bw",
        "produccion": 2017,
        "autonomia"  : 1000,
        "componente" : "Acrilico y goma"
    
    },
    
    
    {
    
        "audifonos"  : "Electronic",
        "modelo"     : "soundbarrier",
        "produccion" : 2016,
        "componente" : "silicona y acrilico"
    
    
    },
    
    
    {
    
        "perfume"  : "Boticario",
        "modelo"     : "Arbo",
        "produccion" : 2020,
        "componente" : "Alcohol y esencias"
    
    
    },
    
    {
    
        "smartwatch"  : "Future",
        "modelo"     : "Axion",
        "produccion" : 2021,
        "componente" : "silicona y acrilico"
    
    
    }
    
    
    
    ]

`;

console.log(typeof productos);

const jsonData = JSON.parse(productos);

console.log(typeof jsonData);

const productosNuevos = jsonData.filter(
    (producto) => producto.produccion > 2015 && producto.autonomia < 2000
);

console.log(productosNuevos)


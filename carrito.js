// VARIABLES

const cartBtn = document.querySelectorAll('.cart-btn');
const closeCartBtn = document.querySelector ('.close-cart');
const clearCartbtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector ('.cart-items');
const cartItemsN = document.querySelector ('.cart-items-n');
const cartTotal = document.querySelector ('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector ('.products');
const btnToggle= document.querySelector('.nav-icon');

const shopingCartItemsContainer= document.querySelector('.cart-item');



// PRODUCTS CART

const cart = [

{
    producto:'product1',
    marca: "Philips",
    color: "blanco",
    precio: "$1500",
},

{
    producto: 'product2',
    marca: "Philips",
    color: "azul",
    precio: '$1500',
},

{
    producto: 'product3',
    marca: "Philips",
    color: "negro",
    precio: '$1500',
},

{
    producto: 'product4',
    marca: "Philips",
    color: "blanco",
    precio: '$1500',
},

{
    producto: 'product5',
    marca: "Philips",
    color: "blanco",
    precio: '$1500',
},

{
    producto: 'product6',
    marca: "Philips",
    color: "blanco",
    precio: '$1500',
}
]



const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];


// MENU DESPLEGABLE - ABRIR CART--------------------------------------


btnToggle.addEventListener('click', function (){
    document.querySelector('.cart')[0].classList.toggle('.showCart');
});


    

//---- AGREGAR ITEM AL CARRITO--------------------------------------------
 

cartBtn.forEach(addToCartBtn =>  {
    addToCartBtn,addEventListener ('click', agregarAlCarrito);
});


function agregarAlCarrito(event) {
    const boton = event.target;
    const item = boton.closest('.product1');
    
    const itemTitle= item.querySelector('.title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImage = item.querySelector('.img').src;
   
    addItemToCart(itemTitle,itemPrice,itemImage);
}



function addItemToCart(itemTitle, itemPrice, itemImage){
    const shopingCart = document.createElement ('div');
    const shopingCartContent = `
    <div class="cart-overlay">
        <div class="cart">
            <span class="close-cart">
                <i class="fas fa-window-close"></i>
            </span>

            <h2>Tu Carrito</h2>

            <div class="cart-content">
                <div class="row cart-item d-flex justify-content-between">
            
                    <img class="col-lg-5 col-md-5 col-sm-9" src= ${itemImage}>
                
                    <div>
                        <h4>${itemTitle}</h4>
                        <h5>${itemPrice}</h5>
                        <span class="remove-item">Eliminar</span>    
                    </div>
            
                    <div>
                        <i class="fas fa-chevron-up"></i>
                        <p class="item-amount">1</p>
                        <i class="fas fa-chevron-down"></i>
                    </div>
            
                </div>
            </div>

            <div class="cart-footer">
                <h3> El total es: $ <span class="cart-total">0</span></h3>
                <button class="clear-cart banner-btn">Vaciar carrito</button>

            </div>
        </div>
        </div>`;
    shopingCart.innerHTML = shopingCartContent;
    shopingCartItemsContainer.append (shopingCart);
 }




//--AGREGAR AL CARRITO 2da OPCION-------------------------

/*function agregarAlCarrito (index) {
    let producto = cart [index];
    if (carrito.lenght > 0) {
        let noExiste = true;
        for (var i = 0; i < carrito.lenght; i++){
            if(producto.nombre === carrito [i].producto){
                carrito[i].cantidad ++;
                noExiste = false;
            }
        }
        if (noExiste){
            producto.cantidad = 1;
            carrito.push (producto);
        }

    }else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    loadCarrito();
    localStorage.carrito= JSON.stringify (carrito);*/

    


//-----CERRAR EL CARRITO -----------------------------------





//-----REMOVER ELEMENTOS DEL CARRITO -------------------------


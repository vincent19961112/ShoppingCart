let carts = document.querySelectorAll('.add-cart');

let products = [{
        name: 'Ford Focus 5D',
        tag: 'FordFocus5D',
        price: 20,
        inCart: 0
    },
    {
        name: 'Ford Focus 4D',
        tag: 'FordFocus4D',
        price: 20,
        inCart: 0
    },
    {
        name: 'Toyota RAV4 2.0 旗艦',
        tag: 'ToyotaRAV42.0旗艦',
        price: 20,
        inCart: 0
    },
    {
        name: 'Toyota Corolla Altis 1.8尊爵',
        tag: 'ToyotaCorollaAltis1.8尊爵',
        price: 20,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("add to cart");
        cartNumbers();
    })
}

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = perseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else {
        localStorage.setItem('cartNumbers', 1);
    }
}

onloadCartNumbers();
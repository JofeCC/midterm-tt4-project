import './add-products.scss';

// images
// import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
// import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
// import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";
import madebymath from "./assets/images/pexels-madebymath-90946.jpg";
import eprism from "./assets/images/pexels-eprism-studio-108171-335257.jpg";
import pixabay_279906 from "./assets/images/pexels-pixabay-279906.jpg";
import pixabay_258244 from "./assets/images/pexels-pixabay-258244.jpg";
import pixabay_247769 from "./assets/images/pexels-pixabay-247769.jpg";
import rethaferguson from "./assets/images/pexels-rethaferguson-3621234.jpg";
import sarmad from "./assets/images/pexels-sarmad-mughal-94606-397978.jpg";
import karolina_grabowska_4389678 from "./assets/images/pexels-karolina-grabowska-4389678.jpg";
import laryssa from "./assets/images/pexels-laryssa-suaid-798122-3616991.jpg";
import sameerkalani from "./assets/images/pexels-sameerkalani-3802602.jpg";
import shiny from "./assets/images/pexels-shiny-diamond-3373718.jpg";
import karolina_grabowska_4022129 from "./assets/images/pexels-karolina-grabowska-4022129.jpg";
import milk from "./assets/images/milk.jpg";
import coke from "./assets/images/coke.jpg";
import perfum from "./assets/images/perfum.jpg";
import soap from "./assets/images/soap.jpg";
import breakfast from "./assets/images/breakfast.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');

    const productsadd = [
        {
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: coke,
            price: '$499.99'
        },
        {
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: milk,
            price: '$599.99'
        },
        {
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: breakfast,
            price: '$549.99'
        },
        {
            name: 'Product 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: perfum,
            price: '$499.99'
        },
        {
            name: 'Product 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: soap,
            price: '$599.99'
        },
        
    ];

    productsadd.forEach(productadd => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4');

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('card-price');
        price.textContent = product.price;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-success', 'float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        productsContainer.appendChild(cardDiv);
    });
});
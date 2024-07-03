// script.js

const products = [
    { name: "Hydrodynamischer Pfannenwender mit Steuer- und Backbordaufsätzen und Turboantrieb", price: "$32000", image: "orange-juice.jpg" },
    { name: "[luxus gut] electro hybrid Sprit", price: "$2.90/ml", image: "sprit.jpg" },
    { name: "irgend so ein typ", price: "$42069.1337", image: "so ein typ.jpg" },
    { name: "Schalkhaft drücker für oso mana", price: "$43.99", image: "schallkaft.jpg" },
    { name: "halunke", price: "$0.79", image: "mongo.jpg" },
    { name: "Ganshin Explode", price: "$99.49/mo", image: "shit.jpg" }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.classList.add('product-img');
    image.src = `images/${product.image}`;
    image.alt = product.name;

    const title = document.createElement('h2');
    title.classList.add('product-title');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = product.price;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);

    productList.appendChild(card);
});

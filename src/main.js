let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Кава зернова 100% Арабіка “Марагоджип Гватемала”',
        image: 'https://foodboom.com.ua/wp-content/uploads/2023/11/%D0%BA%D0%B0%D0%B2%D0%B0-1024x344.jpg',
        price: 200
    },
    {
        id: 2,
        name: 'Кава мелена 100% Арабіка “Марагоджип Гватемала”',
        image: 'https://foodboom.com.ua/wp-content/uploads/2023/06/kofe-molotyi-100-arabyka-marahodzhyp-hvatemalaid-49204607208506_-698d34536c-300x300.jpg',
        price: 300
    },
    {
        id: 3,
        name: 'Кава мелена 100% Робуста “Індія”',
        image: 'https://foodboom.com.ua/wp-content/uploads/2023/04/kofe-molotyi-100-robusta-yndyiaid-64662496827576_-31d09e91bd-300x300.jpg',
        price: 300
    },
    {
        id: 4,
        name: 'Кава мелена 100% Арабіка “Гондурас Високогірний”',
        image: 'https://foodboom.com.ua/wp-content/uploads/2023/04/kofe-molotyi-100-arabyka-honduras-vysokohornyiid-28363872636184_-454ff6cab9-300x300.jpg',
        price: 200
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

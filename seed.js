const db = require('./server/db/index');
const { Product, Order, User, Review, Category } = require('./server/db/models/index');


const users = [{ email: 'thequeen@england.com', password: 'password', googleId: 'queeny' },
                { email: 'theking@england.com', password: '123', googleId: 'bigboss' },
              { email: 'jonsnow@thenorth.com', password: 'iknownothing', googleId: 'jonnysnow' },
            ];

const reviews = [
  { stars: 5, title: 'Best Ever', text: 'wooooooooooooooooooooooooooooooooooooooooo', userId: 1, productId: 1},
  { stars: 4, title: 'Pretty good', text: 'meh', userId: 1, productId: 2},
  { stars: 1, title: 'It sucked', text: 'dissapoint', userId: 3, productId: 3},
  { stars: 2, title: 'Bad', text: 'would not recommend', userId: 2, productId: 2}
];

const products = [
  { title: 'Dragon1', description: 'dragon 1', price: '82', quantity: 7 },
  { title: 'Dragon2', description: 'dragon 2', price: '97',
quantity: 4 },
{ title: 'Dragon3', description: 'dragon 3', price: 67,
quantity: 2 },
 { title: 'Dragon4', description: 'dragon 4', price: 88,
  quantity: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Komodo_dragon01.JPG/220px-Komodo_dragon01.JPG' }

]

const categories = [
  { name: 'blue' }, { name: 'red' }, { name: 'green' }, { name: 'purple' }
]

// const productCategories = [
//   { productId: 1, categoryId: 1},
//   { productId: 2, categoryId: 3},
//   { productId: 1, categoryId: 2},
//   { productId: 3, categoryId: 4},
//   { productId: 4, categoryId: 4}

// ]

const orders = [
  { date: '2016-08-09 07:42:28', products: [{ title: 'Dragon1', description: 'dragon 1', price: '82', quantity: 7 },
  { title: 'Dragon2', description: 'dragon 2', price: '97',
quantity: 4 }], userId: 1},
 { date: '2016-08-09 07:42:28', products: [ { title: 'Dragon3', description: 'dragon 3', price: 67,
 quantity: 2 },
  { title: 'Dragon4', description: 'dragon 4', price: 88,
   quantity: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Komodo_dragon01.JPG/220px-Komodo_dragon01.JPG' }
 ], userId: 2 },
 { date: '2016-08-09 07:42:28', products: [{ title: 'Dragon1', description: 'dragon 1', price: '82', quantity: 7 },
 { title: 'Dragon2', description: 'dragon 2', price: '97',
quantity: 4 }]}
]



const seed = () =>
  Promise.all(products.map(product =>
    Product.create(product))
  )
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  ))
  .then(() =>
  Promise.all(orders.map(order =>
    Order.create(order))
  ))
  .then(() =>
  Promise.all(reviews.map(review =>
    Review.create(review))
  ))



  ;

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();

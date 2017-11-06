const db = require('./server/db/index');
const { Product, Order, User, Review, Category, ProductCategories, OrderProducts } = require('./server/db/models/index');


const users = [{ email: 'thequeen@england.com', password: 'password', googleId: 'queeny', isAdmin: false },
                { email: 'theking@england.com', password: '123', googleId: 'bigboss', isAdmin: false },
              { email: 'jonsnow@thenorth.com', password: 'iknownothing', googleId: 'jonnysnow', isAdmin: false },
            ];

const reviews = [
  { stars: 5, title: 'Best Ever', text: 'wooooooooooooooooooooooooooooooooooooooooo', userId: 1, productId: 1},
  { stars: 4, title: 'Pretty good', text: 'meh', userId: 1, productId: 2},
  { stars: 1, title: 'It sucked', text: 'dissapoint', userId: 3, productId: 3},
  { stars: 2, title: 'Bad', text: 'would not recommend', userId: 2, productId: 2}
];

const products = [
  { id: 1, title: 'Dragon1', description: 'dragon 1', price: '82', quantity: 7, image:"https://thumbs.dreamstime.com/z/vector-cute-smiling-happy-dragon-as-cartoon-toy-22305702.jpg"},
  { id: 2, title: 'Dragon2', description: 'dragon 2', price: '97', quantity: 4, image: "https://previews.123rf.com/images/nataka/nataka1304/nataka130400010/19088142-cute-dragon-vector-Stock-Vector-baby.jpg"},
  { id: 3, title: 'Dragon3', description: 'dragon 3', price: 67, quantity: 2 },
  { id: 4, title: 'Dragon4', description: 'dragon 4', price: 88, quantity: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Komodo_dragon01.JPG/220px-Komodo_dragon01.JPG' },
  { id: 5, title: 'Hungarian Horntail', description: 'The famously deadly dragon, as seen on Harry Potter!', price: 1000, quantity: 2, image: "http://media.immediate.co.uk/volatile/sites/3/2016/10/119142.jpg?quality=90&resize=620,413"},
  { id: 6, title: "Ord", description: "There's Ord, he's the biggest, not so brave of heart.", price: 0, quantity: 1, image: "http://imgs.tuts.dragoart.com/how-to-draw-ord-from-dragon-tales_1_000000002730_5.jpg"},
  { id: 7, title: "Zack and Weezy", description: "'Cuz you know two heads are better than one.'", price: 0, quantity: 2, image: "http://vignette1.wikia.nocookie.net/dragontalespedia/images/e/e0/Dragontales_zakwheezie.jpg/revision/latest?cb=20110312205711"},
  { id: 8, title: 'Dragon8', description: 'testing another empty image one', price: 20, quantity: 20 },
  { id: 9, title: 'Drogon', description: 'Likes to be scratched behind his ears. Breathes fire on command. Eats sheep.', price: 1, quantity: 1, image: "https://i.pinimg.com/736x/59/97/39/599739e32e602c5fc0705beb0ffab582.jpg"}
]

const categories = [
  { id: 1, name: 'blue' },
  { id: 2, name: 'red' },
  { id: 3, name: 'green' },
  { id: 4, name: 'purple' },
]

const productCategories = [
  { productId: 1, categoryId: 2 },
  { productId: 2, categoryId: 3 },
  { productId: 3, categoryId: 4 },
  { productId: 4, categoryId: 3 },
  { productId: 5, categoryId: 4 },
  { productId: 6, categoryId: 1 },
  { productId: 7, categoryId: 3 },
  { productId: 7, categoryId: 4 },
  { productId: 9, categoryId: 2 },
]

const orders = [
  { id: 1,date: '2016-08-09 07:42:28', status: 'Open', userId: 1},
  { id: 2, date: '2016-08-09 07:42:28', status: 'Completed', userId: 2 },
  { id: 3, date: '2016-08-09 07:42:28', status: 'Processing', userId: 3 },
  { id: 4, date: '2016-08-09 07:42:28', status: 'Processing', userId: 1 },
  { id: 5, date: '2016-08-09 07:42:28', status: 'Completed', userId: 1 },
  { id: 6, date: "2017-09-01 12:00:00", status: "Open", userId: 2},
  { id: 7, date: "2017-09-01 12:00:00", status: "Open", userId: 3},
]

const orderProducts = [
  { currentPrice: 82, quantity: 2, productId: 1, orderId: 1 },
  { currentPrice: 77, quantity: 1, productId: 2, orderId: 1 },
  { currentPrice: 22, quantity: 1, productId: 3, orderId: 2 },
  { currentPrice: 13, quantity: 2, productId: 4, orderId: 2 },
  { currentPrice: 56, quantity: 1, productId: 2, orderId: 3 },
  { currentPrice: 56, quantity: 1, productId: 5, orderId: 6 },
  { currentPrice: 90, quantity: 1, productId: 9, orderId: 6 },
  { currentPrice: 12, quantity: 1, productId: 2, orderId: 6 },
  { currentPrice: 40, quantity: 1, productId: 8, orderId: 5 },
  { currentPrice: 9, quantity: 1, productId: 6, orderId: 4 },
  { currentPrice: 1, quantity: 1, productId: 7, orderId: 4 },
  { currentPrice: 18, quantity: 1, productId: 7, orderId: 7 },
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
  .then(() =>
  Promise.all(categories.map(category =>
    Category.create(category))
  ))
  .then(() =>
  Promise.all(productCategories.map(productCategory =>
    ProductCategories.create(productCategory))
  ))
  .then(() =>
  Promise.all(orderProducts.map(orderProduct =>
    OrderProducts.create(orderProduct))
  ))

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

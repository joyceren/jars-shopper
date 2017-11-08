const db = require('./server/db/index');
const {Promise} = db
const { Product, Order, User, Review, Category, ProductCategories, OrderProducts } = require('./server/db/models/index');


const seedUsers = () => Promise.map([
  { name: 'queeny', email: 'thequeen@england.com', password: 'password', googleId: 'queeny', isAdmin: true },
  { name: 'bigboss', email: 'theking@england.com', password: '123', googleId: 'bigboss', isAdmin: false },
  { name: 'jonnysnow', email: 'jonsnow@thenorth.com', password: 'iknownothing', googleId: 'jonnysnow', isAdmin: false },
  { name: 'Joyce', email: 'joyce.y.ren@gmail.com', password: '123', googleId: 'bigboss', isAdmin: true },
  { name: 'Zeke', email: 'zeke@zeke.zeke', password: '123', isAdmin: false },
], _ => User.create(_))
  .then(asObjectBy('name'))

const seedReviews = () => Promise.map([
  { stars: 5, title: 'Best Ever', text: 'wooooooooooooooooooooooooooooooooooooooooo', userId: 1, productId: 1},
  { stars: 4, title: 'Pretty good', text: 'meh', userId: 1, productId: 2},
  { stars: 1, title: 'It sucked', text: 'dissapoint', userId: 3, productId: 3},
  { stars: 2, title: 'Bad', text: 'would not recommend', userId: 2, productId: 2}
], _ => Review.create(_))
  .then(asObjectBy('title'))

const seedProducts = () => Promise.map([
  { title: 'Dragon1', description: 'dragon 1', price: '82', quantity: 7, image:"https://thumbs.dreamstime.com/z/vector-cute-smiling-happy-dragon-as-cartoon-toy-22305702.jpg"},
  { title: 'Dragon2', description: 'dragon 2', price: '97', quantity: 4, image: "https://previews.123rf.com/images/nataka/nataka1304/nataka130400010/19088142-cute-dragon-vector-Stock-Vector-baby.jpg"},
  { title: 'Dragon3', description: 'dragon 3', price: 67, quantity: 2 },
  { title: 'Dragon4', description: 'dragon 4', price: 88, quantity: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Komodo_dragon01.JPG/220px-Komodo_dragon01.JPG' },
  { title: 'Hungarian Horntail', description: 'The famously deadly dragon, as seen on Harry Potter!', price: 1000, quantity: 2, image: "http://media.immediate.co.uk/volatile/sites/3/2016/10/119142.jpg?quality=90&resize=620,413"},
  { title: "Ord", description: "There's Ord, he's the biggest, not so brave of heart.", price: 0, quantity: 1, image: "http://imgs.tuts.dragoart.com/how-to-draw-ord-from-dragon-tales_1_000000002730_5.jpg"},
  { title: "Zack and Weezy", description: "'Cuz you know two heads are better than one.'", price: 0, quantity: 2, image: "http://vignette1.wikia.nocookie.net/dragontalespedia/images/e/e0/Dragontales_zakwheezie.jpg/revision/latest?cb=20110312205711"},
  { title: 'Dragon8', description: 'testing another empty image one', price: 20, quantity: 20 },
  { title: 'Drogon', description: 'Likes to be scratched behind his ears. Breathes fire on command. Eats sheep.', price: 1, quantity: 1, image: "https://i.pinimg.com/736x/59/97/39/599739e32e602c5fc0705beb0ffab582.jpg"},
  { title: 'Godzilla', description: 'Lives in the ocean, collects shells.', price: 2500, quantity: 5, image: "https://vignette.wikia.nocookie.net/godzilla/images/9/96/PDVD_017.jpg/revision/latest/scale-to-width-down/250?cb=20111231041808"},
  { title: 'Eragon', description: 'A 16 year old wrote this book', price: 2, quantity: 1000, image: "http://3.bp.blogspot.com/_BpaEvM1RrUs/TP8FbyI8dmI/AAAAAAAAABM/SDgb1WQo_6M/s1600/Eragon+book+1.jpg" },
  { title: 'Mushu', description: 'The  guardian of lost souls! I am the powerful, the pleasurable, the indestructible Mushu!', price: 2500, quantity: 1, image: "http://orig15.deviantart.net/429a/f/2013/213/2/5/mushu_by_lionkingrulez-d6g7l0s.png" },
], _ => Product.create(_))
  .then(asObjectBy('title'))

const seedCategories = () => Promise.map([
  { id: 1, name: 'blue' },
  { id: 2, name: 'red' },
  { id: 3, name: 'green' },
  { id: 4, name: 'purple' },
], _ => Category.create(_))
  .then(asObjectBy('name'))

const seedProductCategories = (products,
  {
    blue: {id: blue},
    red: {id: red},
    green: {id: green},
    purple: {id: purple}
  }) => Promise.map([
  { productId: products.Dragon1.id, categoryId: red },
  { productId: products.Dragon2.id, categoryId: green },
  { productId: products.Dragon3.id, categoryId: purple },
  { productId: products.Dragon4.id, categoryId: green },
  { productId: products['Hungarian Horntail'].id, categoryId: purple },
  { productId: products.Ord.id, categoryId: blue },
  { productId: products['Zack and Weezy'].id, categoryId: green },
  { productId: products['Zack and Weezy'].id, categoryId: purple },
  { productId: products.Dragon8.id, categoryId: red },
  { productId: products.Drogon.id, categoryId: green },
  { productId: products.Godzilla.id, categoryId: blue },
  { productId: products.Mushu.id, categoryId: red },
], _ => ProductCategories.create(_))

const seedOrders = () => Promise.map([
  { date: '2016-08-09 07:42:28', status: 'Open', userId: 1},
  { date: '2016-08-09 07:42:28', status: 'Completed', userId: 2 },
  { date: '2016-08-09 07:42:28', status: 'Processing', userId: 3 },
  { date: '2016-08-09 07:42:28', status: 'Processing', userId: 1 },
  { date: '2016-08-09 07:42:28', status: 'Completed', userId: 1 },
  { date: "2017-09-01 12:00:00", status: "Open", userId: 2},
  { date: "2017-09-01 12:00:00", status: "Open", userId: 3},
], _ => Order.create(_))

const seedOrderProducts = (orders, products) => Promise.map([
  { currentPrice: 82, quantity: 2, productId: products.Dragon1.id, orderId: 1 },
  { currentPrice: 77, quantity: 1, productId: products.Dragon2.id, orderId: 1 },

  { currentPrice: 22, quantity: 1, productId: products.Dragon3.id, orderId: 2 },
  { currentPrice: 13, quantity: 2, productId: products.Dragon4.id, orderId: 2 },

  { currentPrice: 56, quantity: 1, productId: products.Dragon2.id, orderId: 3 },

  { currentPrice: 56, quantity: 1, productId: products['Hungarian Horntail'].id, orderId: 6 },
  { currentPrice: 90, quantity: 1, productId: products.Drogon.id, orderId: 6 },
  { currentPrice: 12, quantity: 1, productId: products.Mushu.id, orderId: 6 },

  { currentPrice: 40, quantity: 1, productId: products.Ord.id, orderId: 5 },

  { currentPrice: 9, quantity: 1, productId: products.Godzilla.id, orderId: 4 },
  { currentPrice: 1, quantity: 1, productId: 7, orderId: 4 },

  { currentPrice: 18, quantity: 1, productId: 7, orderId: 7 },
], _ => OrderProducts.create(_))

const seed = async () => {
  const products = await seedProducts()
      , users = await seedUsers()
      , orders = await seedOrders()
      , reviews = await seedReviews()
      , categories = await seedCategories()

  await seedProductCategories(products, categories)
  await seedOrderProducts(orders, products)
}

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


function asObjectBy(field) {
  return array => array.reduce((all, one) => {
    all[one[field]] = one
    return all
  }, {})
}

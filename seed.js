const db = require('./db/index');
const { Product, Order, User, Review } = require('./db/models/index');

const campuses = [
  { name: 'Hogwarts' },
  { name: 'Durmstrang' },
  { name: 'Beauxbatons' },
  { name: 'Pigfarts' }
];

const users = [{ email: 'thequeen@england.com', password:'password', googleId: 'queeny'},
                { email: 'theking@england.com', password:'123', googleId: 'bigboss'},
              {email: 'jonsnow@thenorth.com', password:'iknownothing', googleId:'jonnysnow'},
            ];

const reviews = [
  { stars: 5, title: 'Best Ever', text:'wooooooooooooooooooooooooooooooooooooooooo', userId: 1},

];

const students = [
  { name: 'Harry Potter', email: 'imjustharry@hogwarts.com', CampusId: 1},
  { name: 'Hermione Granger', email: 'leviosaaa@hogwarts.com', CampusId: 1},
  { name: 'Ron Weasley', email: 'scabbers89@hogwarts.com', CampusId: 1},
  { name: 'Draco Malfoy', email: 'myfatherwillhearaboutthis@pigfarts.com', CampusId: 4},
  { name: 'Viktor Krum', email: 'vicky42@durmstrang.com', CampusId: 2 },
  { name: 'Fleur Delacour', email: 'howyousay@beaxbatons.com', CampusId: 2}
]


const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

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

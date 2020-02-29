// import * as genreAPI from "./fakeGenreService";

const movies = [{
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action"
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471618",
      name: "Action"
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "Get Out",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471718",
      name: "Thriller"
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "Trip to Italy",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471823",
      name: "Comedy"
    },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    title: "Airplane",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471824",
      name: "Comedy"
    },
    numberInStock: 8,
    dailyRentalRate: 4.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471827",
    title: "The Avengers",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471826",
      name: "Action"
    },
    numberInStock: 9,
    dailyRentalRate: 4.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    title: "Wedding Crashers",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471829",
      name: "Comedy"
    },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471830",
    title: "Gone Girl",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471831",
      name: "Thriller"
    },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471832",
    title: "The Sixth Sense",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471833",
      name: "Thriller"
    },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    publishDate: "2020-02-03T20:04:28.809Z"
  },
]

export const getMovies = () => {
  return movies
}

export const getMovie = id => {
  return movies.find(m => m._id === id)
}
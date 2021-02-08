// Express
const express = require('express');
const routes = express.Router();

//Database MongoDB
const connection = require('./database/connection');

//JWT Auth
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('./helpers/jwtHelper');

// Files ::  Route: Users
const listUsers = require('./Controllers/users/list');
const getUser = require('./Controllers/users/getOne');
const createUser = require('./Controllers/users/create');
const updateUser = require('./Controllers/users/update');
const deleteUser = require('./Controllers/users/delete');
const reactiveUser = require('./Controllers/users/reactive');

// Routes :: Users
routes.post('/v1/users/create', verifyJWT, createUser);
routes.get('/v1/users', verifyJWT, listUsers);
routes.get('/v1/users/:id', verifyJWT, getUser);
routes.put('/v1/users/update/:id', verifyJWT, updateUser);
routes.put('/v1/users/delete/:id', verifyJWT, deleteUser);
routes.put('/v1/users/reactive/:id', verifyJWT, reactiveUser);

// Files ::  Route: Login
const login = require('./Controllers/login/login');
const logout = require('./Controllers/login/logout');

// Routes :: Login
routes.post('/v1/login', login);
routes.post('/v1/logout', logout);

// Files :: Route Genres

const createGenre = require('./Controllers/genres/create');
const listGenre = require('./Controllers/genres/list');
const getOneGenre = require('./Controllers/genres/getOne');
const updateGenre = require('./Controllers/genres/update');
const deleteGenre = require('./Controllers/genres/delete');

// Routes :: Genres

routes.post('/v1/genres/create', verifyJWT, createGenre);
routes.get('/v1/genres', verifyJWT, listGenre);
routes.get('/v1/genres/:id', verifyJWT, getOneGenre);
routes.put('/v1/genres/update/:id', verifyJWT, updateGenre);
routes.put('/v1/genres/delete/:id', verifyJWT, deleteGenre);

// Files :: Route Movies

const createMovie = require('./Controllers/movies/create');
const listMovie = require('./Controllers/movies/list');
const getOneMovie = require('./Controllers/movies/getOne');
const deleteMovie = require('./Controllers/movies/delete');
const updateMovie = require('./Controllers/movies/update');

// Routes :: Movies

routes.post('/v1/movies/create', verifyJWT, createMovie);
routes.get('/v1/movies', verifyJWT, listMovie);
routes.get('/v1/movies/:id', verifyJWT, getOneMovie);
routes.put('/v1/movies/update/:id', verifyJWT, updateMovie);
routes.put('/v1/movies/delete/:id', verifyJWT, deleteMovie);

// Files :: Route Directors

const createDirector = require('./Controllers/directors/create');
const listDirector = require('./Controllers/directors/list');
const getOneDirector = require('./Controllers/directors/getOne');
const updateDirector = require('./Controllers/directors/update');
const deleteDirector = require('./Controllers/directors/delete');
const reactiveDirector = require('./Controllers/directors/reactive');

// Routes :: Directors
routes.post('/v1/directors/create', verifyJWT, createDirector);
routes.get('/v1/directors', verifyJWT, listDirector);
routes.get('/v1/directors/:id', verifyJWT, getOneDirector);
routes.put('/v1/directors/update/:id', verifyJWT, updateDirector);
routes.put('/v1/directors/delete/:id', verifyJWT, deleteDirector);
routes.put('/v1/directors/reactive/:id', verifyJWT, reactiveDirector);

// Files :: Route Writers
const createWriter = require('./Controllers/writers/create');
const listWriter = require('./Controllers/writers/list');
const getOneWriter = require('./Controllers/writers/getOne');
const updateWriter = require('./Controllers/writers/update');
const deleteWriter = require('./Controllers/writers/delete');
const reactiveWriter = require('./Controllers/writers/reactive');

// Routes :: Writers

routes.post('/v1/writers/create', verifyJWT, createWriter);
routes.get('/v1/writers', verifyJWT, listWriter);
routes.get('/v1/writers/:id', verifyJWT, getOneWriter);
routes.put('/v1/writers/update/:id', verifyJWT, updateWriter);
routes.put('/v1/writers/delete/:id', verifyJWT, deleteWriter);
routes.put('/v1/writers/reactive/:id', verifyJWT, reactiveWriter);

// Files :: Route Stars

const createStar = require('./Controllers/stars/create');
const listStar = require('./Controllers/stars/list');
const getOneStar = require('./Controllers/stars/getOne');
const updateStar = require('./Controllers/stars/update');
const deleteStar = require('./Controllers/stars/delete');
const reactiveStar = require('./Controllers/stars/reactive');

// Routes :: Stars

routes.post('/v1/stars/create', verifyJWT, createStar);
routes.get('/v1/stars', verifyJWT, listStar);
routes.get('/v1/stars/:id', verifyJWT, getOneStar);
routes.put('/v1/stars/update/:id', verifyJWT, updateStar);
routes.put('/v1/stars/delete/:id', verifyJWT, deleteStar);
routes.put('/v1/stars/reactive/:id', verifyJWT, reactiveStar);

// Files :: Route Vote

const createVote = require('./Controllers/votes/create');
const listVote = require('./Controllers/votes/list');
const getOneVote = require('./Controllers/votes/getOne');
const updateVote = require('./Controllers/votes/update');
const deleteVote = require('./Controllers/votes/delete');

// Routes :: Votes

routes.post('/v1/votes/create', verifyJWT, createVote);
routes.get('/v1/votes', verifyJWT, listVote);
routes.get('/v1/votes/:id', verifyJWT, getOneVote);
routes.put('/v1/votes/update/:id', verifyJWT, updateVote);
routes.put('/v1/votes/delete/:id', verifyJWT, deleteVote);

module.exports = routes;

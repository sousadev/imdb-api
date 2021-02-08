const mongoose = require('mongoose');

const MovieModel = require('../../database/Models/MovieModel');
const GenreModel = require('../../database/Models/GenreModel');
const DirectorModel = require('../../database/Models/DirectorModel');
const WriterModel = require('../../database/Models/WriterModel');
const StarModel = require('../../database/Models/StarModel');

const createMovie = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({
      message: 'not authorized! You dont have privileges for access this page.',
    });
  } else {
    const data = req.body;
    console.log(data);
    data.createdAt = Date.now();
    data.createdBy = req.idUser;

    const MovieObject = new MovieModel({
      title: data.title,
      description: data.description,
      genre: data.genre,
      language: data.language,
      country: data.country,
      type: data.type,
      awards: data.awards,
      runtime: data.runtime,
      age: data.age,
      year: data.year,
      directors: data.directors,
      writers: data.writers,
      stars: data.stars,
      poster: data.poster,
      images: data.images,
      videos: data.videos,
      createdBy: req.idUser,
      createdAt: Date.now(),
    });

    let movie = await MovieObject.save()
      .then(async (doc) => {
        return doc;
      })
      .catch(async (e) => console.log(e));

    //const movie = await Promise.all(await MovieModel.create({ ...data }));

    if (data.genre) {
      const listGenre = await data.genre;

      for (let g = 0; g < (await listGenre.length); g++) {
        await GenreModel.findByIdAndUpdate(
          await listGenre[g],
          { $push: { movies: movie._id } },
          { new: true, overWrite: false }
        );
      }
    } else {
    }

    if (data.directors) {
      const listDirectors = await data.directors;
      for (let d = 0; d < (await listDirectors.length); d++) {
        await DirectorModel.findByIdAndUpdate(
          listDirectors[d],
          { $push: { movies: movie._id } },
          { new: true, overWrite: false }
        );
      }
    } else {
    }

    if (data.writers) {
      const listWriters = await data.writers;
      for (let w = 0; w < (await listWriters.length); w++) {
        await WriterModel.findByIdAndUpdate(
          listWriters[w],
          { $push: { movies: movie._id } },
          { new: true, overWrite: false }
        );
      }
    } else {
    }

    if (data.stars) {
      const listStars = await data.stars;
      for (let s = 0; s < (await listStars.length); s++) {
        await StarModel.findByIdAndUpdate(
          listStars[s],
          { $push: { movies: movie._id } },
          { new: true, overwrite: false }
        );
      }
    } else {
    }
    await res.send(movie);
  }
};

module.exports = createMovie;

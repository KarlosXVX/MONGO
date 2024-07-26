// CRUD = CREATE READ UPDATE DELATE

const { json } = require("express");
const Movie = require("../models/movie");

const getMovies = async (req, res, next) => {
  try {
    const movie = await Movie.find();
    return res.status(200).jason(movies)

  } catch (error) {
    return res.status(400).json("Error");

  }
}

const postMovies = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    const movieSaved = await newMovie.save();
    return res.status(201).json(movieSaved);

  } catch (error) {
    return res.status(400).json("Error");

  }
}
const updateMovies = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newMovie = new Movie(req.body)

    newMovie._id = id;

    const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, { new: true });

    return res.status(200).json(movieUpdated);

  } catch (error) {
    return res.status(400).json("Error");
  }
}
const delateMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const moviedelated = await Movie.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Eliminado",
      elemento: moviedelated,
    })
  } catch (error) {
    return res.status(400).json("Error");
  }
}

module.exports = {
  getMovies,
  postMovies,
  updateMovies,
  delateMovies

}
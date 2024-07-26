const { getMovies, postMovies, updateMovies, delateMovies } = require("../controllers/movie");

const moviesRouter = require("express").Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/", postMovies);
moviesRouter.put("/:id", updateMovies);
moviesRouter.delete("/:id", delateMovies)

module.exports = moviesRouter;

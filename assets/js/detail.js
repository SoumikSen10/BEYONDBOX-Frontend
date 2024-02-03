'use strict';

import { api_key, fetchDataFromServer } from "./api.js";

import { sidebar } from "./sidebar.js";

import { createMovieCard } from "./movie-card.js";

const movieId = window.localStorage("movieId");

const pageContent =document.querySelector("[page-content]");



sidebar();


fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}d&append_to_response=casts,videos,images,releases`,function(movie){



});


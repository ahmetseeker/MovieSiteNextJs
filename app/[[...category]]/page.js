import React from "react"
import HomeContainer from "@/containers/home"

import { getPopularMovies, getTopRatedMovies, getCategories, getSingleCategory } from "@/services/movieService";


export default async function Home({ params, searchParams}) {
  let selectedCategory;

  const [{results: popularMovies}, {results: topRatedMovies}, { genres: categories }] = await Promise.all([getPopularMovies(), getTopRatedMovies(), getCategories()]);

  if(params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer popularMovies={popularMovies} topRatedMovies = {topRatedMovies} categories = {categories} selectedCategory={{ id: params.category?.[0] ?? "", movies: selectedCategory ? selectedCategory.slice(0, 7) : []}}/>
  )
}

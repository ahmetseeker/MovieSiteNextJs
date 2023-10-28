import FeaturedMovie from '@/components/featured-movie'
import React from 'react'
import Catefories from "@/components/categories"
import MoviesSection from '@/components/movies-section'

export default function HomeContainer({ popularMovies = [], topRatedMovies = [], categories = [], selectedCategory }) {
  return (
    <div>
        <FeaturedMovie movie={topRatedMovies?.[0]}/>
        <Catefories categories={categories.slice(0, 5)}/>
        {selectedCategory.movies.length > 0 && <MoviesSection title={categories.find(genre => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies}/> }
        <MoviesSection title="Popular Films" movies={popularMovies.slice(1,7)}/>
        <MoviesSection title="Your Favorites" movies={topRatedMovies.slice(7,13)}/>
    </div>
  )
}

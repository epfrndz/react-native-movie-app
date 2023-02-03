import React, { useState } from 'react'
import MovieDropdown from '../elements/MovieDropdown'
import ResultList from '../lists/ResultList'
import { Box, VStack } from 'native-base'

const MoviesContainer = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])

  return (
    <VStack space={3} mt={2} mb={5} pb={60}>
      <MovieDropdown setMovies={setMovies} moviesLoading={setIsLoading} />
      <Box px={2} pb={10}>
        {isLoading ? <></> : <ResultList movies={movies} navigation={navigation} />}
      </Box>
    </VStack>
  )
}

export default MoviesContainer
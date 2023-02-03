import React, { useState } from 'react'
import ResultList from '../lists/ResultList'
import { Box, VStack } from 'native-base'
import TVDropdown from '../elements/TVDropdown'

const TVContainer = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [tvshows, setTvshows] = useState([])

  return (
    <VStack space={3} mt={2} mb={5} pb={60}>
      <TVDropdown setTvshows={setTvshows} tvLoading={setIsLoading} />
      <Box px={2} pb={10}>
        {isLoading ? <></> : <ResultList tvshows={tvshows} navigation={navigation} />}
      </Box>
    </VStack>  )
}

export default TVContainer
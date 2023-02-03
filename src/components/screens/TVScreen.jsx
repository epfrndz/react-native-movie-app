import { View, Text } from 'react-native'
import React from 'react'
import TVContainer from '../containers/TVContainer'

const TVScreen = ({route}) => {
  return (
    <TVContainer navigation={route.params.navigation} />
  )
}

export default TVScreen
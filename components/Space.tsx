import React from 'react'
import { View } from 'react-native'

const Space = ({space= 20}:{space?:number}) => {
  return (
    <View style={{ height: space }} />

  )
}

export default Space
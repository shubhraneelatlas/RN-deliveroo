import { View, Text, Image,  TouchableOpacity } from 'react-native'
import React from 'react'


const CategoryCard = ({imageURL, title}) => {
  return (
    <TouchableOpacity className="px-1">
        <Image source={imageURL} className="w-24 h-24"/>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
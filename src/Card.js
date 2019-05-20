import React from 'react'
import { View } from '@instructure/ui-layout'

const Card = ({ header, ...props }) => (
  <View 
    as='div'
    border="small"
  >
    <View
      background='inverse'
    >
        {header}
    </View>
    <View props />
  </View>
)

export default Card
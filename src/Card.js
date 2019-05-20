import React from 'react'
import { View } from '@instructure/ui-layout'

const Card = ({ header, contents }) => (
  <View 
    as='div'
    border="small"
  >
    <View
      background='inverse'
    >
        {header}
    </View>
    <View>{contents}</View>
  </View>
)

export default Card
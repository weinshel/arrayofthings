import React from 'react'
import { Text, Header } from '@instructure/ui-elements'

import { View } from '@instructure/ui-layout'

const Card = ({ header, content }) => (
  <View
    as="div"
    padding="small medium small medium"
    borderWidth="medium"
    borderRadius="medium"
    display="inline-block"
    margin="0 0 0 medium"
  >
    <View
      as="header"
      padding="0 0 x-small"
      margin="0 0 x-small"
      borderWidth="0 0 small 0"
      backround="inverse"
    >
    <Text weight="bold">{header}</Text>
    </View>
    <Text>{content}</Text>
  </View>
)

export default Card
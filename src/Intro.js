import React from 'react'

import { Text, Heading } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { Flex } from '@instructure/ui-layout'


class Intro extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }


  async componentDidMount () {

  }

  render () {
    const { 
      
    } = this.state

    return (
      <div>
        <Heading>Intro</Heading>
      </div>
    )
  }
}

export default Intro
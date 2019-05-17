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
        <Text size="xx-large" fontStyle="italic">
            <p>The Array of Things is a networked urban sensor project that’s changing our understanding of cities.</p>
        </Text>
        <Text size="x-large">
            <p>It collects data about the environment to inform researchers and the public, and is <strong>designed with privacy in mind.</strong></p>
        </Text>
      </div>
    )
  }
}

export default Intro
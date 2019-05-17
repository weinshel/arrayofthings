import React from 'react'

import { Text, Heading } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { Flex } from '@instructure/ui-layout'

const MyHeading = (props) => (
    <Heading
      theme={{h1FontWeight: 800, h2FontWeight: 800}}
      {...props}
    />
)


class Details extends React.Component {
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
        <strong><MyHeading level="h1">The Array of Things is designed with privacy in mind.</MyHeading></strong>
        <Text><p>The devices have been carefully engineered to protect your privacy. We do not collect or store any personally identifiable information, and use industry-leading security practices. Aggregate data is available to researchers and the public.</p>
        <p>Scroll down to learn more about what data the devices collect.</p></Text>
        <MyHeading level="h2">Camera</MyHeading>
      </div>
    )
  }
}

export default Details
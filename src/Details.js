import React from 'react'

import { Text, Heading } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { Flex } from '@instructure/ui-layout'

const MyHeading = (props) => (
    <Heading
      theme={{h1FontWeight: 800, h2FontWeight: 700}}
      {...props}
      margin="large 0 small 0"
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
        <Text size="large">
          <p>The devices have been carefully engineered to protect your privacy. We do not collect or store any personally identifiable information, and use industry-leading security practices. Aggregate data is available to researchers and the public.</p>
          <p>Scroll down to learn more about what data the devices collect.</p>
        </Text>
        
        <MyHeading level="h2">Camera 📷</MyHeading>
        <Text size="large">
          <p>A camera is only used to measure the following attributes, which are determined by a machine learning algorithm. <strong>Pictures or video on the camera never are sent or stored.</strong></p>
        </Text>

        <MyHeading level="h2">Microphone 🎤</MyHeading>
        <Text size="large">
          A microphone is only used to determine the loudness of sound around the device. <strong>Audio recordings are never sent or stored.</strong>
        </Text>

        <MyHeading level="h2">Environmental sensors ☁️</MyHeading>
        <Text size="large">
          A variety of environmental sensors are used to help better understand the surrounding world. <strong>Data collected cannot be used to identify individuals.</strong>
        </Text>

        <MyHeading level="h3">Weather 🌦</MyHeading>
        <Text size="medium">
          Used to determine weather conditions.
        </Text>

        <MyHeading level="h3">Light 💡</MyHeading>
        <Text size="medium">
          Used to determine cloud cover and sunlight intensity.
        </Text>

        <MyHeading level="h3">Air 💨</MyHeading>
        <Text size="medium">
          Used to determine air quality and health.
        </Text>

        <MyHeading level="h3">Gravity & magnetism 🌎</MyHeading>

        <MyHeading level="h2">About us</MyHeading>
        <Text size="large">
          <p>The Array of Things is built by researchers from the Urban Center for Computation and Data, a joint initiative of Argonne National Laboratory and the University of Chicago, and with oversight from the City of Chicago.</p>
          <p>Aggregate data collected from the devices is available to the public though the City of Chicago data portal, with the goal of stimulating research to better understand our surroundings.</p>
        </Text>

        <img src="logos.svg"></img>

      </div>
    )
  }
}

export default Details
import React from 'react'

import { theme } from '@instructure/canvas-theme'
import { Text, Heading } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { Flex } from '@instructure/ui-layout'


import Intro from './Intro'
import Details from './Details'

import { themeOverrides } from './colors'

theme.use({ overrides: themeOverrides })

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      details: false
    }

    this.goBack = this.goBack.bind(this)
    this.goForward = this.goForward.bind(this)
  }

  goBack () {
    this.setState({details: false})
  }

  goForward () {
    this.setState({details: true})
  }

  async componentDidMount () {

    
  }

  render () {
    const { details } = this.state

    return (
      <div style={{width: '1000px', maxWidth: '90%', padding:'20px'}}>
        {!details && <div>
          <Intro />
          <Button 
            size="large"
            onClick={this.goForward}
            margin="xx-large 0 xx-large 0"
          >Tap to learn more</Button>
        </div>}

        {details && <div>
          <Button
            onClick={this.goBack}
            margin="0 0 large 0"
          >Back</Button>
          <Details/>
        </div>}
      </div>
    )
  }
}

export default App
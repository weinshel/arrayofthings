import React from 'react'

import Webcam from 'react-webcam'
import DarkSkyApi from 'dark-sky-api'
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

  getAudio () {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(function(stream) {
    var audioContext = new AudioContext();
    var analyser = audioContext.createAnalyser();
    var microphone = audioContext.createMediaStreamSource(stream);
    var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);
    javascriptNode.onaudioprocess = function() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var values = 0;

        var length = array.length;
        for (var i = 0; i < length; i++) {
          values += (array[i]);
        }

        var average = values / length;

      console.log(Math.round(average));
    }
    })
    .catch(function(err) {
  });
}

  async componentDidMount () {

    this.getAudio()
    
    DarkSkyApi.apiKey = '063be74a6b9691f10b7c4e43f2f642af';
    const position = {
      latitude: 41.78468745,
      longitude: -87.60074932651055
    };
    DarkSkyApi.loadCurrent(position)
      .then(result => console.log(result));


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
        <Webcam />
      </div>
    )
  }
}

export default Details

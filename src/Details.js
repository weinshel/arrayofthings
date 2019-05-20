import React from 'react'

import Webcam from 'react-webcam'
import DarkSkyApi from 'dark-sky-api'
import { Text, Heading, Progress } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { Flex } from '@instructure/ui-layout'

import Card from './Card'
import SoundMeter from './SoundMeter'

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

    // this.getAudio = this.getAudio.bind(this)
  }

//   async getAudio () {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
//     var audioContext = new AudioContext();
//     var analyser = audioContext.createAnalyser();
//     var microphone = audioContext.createMediaStreamSource(stream);
//     var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

//     analyser.smoothingTimeConstant = 0.8;
//     analyser.fftSize = 1024;

//     microphone.connect(analyser);
//     analyser.connect(javascriptNode);
//     javascriptNode.connect(audioContext.destination);

//     let average;
//     javascriptNode.onaudioprocess = () => {
//       var array = new Uint8Array(analyser.frequencyBinCount);
//       analyser.getByteFrequencyData(array);
//       var values = 0;

//       var length = array.length;
//       for (var i = 0; i < length; i++) {
//         values += (array[i]);
//       }

//       average = values / length;

//     }
//     setInterval(() => {
//       this.setState({audioLevel: average.toFixed(2)})
//     }, 1000)
// }

  async componentDidMount () {

    
    
    DarkSkyApi.apiKey = '063be74a6b9691f10b7c4e43f2f642af';
    const position = {
      latitude: 41.78468745,
      longitude: -87.60074932651055
    };
    DarkSkyApi.loadCurrent(position)
      .then(result => console.log(result));


    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.audioContext = new AudioContext();
    } catch (e) {
      alert('Web Audio API not supported.');
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    const soundMeter = new SoundMeter(window.audioContext);
    soundMeter.connectToSource(stream, (e) => {
      if (e) {
        console.log(e);
        return;
      }
      setInterval(() => {
        this.setState({audioLevel: soundMeter.slow.toFixed(3)})
      }, 200);
  });

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
          <p>Audio level: {this.state.audioLevel}</p>
          <Progress label="Loading completion" valueNow={this.state.audioLevel} valueMax={.3} />

        </Text>

        <MyHeading level="h2">Environmental sensors ☁️</MyHeading>
        <Text size="large">
          A variety of environmental sensors are used to help better understand the surrounding world. <strong>Data collected cannot be used to identify individuals.</strong>
        </Text>

        <MyHeading level="h3">Weather 🌦</MyHeading>
        <Text size="medium">
          Used to determine weather conditions.
        </Text>
        <Card header='Temperature' contents={this.state.temperature}>asdf</Card>
        <p>temp: {this.state.temperature}</p>

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

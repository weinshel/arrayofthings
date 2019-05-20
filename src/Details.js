import React from 'react'

import * as ml5 from "ml5"
import DarkSkyApi from 'dark-sky-api'
import { Text, Heading, Progress } from '@instructure/ui-elements'
import { View } from '@instructure/ui-layout'

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
      numPeople: 0
    }


    this.componentDidMount = this.componentDidMount.bind(this)
    this.poseNetVid = this.poseNetVid.bind(this)
  }



poseNetVid = () => {
  const video = document.getElementById('video');

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  // Create a new poseNet method
  const poseNet = ml5.poseNet(video, modelLoaded);

  // When the model is loaded

  // Listen to new 'pose' events
  poseNet.on('pose', (results) => {
    console.log(results);

    this.setState({numPeople: results.length})
  });
}

  async componentDidMount () {

    var video = document.querySelector("#video")

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }

    DarkSkyApi.apiKey = '063be74a6b9691f10b7c4e43f2f642af';
    const position = {
      latitude: 41.78468745,
      longitude: -87.60074932651055
    };
    DarkSkyApi.loadCurrent(position)
      .then((result) => {
        console.log(result);

        this.setState({temperature: result.temperature})
        this.setState({humidity: result.humidity *100})
        this.setState({pressure: result.pressure})
        this.setState({uvIndex: result.uvIndex})
        this.setState({ozone: result.ozone})
        this.setState({visibility: result.visibility})
      });

      this.poseNetVid()




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
        <View 
          margin="0 medium 0 0" 
          width ={300} 
          height={200}
          display="inline-block"
        >
          <video autoPlay={true} id="video" width ={300} height={200}></video>
        </View>
        <Card header='Number of people' content={this.state.numPeople} />


        <MyHeading level="h2">Microphone 🎤</MyHeading>
        <Text size="large"><p>A microphone is only used to determine the loudness of sound around the device. <strong>Audio recordings are never sent or stored.</strong></p></Text>
          <Card 
            header='Audio level' 
            content={<Progress label="Audio level" valueNow={this.state.audioLevel} valueMax={.3} />} 
          />

        <MyHeading level="h2">Environmental sensors ☁️</MyHeading>
        <Text size="large">
          A variety of environmental sensors are used to help better understand the surrounding world. <strong>Data collected cannot be used to identify individuals.</strong>
        </Text>

        <MyHeading level="h3">Weather 🌦</MyHeading>
        <Text size="medium"><p>
          Used to determine weather conditions.
        </p></Text>
        <Card header='Temperature' content={this.state.temperature + 'ºF'} />
        <Card header='Humidity' content={this.state.humidity + '%'} />
        <Card header='Temperature' content={this.state.pressure + 'hPa'} />

        <MyHeading level="h3">Light 💡</MyHeading>
        <Text size="medium"><p>Used to determine cloud cover and sunlight intensity.</p></Text>
        <Card header='UV index' content={this.state.uvIndex} />
        <Card header='Visible light' content={this.state.visibility} />

        <MyHeading level="h3">Air 💨</MyHeading>
        <Text size="medium"><p>Used to determine air quality and health.</p></Text>
        <Card header='Ozone' content={this.state.ozone} />


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

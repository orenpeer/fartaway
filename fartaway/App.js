// import 'expo';
import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Sound from 'react-native-sound';
// import Pusher from 'pusher-js/react-native';

// Pusher.logToConsole = true;
// var pusher = new Pusher('05e72dc56935d81774f5', {
//   cluster: 'eu',
//   encrypted: true
// });

// var channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//   alert(data.message);
// });

const fartInfo = {
  isRequire: true,
  url: require('./assets/fart.mp3')
  // url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3'
}

function playSound(testInfo) {

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      return;
    }
    sound.play(() => {
      // Release when it's done so we're not using up resources
      sound.release();
    });
  };

  // If the audio is a 'require' then the second parameter must be the callback.
  if (testInfo.isRequire) {
  const sound = new Sound(testInfo.url, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
  }
}



export default class App extends React.Component {

  constructor(props) {
    super(props);
    Sound.setCategory('Playback');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              return playSound(fartInfo, this);
            }}
            title="fart-fart-away!"
          />
        </View>
        <Text style={styles.textColor}>press and be amazed</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'yellow'
  }
});

import React from 'react';
import {View, Text} from 'react-native';
import VideoUpload from './components/VideoUpload';
import Video from 'react-native-video';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <VideoUpload />
    </View>
  );
};

export default App;

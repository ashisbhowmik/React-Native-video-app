import React from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';

const CustomVideo = () => {
  return (
    <View
      style={{
        display: 'flex',
      }}>
      <Video
        source={{
          uri: 'https://static.videezy.com/system/resources/previews/000/043/143/original/lights_go.mp4',
        }}
        style={{height: 280, width: 220}}
        muted={false}
        repeat
      />
    </View>
  );
};

export default CustomVideo;

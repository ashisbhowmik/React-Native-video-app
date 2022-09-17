import React from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';

const CustomVideo = ({file}) => {
  return (
    <View
      style={{
        display: 'flex',
      }}>
      <Video
        source={{
          uri: file,
        }}
        style={{height: 300, width: 190}}
        muted={false}
        repeat
      />
    </View>
  );
};

export default CustomVideo;

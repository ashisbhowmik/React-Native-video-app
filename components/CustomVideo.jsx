import React from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';

const CustomVideo = ({path}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <View>Hello</View> */}
      <Video
        source={{
          uri: path,
        }}
        style={{height: 230, width: 400}}
        muted={false}
      />
    </View>
  );
};

export default CustomVideo;

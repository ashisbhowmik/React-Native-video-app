import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

const CustomVideo = ({file, height, width}) => {
  return (
    <View>
      <Video
        source={{
          uri: file,
        }}
        style={{height: height, width: 350}}
        muted={false}
        repeat
      />
    </View>
  );
};

export default CustomVideo;

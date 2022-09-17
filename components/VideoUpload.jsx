import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomVideo from './CustomVideo';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const VideoUpload = () => {
  const [fileName, setFileName] = useState('');
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(300);
  const selectVideo = async () => {
    console.log('Clicked for launging Library');
    const options = {
      saveToPhotos: true,
      mediaType: 'video',
      videoQuality: 'medium',
    };

    try {
      console.log('Enterted in this block');
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.CAMERA,
      // );
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   const res = await launchCamera(options);
      //   console.log(res);
      // }
      const result = await launchImageLibrary(options);
      console.log(result);
      setFileName(result.assets[0].uri);
      setHeight(result.assets[0].height);
      setWidth(result.assets[0].width);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(fileName);
  console.log(height);
  console.log(width);

  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={() => selectVideo('video')}>
        <Text style={{color: '#fff', padding: 12, fontSize: 19}}>
          Pick File
        </Text>
      </TouchableOpacity>
      {fileName != '' && (
        <View>
          <Text style={{marginTop: 9}}>{fileName}</Text>
        </View>
      )}

      {fileName != '' && (
        <View style={{marginTop: 19, marginLeft: 23}}>
          <CustomVideo file={fileName} height={height} width={width} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerStyle: {
    marginTop: 30,
    backgroundColor: 'blue',
    borderRadius: 12,
  },
  loadingStyle: {
    marginTop: 9,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaPlayer: {
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  viewStyle: {
    height: 250,
    backgroundColor: 'red',
    justifyContent: 'center',
    width: 250,
  },
  videoStyle: {
    // height: 250,
  },
});

export default VideoUpload;

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
import CustomVideo from './CustomVideo';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const VideoUpload = () => {
  // const [imageDeatils, setImageDetails] = useState([]);
  const [fileName, setFileName] = useState('');

  const [image, setImage] = useState(
    'https://bobraley.files.wordpress.com/2016/08/image1.jpeg?w=1800',
  );
  // const selectImage = async () => {
  //   console.log('Clicked');
  //   try {
  //     await ImagePicker.openPicker({
  //       width: 300,
  //       height: 400,
  //       cropping: true,
  //     }).then(image => {
  //       console.log(image);
  //       // setImageDetails(image);
  //       setImage(image.path);
  //       const details = image.path.split('/');
  //       setFileName(details[details.length - 1]);
  //       setFileName2(details[details.length - 1]);
  //     });
  //   } catch (e) {
  //     console.log('Error is -> ' + e);
  //   }
  // };
  const selectVideo = async type => {
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
      // console.log(result.assets[0].uri);
      setFileName(result.assets[0].uri);
      // setVideoName(result.assets[0].uri);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(fileName);

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
      {/* <View style={{marginTop: 12}}>
        <Button
          title="Upload"
          disabled={fileName == ''}
          onPress={handleUpload}
        />
      </View> */}
      {/* {loading && (
        <View style={styles.loadingStyle}>
          <Text>Please wait, uploading...</Text>
        </View>
      )} */}
      {/* {message && (
        <View style={styles.loadingStyle}>
          <Text>Image Uploaded Successfully</Text>
        </View>
      )} */}
      {/* <View style={{marginTop: 30}}>
        <ImageBackground
          source={{
            uri: image,
          }}
          imageStyle={{borderRadius: 12}}
          style={{height: 190, width: 190}}
        />
      </View> */}
      {fileName != '' && (
        <View style={{marginTop: 19}}>
          <CustomVideo file={fileName} />
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

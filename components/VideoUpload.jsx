import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {storage} from '../firebase/firebae-config';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import CustomVideo from './CustomVideo';

const VideoUpload = () => {
  const [imageDeatils, setImageDetails] = useState([]);
  const [fileName, setFileName] = useState('');
  const [fileName2, setFileName2] = useState('');
  const [message, showMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(
    'https://bobraley.files.wordpress.com/2016/08/image1.jpeg?w=1800',
  );
  // const handleUpload = async () => {
  //   const storageRef = ref(storage, `images/${fileName}`);
  //   const uploadTask = uploadBytesResumable(storageRef, imageDeatils.path);
  //   uploadTask.on(
  //     error => {
  //       console.log('Something went wrong');
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
  //         console.log('File available at-> -> -> ', downloadURL);
  //       });
  //     },
  //   );
  // };
  const selectImage = async () => {
    console.log('Clicked');
    try {
      await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        // setImageDetails(image);
        setImage(image.path);
        const details = image.path.split('/');
        setFileName(details[details.length - 1]);
        setFileName2(details[details.length - 1]);
      });
    } catch (e) {
      console.log('Error is -> ' + e);
    }
  };
  console.log(fileName);

  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity style={styles.containerStyle} onPress={selectImage}>
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
      {loading && (
        <View style={styles.loadingStyle}>
          <Text>Please wait, uploading...</Text>
        </View>
      )}
      {message && (
        <View style={styles.loadingStyle}>
          <Text>Image Uploaded Successfully</Text>
        </View>
      )}
      <View style={{marginTop: 30}}>
        <ImageBackground
          source={{
            uri: image,
          }}
          imageStyle={{borderRadius: 12}}
          style={{height: 190, width: 190}}
        />
      </View>
      <View style={{marginTop: 34}}>
        <CustomVideo path={image} />
      </View>
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

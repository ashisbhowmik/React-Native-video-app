import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {db} from '../firebase/firebae-config';
import {doc, setDoc} from 'firebase/firestore/lite';
const VideoUpload = () => {
  const [imageDeatils, setImageDetails] = useState([]);
  const [fileName, setFileName] = useState('');
  const [fileName2, setFileName2] = useState('');
  const [message, showMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleUpload = async () => {
    setLoading(true);
    await setDoc(doc(db, 'image', fileName), {
      imageUrl:
        'https://bobraley.files.wordpress.com/2016/08/image1.jpeg?w=1800',
    });
    setLoading(false);
    showMessage(true);
    setTimeout(() => {
      showMessage(false);
      setFileName('');
    }, 1000);
  };

  const selectImage = async () => {
    console.log('Clicked');
    try {
      await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setImageDetails(image);
        const details = image.path.split('/');
        setFileName(details[details.length - 1]);
        setFileName2(details[details.length - 1]);
      });
    } catch (e) {
      console.log('Error is -> ' + e);
    }
  };
  console.log(fileName);
  console.log(fileName2);
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

      <View style={{marginTop: 12}}>
        <Button
          title="Upload"
          disabled={fileName == ''}
          onPress={handleUpload}
        />
      </View>
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
    marginTop: 70,
    backgroundColor: 'blue',
    borderRadius: 12,
  },
  loadingStyle: {
    marginTop: 9,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoUpload;

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyDPo5R_obiBIz_4b60S-YCVR9JR_rzSi3M',
  authDomain: 'react-native-videoproject.firebaseapp.com',
  projectId: 'react-native-videoproject',
  storageBucket: 'react-native-videoproject.appspot.com',
  messagingSenderId: '83000484380',
  appId: '1:83000484380:web:42bc37b18f25e297fd75d9',
  measurementId: 'G-64CD290ZDZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

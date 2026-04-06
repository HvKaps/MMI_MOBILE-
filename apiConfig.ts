import { Platform } from 'react-native';

let url = 'http://192.168.1.92:8080/api/saes';

if (Platform.OS === 'android') {
  url = 'http://10.0.2.2:8080/api/saes';
} else if (Platform.OS === 'web') {
  url = 'http://localhost:8080/api/saes';
}

export const API_URL = url;
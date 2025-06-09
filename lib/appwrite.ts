import { Client, Account, Databases, Storage } from 'react-native-appwrite';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('681b300f0018fdc27bdd') // Your project ID
  .setPlatform('com.test.servicevale'); // Your app platform bundle ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);



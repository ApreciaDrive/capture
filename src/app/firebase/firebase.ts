import * as firebase from 'firebase';
import { environmentKey } from '../../environments/environment.dev';
import { environment } from '../../environments/environment';

const prodConfig = {
    apiKey: environmentKey.firebaseApiKey,
    authDomain: environmentKey.firebaseAuthDomain,
    databaseURL: environmentKey.firebaseDatabaseURL,
    projectId: environmentKey.firebaseProjectId,
    storageBucket: environmentKey.firebasStorageBucket,
    messagingSenderId: environmentKey.firebaseMessagingSenderId
};

const devConfig = {
    apiKey: environmentKey.firebaseApiKey,
    authDomain: environmentKey.firebaseAuthDomain,
    databaseURL: environmentKey.firebaseDatabaseURL,
    projectId: environmentKey.firebaseProjectId,
    storageBucket: environmentKey.firebasStorageBucket,
    messagingSenderId: environmentKey.firebaseMessagingSenderId
};

export const config = environment.production === false
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();

export {
    db,
    auth,
    storage
};

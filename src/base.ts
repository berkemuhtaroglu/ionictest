import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxdYeEIuNebSwzZ4NlbH0gb0LHAcN-DHY",
    authDomain: "ionic-test-cfb06.firebaseapp.com",
    databaseURL: "https://ionic-test-cfb06.firebaseio.com",
    projectId: "ionic-test-cfb06",
    storageBucket: "ionic-test-cfb06.appspot.com",
    messagingSenderId: "700316175207"
};

const app = firebase.initializeApp(config);

const auth = app.auth();
const db = app.database();


export {
    auth,
    db,
    config
}
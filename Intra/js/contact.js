
const firebaseConfig = {
    apiKey: "AIzaSyDa-hGnf2XJ7dBnTMaYRRfgP9hfLYRZ7xY",
    authDomain: "intratrial-3c5d1.firebaseapp.com",
    databaseURL: "https://intratrial-3c5d1-default-rtdb.firebaseio.com",
    projectId: "intratrial-3c5d1",
    storageBucket: "intratrial-3c5d1.appspot.com",
    messagingSenderId: "814032184151",
    appId: "1:814032184151:web:bace6148906b9be7629412",
    measurementId: "G-SR6ZPP978E"
  };
  firebase.initializeApp(firebaseConfig);

  db=firebase.database();
  db.ref("ogrenci").set("Hasan");


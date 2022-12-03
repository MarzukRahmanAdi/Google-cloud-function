const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const { initializeApp } = require("firebase/app");
const { collection, addDoc, getFirestore } = require("firebase/firestore"); 


const firebaseConfig = {
  apiKey: "AIzaSyAW46NXNagfbfs7F6encTLLyAVx6vXul3g",
  authDomain: "upwork-6a142.firebaseapp.com",
  projectId: "upwork-6a142",
  storageBucket: "upwork-6a142.appspot.com",
  messagingSenderId: "926245037202",
  appId: "1:926245037202:web:1e9a5c5cccfdbe7ba2f24b"
};


// Setting up the firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// This will make a Api endpoint at domain.com/reactForm
exports.reactForm = functions.https.onRequest(async(request, response) => {
    

    if(request.method === "POST") {
        //Writing the form details on firestore database.
        const docRef = await addDoc(collection(db, "posts"), {
            name: request.body.name,
            title: request.body.title,
            desc: request.body.desc
        });
        console.log("Document written with ID: ", docRef.id);

      response.send("All data saved");
    }

    else{
        response.send("No data saved")
    }

});


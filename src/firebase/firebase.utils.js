import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAlVHdU52f4BxuJkErV9wSUHByrFa25bYM',
	authDomain: 'react-comm-db.firebaseapp.com',
	databaseURL: 'https://react-comm-db.firebaseio.com',
	projectId: 'react-comm-db',
	storageBucket: 'react-comm-db.appspot.com',
	messagingSenderId: '617708135295',
	appId: '1:617708135295:web:6f91fc9587085179d4f04a',
	measurementId: 'G-3J90K9W0WM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const userSnapshot = await userRef.get();

	if (!userSnapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error(
				'There was an error creating the profile. ' + error.message
			);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

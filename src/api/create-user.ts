import firestore from '@react-native-firebase/firestore';

const createUser = async userDetails => {
  try {
    await firestore()
      .collection('Users')
      .doc(userDetails.uid)
      .set({
        phoneNumber: userDetails.phoneNumber,
      })
      .then(() => {
        console.log('User added!');
      });
  } catch (e) {
    console.log(e);
  }
};

export default createUser;

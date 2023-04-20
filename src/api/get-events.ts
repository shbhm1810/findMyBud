import firestore from '@react-native-firebase/firestore';

const getEvents = async () => {
  let result = {};
  try {
    let data = [];
    await firestore()
      .collection('Events')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const result = {
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          };
          data.push(result);
        });
      });
    console.log(data, 'sent');
    result = {
      data: data,
      status: 200,
      message: '',
    };
  } catch (e) {
    result = {
      data: null,
      status: 400,
      message: 'Unable to load events',
    };
  }
  return result;
};

export default getEvents;

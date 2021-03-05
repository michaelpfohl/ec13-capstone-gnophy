import axios from 'axios';

const baseUrl = 'https://gnophy-6c57e-default-rtdb.firebaseio.com';

const checkIfUserExists = (user) => {
  axios
    .get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios
          .post(`${baseUrl}/users.json`, user)
          .then((response) => {
            const update = { firebaseKey: response.data.name };
            axios.patch(
              `${baseUrl}/users/${response.data.name}.json`,
              update,
            );
          }).catch((error) => console.warn(error));
      }
      window.sessionStorage.setItem('ua', true);
    })
    .catch((error) => console.error(error));
};

const setCurrentUser = (userObj) => {
  const user = {
    image: userObj.photoURL,
    uid: userObj.uid,
    name: userObj.displayName,
    email: userObj.email,
    lastSignInTime: userObj.metadata.lastSignInTime,
    experience: 0,
  };

  const loggedIn = window.sessionStorage.getItem('ua');
  if (!loggedIn) {
    checkIfUserExists(user);
  }
  return user;
};

const getUser = (user) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${user}"`).then((response) => {
    resolve(Object.values(response.data)[0]);
  }).catch((error) => reject(error));
});

const addExperience = (userId, value) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${userId}"`).then((response) => {
    const userObj = Object.values(response.data)[0];
    axios.patch(`${baseUrl}/users/${userObj.firebaseKey}.json`,
      { experience: value }).then(resolve).catch((error) => reject(error));
  });
});

const userData = { setCurrentUser, addExperience, getUser };

export default userData;

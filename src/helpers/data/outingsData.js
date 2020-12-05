import axios from 'axios';

const baseUrl = '';

const createOuting = (outingObj) => {
  axios.post(`${baseUrl}/outings.json`, outingObj).then((response) => {
    axios.patch(`${baseUrl}/outings/${response.data.name}`, {
      firebaseKey: response.data.name,
    });
  }).catch((error) => console.warn(error));
};

const getOutings = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outings.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getSingleOuting = (outingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outings/${outingId}.json`)
    .then((response) => {
      resolve(response.data);
    }).catch((error) => reject(error));
});

const updateOuting = (outingObj) => {
  axios.patch(`${baseUrl}/outings/${outingObj.firebaseKey}.json`, outingObj);
};

const deleteOuting = (outingId) => axios.delete(`${baseUrl}/outings/${outingId}`);

export default {
  createOuting,
  getOutings,
  getSingleOuting,
  updateOuting,
  deleteOuting,
};

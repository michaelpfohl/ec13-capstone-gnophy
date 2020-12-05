import axios from 'axios';

const baseUrl = 'https://gnophy-6c57e-default-rtdb.firebaseio.com';

const createOuting = (outingObj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/outings.json`, outingObj).then((response) => {
    axios.patch(`${baseUrl}/outings/${response.data.name}.json`, {
      firebaseKey: response.data.name,
    }).then((res) => {
      resolve(res);
    });
  }).catch((error) => reject(error));
});

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

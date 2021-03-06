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

const updateOuting = (outingObj) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/outings/${outingObj.firebaseKey}.json`, outingObj)
    .then((response) => {
      resolve(response);
    }).catch((error) => reject(error));
});

const deleteOuting = (outingId) => axios.delete(`${baseUrl}/outings/${outingId}.json`);

const searchOutings = (userId, searchTerm) => new Promise((resolve, reject) => {
  getOutings(userId).then((response) => {
    const searchResults = response.filter((res) => res.name.toLowerCase().includes(searchTerm) || res.location.toLowerCase().includes(searchTerm) || res.biome.toLowerCase().includes(searchTerm));
    resolve(searchResults);
  }).catch((error) => reject(error));
});

const outingsData = {
  createOuting,
  getOutings,
  getSingleOuting,
  updateOuting,
  deleteOuting,
  searchOutings,
};

export default outingsData;

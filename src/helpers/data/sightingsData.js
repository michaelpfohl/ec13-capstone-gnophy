import axios from 'axios';

const baseUrl = 'https://gnophy-6c57e-default-rtdb.firebaseio.com';

const createSighting = (sightingObj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/sightings.json`, sightingObj).then((response) => {
    axios.patch(`${baseUrl}/sightings/${response.data.name}.json`, {
      firebaseKey: response.data.name,
    }).then((res) => {
      resolve(res);
    });
  }).catch((error) => reject(error));
});

const getSightings = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/sightings.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getUserSightings = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/sightings.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getOutingSightings = (outingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/sightings.json?orderBy="outingId"&equalTo="${outingId}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getSingleSighting = (sightingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/sightings/${sightingId}.json`)
    .then((response) => {
      resolve(response.data);
    }).catch((error) => reject(error));
});

const updateSighting = (sightingObj) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/sightings/${sightingObj.firebaseKey}.json`, sightingObj)
    .then((response) => {
      resolve(response);
    }).catch((error) => reject(error));
});

const deleteSighting = (sightingId) => axios.delete(`${baseUrl}/sightings/${sightingId}.json`);

const deleteOutingSightings = (outingId) => new Promise(() => {
  axios.get(`${baseUrl}/sightings.json?orderBy="outingId"&equalTo="${outingId}"`)
    .then((response) => {
      const toBeDeleted = Object.keys(response.data);
      toBeDeleted.forEach((sightingId) => {
        deleteSighting(sightingId);
      });
    });
});

export default {
  createSighting,
  getSightings,
  getUserSightings,
  getOutingSightings,
  getSingleSighting,
  updateSighting,
  deleteSighting,
  deleteOutingSightings,
};

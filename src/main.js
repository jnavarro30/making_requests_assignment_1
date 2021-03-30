const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios
  .get(`${BASE_URL}/constellations`)
  .then(response => {
    const info = response.data;
    console.log(info);
  })
}

function create(body) {
  axios
  .post(`${BASE_URL}/constellations`, body)
  .then(response => {
    const newConstellation = response.data;
    console.log(newConstellation);
  })
}

function show(id) {
  axios
  .get(`${BASE_URL}/constellations/${id}`)
  .then(response => {
    const constellation = response.data;
    console.log(constellation);
  })
}

function update(id, body) {
  axios
  .put(`${BASE_URL}/constellations/${id}`, body)
  .then(response => {
    const updatedConstellation = response.data;
    console.log(updatedConstellation);
  })
}

function destroy(id) {
  axios
  .delete(`${BASE_URL}/constellations/${id}`)
  .then(response => {
    const deletedConstellation = response.data;
    console.log(deletedConstellation);
  })
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};


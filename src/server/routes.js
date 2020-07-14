var express = require('express');
var DB = require('./db');
var axios =require('axios');

const api = axios.create({
    method: 'post',
    baseURL: "https://evilfer.github.io/"
  })

let dataObj = 'loading...';

const getLists = async () => {
    try {
      let data = await api.get(`frontend-dev-api/data.json`).then(({ data }) => data);
      dataObj = data;
    } catch (exp) {
      console.error(exp);
    }
  } 

const router = express.Router();

router.get('/api/cancer_research', async(req, res) => {
    getLists() 
    try {
        res.json(dataObj);
        console.log(dataObj)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

module.exports = router
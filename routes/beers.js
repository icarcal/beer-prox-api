const express = require('express');
const axios = require('axios');

const router = express.Router();
const BEER_API = 'https://api.punkapi.com/v2/beers';

/* GET home page. */
router.get('/', (req, res) => {
  axios.get(`${BEER_API}/?abv_gt=1&abv_lt=10&ibu_gt=1&ibu_lt=1000&ebc_gt=1&ebc_lt=1000&beer_name=A&per_page=1&page=1`).then((response) => {
    const { data } = response;
    return res.json(data);
  }).catch((error) => {
    const statusCode = 504;
    const { response } = error;
    res.status(statusCode);

    if (response) {
      return res.json(response.data);
    }

    res.json({
      statusCode,
      error: 'Proxy timed out',
      message: 'The proxy server is not responding, please try again later',
    });
  });
});

module.exports = router;

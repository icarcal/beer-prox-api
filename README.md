# Beer Proxy API

Proxy API for https://punkapi.com/documentation/v2

Install dependencies, then start the node process with the following:

```
> git clone https://github.com/icarcal/beer-prox-api.git
> cd beer-prox-api
> npm install
> npm start ./bin/www
```

**Access the app on http://localhost:3000/beers**

Despite of being a proxy, you can overwrite the following parameters (and only this parameters, any other parameter will be removed from the proxy).

| PARAM     | TYPE   | DETAILS                                                                                                                                                                        |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| abv_gt    | number | Returns all beers with ABV greater than the supplied number                                                                                                                    |
| abv_lt    | number | Returns all beers with ABV less than the supplied number                                                                                                                       |
| ibu_gt    | number | Returns all beers with IBU greater than the supplied number                                                                                                                    |
| ibu_lt    | number | Returns all beers with IBU less than the supplied number                                                                                                                       |
| ebc_gt    | number | Returns all beers with EBC greater than the supplied number                                                                                                                    |
| ebc_lt    | number | Returns all beers with EBC less than the supplied number                                                                                                                       |
| beer_name | string | Returns all beers matching the supplied name (this will match partial strings as well so e.g punk will return Punk IPA), if you need to add spaces just add an underscore (_). |

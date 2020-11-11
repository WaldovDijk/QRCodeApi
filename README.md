# server

> An awesome project based on Ts.ED framework

See [Ts.ED](https://tsed.io) project for more information.

## Build setup

> **Important!** Ts.ED requires Node >= 10, Express >= 4, TypeScript >= 3 and yarn.

> **Important!** Follow these instructions step by step!

```batch
# install dependencies
$ npm i
$ yarn

# start server
$ npm start

```

## Different routes

> **Important!** These are the only routes available on this API. There are more routes in the shopware API.

```batch
# Show all routes available on admin API
GET - /v1/api/routes

# Get authentication token from shopware API
GET - /v1/api/token

# Get all products available
GET - /v1/shopworks/products

# Get all categories available
GET - /v1/shopworks/categories

# Update the json with products
POST - /v1/shopworks/Update

```

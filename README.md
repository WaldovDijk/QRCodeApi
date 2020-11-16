# server

> An awesome project based on Ts.ED framework

See [Ts.ED](https://tsed.io) project for more information.

## Build setup

> **Important!** Follow these instructions step by step!

> **Important!** Make sure you have NodeJS installed!

> [NodeJS Windows](https://nodejs.org/dist/v14.15.0/node-v14.15.0-x64.msi)

> [NodeJS MacOS](https://nodejs.org/dist/v14.15.0/node-v14.15.0.pkg)


> **Important!** Make sure you have yarn installed!

```batch
Yarn Windows: npm i -g yarn
Yarn MacOS: brew install yarn
```
> [Brew](https://brew.sh/)

> **Important!** Ts.ED requires Node >= 10, Express >= 4, TypeScript >= 3.

```batch
# install dependencies
$ npm i
$ yarn

```

> **Important!** Create a .env file in the server folder and put this in there!!

```batch
CLIENT_ID=SWIAVGJTSNBWNZZGOGNNUULIWQ
CLIENT_SECRET=Q051c040enpNMjlsVWttQVJQc3IyQjhDWGFTSmZ2N1liYlgyVTE
CLIENT_URL=https://qrcode.shopworks-clients.nl/
PORT=8080
```

># start server
```batch
$ npm start
```

## Different routes

> **Important!** These are the only routes available on this API. There are more routes in the shopware API.

```batch

# Get authentication token from shopware API
GET - /v1/api/token

# Get all products available
GET - /v1/shopworks/products

# Get all categories available
GET - /v1/shopworks/categories

# Update the json with products
POST - /v1/shopworks/Update

```

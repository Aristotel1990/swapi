# SWAPI extender

extend swapi api and keep count of starship and vehicles

### Prerequisites

Node, MongoDb

### Installing

Create .env file with mongo URI and db name example:

```
APP_NAME=SWAPI
SWAPI_URL=https://swapi.dev/api/
MONGO_URI_LOCAL=mongodb://localhost:27017/swapi
MONGO_URI_WEB=mongodb+srv://Teli:Teli123456789@swapi.zqt9e.mongodb.net/swapi?retryWrites=true&w=majority

DB_NAME=swapi

```

install modules

```bash
npm i
```

Polupate the DB

```bash
npm run seed
```

start the server

```bash
npm run start or npm run local with nodemon
```

## Simple test

```bash
npm run test
```

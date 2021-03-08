# NoteTask

A full-stack MERN app with authentication using passport and JWT to POST and GET Notes.

This project uses the following technologies:


- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components


## Configuration

Make sure to add your own `MONGOURI` database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000

//Run tests
npm test
```



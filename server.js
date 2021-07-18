const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.use(routes);

// turn on connection to db and server
app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}!`);
   sequelize.sync({ force: false });
 });

require('dotenv').config();

const express = require('express');
const app = express();
const sequelize = require('./db')
const bodyParser = require('body-parser')

const user = require('./controllers/usercontroller')

sequelize.sync();

app.use(bodyParser.json())
app.use(require('./middleware/headers'))

app.use('/user', user)
// app.use(require('./middleware/validate-session'))

// app.use(express.static(_dirname + '/public'))

// app.get('/', (req, res) => res.render('app'))

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`));
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser= require('cookie-parser')
const app = express()
const router = express.Router();
var http = require('http')
const util = require('util')

const routes = require('./routes')

var charities = require('./controllers/charities.controller.js');
var clients = require('./controllers/clients.controller.js');
var mentors = require('./controllers/mentors.controller.js');


app.get('/api/clients', clients.listClients) // list names
app.get('/api/clients/:id', clients.getClient) // To choose username
app.get('/api/clients/:id/meetings', clients.listMeetings)
app.get('/api/clients/:id/targets', clients.listTargets)

//Messages, reminders, requests
app.get('/api/charities/:id/alerts', charities.listAlerts)

app.get('/api/charities', charities.listCharities)
app.get('/api/charities/:id', charities.getCharity)
app.get('/api/mentors/:id', charities.getMentor)

app.get('/api/charities/:id/listContacts', charities.listContacts)
app.get('/api/charities/:id/listNews', charities.listNews)// All news items
app.get('/api/charities/:id/listResources', charities.listResources) // List resources (just titles)

app.get('api/resources/:id', resources.getResource)

app.post('/api/alerts/add', alerts.addAlert)

app.post('/api/clients/:id/addMeeting', clients.addMeeting)
app.post('/api/clients/:id/addTargets', clients.addTarget)

app.post('/api/clients/:id/approveMentor/:mentor', clients.approveMentor)
//app.post('/api/charities/:id/addMentor', charities.addMentor)

app.post('/api/mentors/:id/addClient', mentors.addClient)
app.post('/api/mentors/:id/listClients', mentors.listClients)


const port = process.env.PORT || 5000;
app.listen(port);

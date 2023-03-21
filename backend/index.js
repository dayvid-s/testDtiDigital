const express = require('express')

const server = express();

server.use(express.json())

const reminderNotes= []



server.listen(5000);
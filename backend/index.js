const express = require('express')

const server = express();

server.use(express.json())

const reminderNotes= []

server.get('/reminderNotes', (req, res) => {
    
    return res.json(reminderNotes)
})


server.post('/reminderNotes', (req, res) => {
    const {name} = req.body
    const {userDate} = req.body
    let userReminderNotes ={name, userDate}
    reminderNotes.push(userReminderNotes)

})


server.delete('/reminderNotes/:index', (req, res) => {
    const {index} = req.params

    reminderNotes.splice(index, 1)
    return res.json({ message: "Lembrete deletado com suceso"})

})


server.listen(5000);
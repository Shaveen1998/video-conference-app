const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid')
const io = require('socketio')(server)

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req,res)=>{
    res.render('room', {roomId: req.params.room})
})

io.on('connection',socket=>{
    socket.on('join-room',()=>{
        console.log("joined the room")
    })
})

server.listen(3030);
const express = require('express');

const app = express();

// require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require('./server/routes/chat.routes')(app);

const server = app.listen(8000, () => {
    console.log('Listening on port 8000');
})

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log(socket.id)
    console.log('Nice to meet you. (shake hand)');
    socket.on("Welcome", data => {
        socket.broadcast.emit( "Welcome", data);
    })
})
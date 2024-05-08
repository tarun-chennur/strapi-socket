const express = require('express');
const socketio = require('socket.io');
const app = express();
const ax=require('axios');
const path = require('path');
require("dotenv").config()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'socket.html'));
})

const server = app.listen(8000, () => {
    console.log('Server running!')
})
const io = socketio(server)
const token=process.env.STRAPI_TOKEN
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);
    socket.on('message', (msg_data) => {
        console.log(`New message from ${socket.id}: ${msg_data}`);
        const result=async ()=>{
            try{
            const res=await ax.post(process.env.MESSAGE_API_ENDPOINT || 'http://localhost:1337/api/messages', {
                data:{
                message_content:msg_data
                }
              },config)
            if(res.status == 200){
            io.emit('message', msg_data)
            }    
            return res.status
            }
            catch (err) {
                console.error(err.status);
            }
              
        }
        result().then(res=>console.log(res))
    })
    socket.on("disconnect", (reason) => {
        console.log(reason)
      });
})


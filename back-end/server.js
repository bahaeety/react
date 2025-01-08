const app = require('./app');
const http = require("http");
const {Server} = require("socket.io");

const server = http.createServer(app)
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
})
const online_users = new Map();

io.on("connection",(socket)=>{
console.log("user connected");
socket.on("user_connected",(username)=>{
  online_users.set(username,socket.id);
})
socket.on("disconnect",()=>{
  for (const [key, value] of online_users.entries()) {
    if(value === socket.id){
      online_users.delete(key);
    }
  }
})

socket.on("send_message",({recipient , message})=>{
  if(online_users.has(recipient)){
    io.to(online_users.get(recipient)).emit("receive_message",{message, sender:recipient})
  }
})
})






const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
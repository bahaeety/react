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
io.on("connection",(socket)=>{
console.log("user connected");
socket.on("send_message",(data)=>{
  socket.broadcast.emit("receive_message", data)
})
})






const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
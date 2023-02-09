const http = require("http");
const express = require("express");
const {Server} = require("socket.io");
const port = process.env.PORT || 4000;
const path = require("path");
const pdp = path.join(__dirname,"./build");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(express.static(pdp));
const server = http.createServer(app);



server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
}) 
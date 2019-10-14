//You will build this project using pure Node to gain a through understanding of Node.There are project using external modules.

//require node modules
const http = require("http");
//file imports
const respond = require("./lib/respond.js");
//connection settings
const port = process.env.port || 3000;

//Create Server
const server = http.createServer(respond);
//listen to client request on the specific port,the port should available.

server.listen(port, () => {
  console.log(`listening on port:${port}`);
});

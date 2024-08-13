import * as net from "net"

function newConn(socket: net.Socket) {
    console.log("new connection : ", socket.remoteAddress, socket.remotePort);
}

// Creates a new TCP Socket server
let server = net.createServer();

// Adds the listener for Socket connection
server.on('connection', newConn);
server.on('error', (err: Error) => { throw err });
// Start a server listening for connections
server.listen(4321, '127.0.0.1');
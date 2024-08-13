import * as net from "net";

function newConn(socket: net.Socket) {
  console.log("new connection : ", socket.remoteAddress, socket.remotePort);

  // Adds the listener for client Socket connection
  socket.on("data", (data: Buffer) => {
    socket.write(data);

    if (data.includes("q")) {
      socket.end();
    }
  });

  socket.on("end", () => {
    console.log("EOF");
  });
}

// Creates a new TCP Socket server
let server = net.createServer({ allowHalfOpen: true });

// Adds the listener for client Socket connection
server.on("connection", newConn);

// Adds the listener for error connection
server.on("error", (err: Error) => {
  throw err;
});

// Start a server listening for connections
server.listen(4321, "127.0.0.1");

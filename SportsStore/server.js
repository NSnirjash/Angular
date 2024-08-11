// const jsonServer = require('json-server');
// const authMiddleware = require('./authMiddleware.js');
// const server = jsonServer.create();
// const router = jsonServer.router('data.js');
// const middlewares = jsonServer.defaults();

// server.use(authMiddleware);
// server.use(router);
// server.listen(3500, () => {
// console.log('JSON Server is running on port 3500');
// });

const jsonServer = require('json-server');
const authMiddleware = require('./authMiddleware.js'); // Import your custom middleware
const server = jsonServer.create();
const router = jsonServer.router('data.js'); // Your data source
const middlewares = jsonServer.defaults();

server.use(middlewares); // Use default middlewares (logger, static, cors, etc.)
server.use(jsonServer.bodyParser); // Parse incoming request bodies

// Use your custom authentication middleware
server.use(authMiddleware);

server.use(router); // Use the default router

server.listen(3500, () => {
  console.log('JSON Server is running on port 3500');
});




import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import { createBareServer } from "@tomphttp/bare-server-node";
import { uvPath } from "../a-dev/a/lib/index.cjs";
import { fileURLToPath } from "url";
import { createServer } from "node:http";
import { hostname } from "node:os";

const p = fileURLToPath(new URL("public/", import.meta.url));
const p2 = fileURLToPath(new URL("views/", import.meta.url));
const p3 = fileURLToPath(new URL("public/imgs/favicon.ico", import.meta.url));

// import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/bare/");
const app = express();
// const PORT = 8080;

console.log("sigmafr4");

app.set('view engine', 'pug');
app.set('views', p2);

app.use(express.static(p));
app.use("/uv/", express.static(uvPath));

app.use(favicon(p3));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.render('home');
})

app.get('/learn/:game', (req,res) => {
  if (req.params.game === "1v1") {
    const game = fileURLToPath(new URL("views/gs/1v1.lol/index.html", import.meta.url));
    res.sendFile(game);
  } else if (req.params.game === "fall") {
    const game = fileURLToPath(new URL("views/gs/justfall/index.html", import.meta.url));
    res.sendFile(game);
  }
})

// app.listen(PORT, () => {
//     console.log(`BrainJet is up and running on port ${PORT}`);
// })

const server = createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 3010;

server.on("listening", () => {
  const address = server.address();

  // by default we are listening on 0.0.0.0 (every interface)
  // we just need to list a few
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});

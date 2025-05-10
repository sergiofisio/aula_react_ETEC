const fs = require("fs");
const https = require("https");
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const os = require("os");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use((req, _, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method.toUpperCase()} - ${
      req.originalUrl
    }`
  );
  next();
});

app.use(router);

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
};

const certPath = "cert/server.cert";
const keyPath = "cert/server.key";

const ip = getLocalIP();
let protocol;

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  const credentials = {
    cert: fs.readFileSync(certPath),
    key: fs.readFileSync(keyPath),
  };
  protocol = "https";
} else {
  protocol = "http";
}

const baseUrl = `${protocol}://${ip}:${port}`;

app.listen(port, () => {
  console.log(`✅ Servidor rodando em ${baseUrl}`);
  console.log(`🔗 Acesse a API em ${baseUrl}/init`);
});

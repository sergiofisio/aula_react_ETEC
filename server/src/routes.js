const express = require("express");

const router = express.Router();

router.get(["/", "", "/init"], (_, res) => {
  res.json({
    init: true,
    messsage: "Servidor rodando com sucesso!",
  });
});

router.use(require("./router/openRoutes"));

module.exports = router;

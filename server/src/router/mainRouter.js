const { Router } = require("express");
const usersRouter = require("./RouterUser/usersRouter");

const mainRouter = Router();
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;

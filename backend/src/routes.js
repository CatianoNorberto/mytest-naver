const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const UserController = require("./controllers/UserController");
const Registrations = require("./controllers/FormsController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  SessionController.store
);

routes.get("/users/check-cpf", UserController.checkCpf);
routes.get("/users/check-email", UserController.checkEmail);

routes.post(
  "/users",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      cpf: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  UserController.store
);

routes.get("/users/registrations", Registrations.index);
routes.get("/users/registrations/:id", Registrations.show);

routes.post(
  "/users/registrations",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.string().required(),
      projects: Joi.string().required(),
      office: Joi.string().required(),
      time: Joi.string().required(),
      url: Joi.string().required(),
      user_id: Joi.number().required(),
    }),
  }),
  Registrations.store
);
routes.put(
  "/users/registrations/:id",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.string().required(),
      projects: Joi.string().required(),
      office: Joi.string().required(),
      time: Joi.string().required(),
      url: Joi.string().required(),
    }),
  }),
  Registrations.editor
);
routes.delete("/users/registrations/:id", Registrations.infodelete);

module.exports = routes;

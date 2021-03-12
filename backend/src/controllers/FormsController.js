const { Op } = require("sequelize");
const Registrations = require("../models/Forms");

module.exports = {
  async index(req, res) {
    try {
      const users = await Registrations.findAll();

      return res.json(users);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar o formulario");
    }
  },

  async show(req, res) {
    const user_id = req.params.id;

    try {
      const users = await Registrations.findByPk(user_id);

      return res.json(users);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar registros");
    }
  },

  async store(req, res) {
    const { user_id } = req.headers;

    const { name, age, projects, office, time, url } = req.body;

    try {
      const registrations = await Registrations.create({
        name,
        age,
        projects,
        office,
        time,
        url,
        user_id,
      });

      return res.json(registrations);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao inserir registro");
    }
  },

  async editor(req, res) {
    const user_id = req.params.id;

    const { name, age, projects, office, time, url } = req.body;

    try {
      const registrations = await Registrations.update(
        {
          name,
          age,
          projects,
          office,
          time,
          url,
        },
        {
          where: {
            [Op.and]: [{ id: user_id }],
          },
        }
      );

      return res.json(registrations);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao editar registro");
    }
  },
  async infodelete(req, res) {
    const user_id = req.params.id;

    try {
      const registrations = await Registrations.destroy({
        where: {
          [Op.and]: [{ id: user_id }],
        },
      });

      return res.json(registrations);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar registro");
    }
  },
};

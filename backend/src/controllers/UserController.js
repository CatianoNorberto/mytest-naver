const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async checkCpf(req, res) {
    const { cpf } = req.query;
    try {
      const cpfExists = await User.findOne({
        where: {
          cpf: {
            [Op.eq]: cpf,
          },
        },
      });

      if (cpfExists) {
        return res.json({ result: true });
      }

      return res.json({ result: false });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao checar cpf");
    }
  },

  async checkEmail(req, res) {
    const { email } = req.query;
    try {
      const emailExists = await User.findOne({
        where: {
          email: {
            [Op.eq]: email,
          },
        },
      });

      if (emailExists) {
        return res.json({ result: true });
      }

      return res.json({ result: false });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao checar email");
    }
  },

  async store(req, res) {
    const { cpf, email, password } = req.body;

    try {
      const user = await User.create({ cpf, email, password });

      return res.json(user);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao cadastrar usuário");
    }
  },
};

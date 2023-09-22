const User = require("../models/user"); // Certifique-se de que o nome do modelo esteja correto e que a importação esteja em maiúsculas

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll(); // Use findAll() para obter todos os usuários

      return res.json(users);
    } catch (error) {
      console.error("Erro ao listar usuários:", error.message);
      return res.status(500).json({ error: "Erro ao listar usuários" });
    }
  },

  async store(req, res) {
    try {
      const { name, email } = req.body;

      // Use User em vez de user para criar uma instância do modelo
      const newUser = await User.create({ name, email });

      return res.json(newUser);
    } catch (error) {
      console.error("Erro ao criar usuário:", error.message);
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      // Verifique se o usuário existe antes de tentar atualizar
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      // Atualize os dados do usuário
      await User.update({ name, email }, { where: { id } });

      // Recupere o usuário atualizado do banco de dados
      const updatedUser = await User.findByPk(id);

      return res.json(updatedUser);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error.message);
      return res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;

      const deletedUser = await User.destroy({ where: { id } });

      return res.json(deletedUser);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error.message);
      return res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  },
  async unique(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        // Verifique se o usuário não foi encontrado
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      return res.json(user);
    } catch (error) {
      console.error("Erro ao listar usuário por ID:", error.message);
      return res.status(500).json({ error: "Erro ao listar usuário por ID" });
    }
  },
};

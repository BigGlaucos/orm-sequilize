const User = require("../models/user"); // Certifique-se de que o nome do modelo esteja correto e que a importação esteja em maiúsculas

module.exports = {
  async store(req, res) {
    try {
      const { name, email } = req.body;

      // Use User em vez de user para criar uma instância do modelo
      const newUser = await User.create({ name, email });

      return res.json(newUser);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }
  },
};

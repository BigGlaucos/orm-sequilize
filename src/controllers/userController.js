const User = require("../models/user"); // Certifique-se de que o nome do modelo esteja correto e que a importação esteja em maiúsculas

module.exports = {
    async index(req,res) {
        const users = await User

        return res.json(users);
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
    async update(res,req){
        const {id} = request.params
        const {name,email} = request.body
    
        const user = await User.update({name,email},{where:{id:id}})
        
        return res.json(user)
    },

    async delete(res , req) {
      const {id} = request.params;

      const user = await User.destroy({where:{id:id}});

      return res.json(user);

    }

};

const { response } = require("express");
const { UPDATE } = require("sequelize/types/query-types");
const { user, user } = require("../config/database");
const User = require("../models/user"); // Certifique-se de que o nome do modelo esteja correto e que a importação esteja em maiúsculas

module.exports = {
    async index(req,res) {
        const users = await user.findAll({raw:true})

        return response.json(users);
    },

        
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
    async update(res,req){
        const {id} = request.params
        const {name,email} = request.body
    
        const user = await user.update({name,email},{where:{id:id}})
        
        return response.json(user)
    }


};

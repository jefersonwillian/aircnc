// index - Listagem de sessões
// show - Listar apenas uma sessão
// store - criar uma sessão
// update - Atualizar uma sessão
// destroy - Deletar uma sessão
const User = require('../models/User');

module.exports = {
 async store(req, res){
    const { email } = req.body;

    let user = await User.findOne({ email });

    if(!user){
      user = await User.create({ email });       
    }else {
      const resp = {
         id: user._id,
         email: user.email,
         mgs: 'E-mail já cadastrado'
      }
      return res.json(resp);
    }

    return res.json(user);
 }
};
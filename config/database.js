//importar o mongoose
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:do04092005@fiaptecnico.jawtu.mongodb.net/test')
}

//exportar as informações para acesso externo
module.exports = conn

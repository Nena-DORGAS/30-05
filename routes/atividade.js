module.exports = (app)=>{
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
    var dados = req.body
    const conexao = require('../config/database')()

    const atividades = require('../models/atividades')
    //salvar as informações
    var salvar = await new atividades({
        data:dados.data,
        tipo:dados.tipo,
        entrega:dados.entrega,
        instrucoes:dados.orientacao,
        usuario:dados.id
        }).save()

        var buscar = await atividades.find({usuario:dados.id})
        //console.log(buscar)
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id,dados:buscar})
    })
}

import  express, { request } from "express";


const app = express();

const bcrypt = require('bcrypt');

app.use(express.json());



//array geral!!!
let usuarios = [];

//esse e nosso midlaware que valida se tem id no array usuario para criar um recado
function validaPeloId(request,response,next){
    const usuarioId = request.params.id;
    const usuarioValidado = usuarios.findIndex(usuario=> usuario.id === Number(usuarioId));
    if(usuarioValidado != -1){
        next()
    }else{
        return response.status(404).send("Nao encontrado")
    }
}



//ele vai criar nosso usuario
// utilizando metodo post

app.post('/usuarios',async (request,response)=>{
    let { nome,email,senha}= request.body;
    let validasetemusuariocadastrado = usuarios.find(user => user.email === email)
    if(validasetemusuariocadastrado){
        console.log("ja possui login")
        response.status(409).send("usuario ja existente")
    }else{
        let id = Math.floor(Math.random()*6767);
        let senhaCriptografada = await bcrypt.hash(senha, 10);
        console.log(senhaCriptografada)
        let novoUsuario = {id, nome, email, senhaCriptografada};
        usuarios.push(novoUsuario);
        response.status(201).send("criado com sucesso");
    }
})



//criamos os recados no array de usuarios

app.post("/usuarios/:id/recado",validaPeloId, (request,response)=>{
    const novoRecado = request.body;
    let recadoCriado = {
        id: Math.floor(Math.random()*1425),
        titulo: novoRecado.titulo,
        descricao: novoRecado.descricao
    };
    const id = request.params.id;

    let pegueiIdParaRecado = usuarios.findIndex(usuario=> usuario.id === Number(id));
    console.log(pegueiIdParaRecado);

    usuarios[pegueiIdParaRecado].recado.push(recadoCriado);

   return response.status(201).send("Recado criado com sucesso")
})

//vamos ler quem ta dentro do array 
// usando o get //

app.get('/usuarios',validaEmailSenha, (request,response)=>{
    response.status(202).json(usuarios);
})

//vamos alterar o recado do usuario //
// usando o put //
app.put('/usuarios/:id/recado/:recadoId',(req, res) => {
    const usuarioId = req.params.id; // obtém o ID do usuário a partir da URL
    const recadoId = req.params.recadoId; // obtém o ID do recado a partir da URL
  
    // Encontra o usuário pelo ID
    const usuario = usuarios.find(user => user.id === Number(usuarioId));

    // Encontra o recado pelo ID
    const recado = usuario.recado.find(recado => recado.id === Number(recadoId));
  
    if (!recado) {
      return res.status(404).send('Recado não encontrado');
    }
  
    // Atualiza o recado
    recado.titulo = req.body.titulo;
    recado.descricao = req.body.descricao;
  
    res.status(200).send('Recado atualizado com sucesso');
  });

  
   // excluindo o recado por ID 
  // utilizando o delete 

  app.delete('/usuarios/:id/recado/:idRecado', (request, response)=>{
    const id = Number(request.params.id);
    const idRecado = Number(request.params.idRecado);
    const indexDoUsuario = usuarios.findIndex(usuario => usuario.id === id);
    //verifica se tem o id no array usuarios
        if (indexDoUsuario < 0) {
        response.status(404).send("Usuário não encontrado.");
        return;
        }

    //pega o index do array usuarios
    const indexDoRecado = usuarios[indexDoUsuario].recado.findIndex(recado => recado.id === idRecado);

    // verifica se tem o id no array recado
        if (indexDoRecado < 0) {
        response.status(404).send("Recado não encontrado.");
        return;
        }
    
    //pega o id do array recado no array usuarios e exclui    
    usuarios[indexDoUsuario].recado.splice(indexDoRecado, 1);
    
    response.status(202).send("Recado excluído com sucesso.");
  })
  


app.listen(1425, ()=>{
    console.log("servidor rodando")
});

import  express from "express";


const app = express();

app.use(express.json());



//array geral!!!
let usuarios = [];

//esse e o post mulaaaa!!!!!!!!!!!!!!!!!!!!//
//ele vai criar nosso usuario

app.post('/usuarios', (request,response)=>{
    let { nome,email,senha,recado}= request.body;
    let validasetemusuariocadastrado = usuarios.find(user => user.nome === nome)
    if(validasetemusuariocadastrado){
        console.log("ja possui login")
        response.status(409).send("usuario ja existente")
    }else{
        let id = Math.floor(Math.random()*6767);
        recado = [{
            id: Math.floor(Math.random()*1425),
            titulo: request.body.recado.titulo,
            descricao: request.body.recado.descricao,
        }]
        let novoUsuario = {id, nome, email, senha,recado};
        usuarios.push(novoUsuario);
        response.status(201).send("criado com sucesso");
    }
})

//vamos ler quem ta dentro do array 
// usando o get //

app.get('/usuarios', (request,response)=>{
    response.status(202).json(usuarios);
})

//vamos alterar o recado do usuario //
// usando o put //
app.put('/usuarios/:id/recado/:recadoId', (req, res) => {
    const userId = req.params.id; // obtém o ID do usuário a partir da URL
    const recadoId = req.params.recadoId; // obtém o ID do recado a partir da URL
  
    // Encontra o usuário pelo ID
    const usuario = usuarios.find(user => user.id === Number(userId));
  
    if (!usuario) {
      res.status(404).send('Usuário não encontrado');
      return;
    }
  
    // Encontra o recado pelo ID
    const recado = usuario.recado.find(recado => recado.id === Number(recadoId));
  
    if (!recado) {
      res.status(404).send('Recado não encontrado');
      return;
    }
  
    // Atualiza o recado
    recado.titulo = req.body.titulo;
    recado.descricao = req.body.descricao;
  
    res.status(200).send('Recado atualizado com sucesso');
  });

app.listen(1426, ()=>{
    console.log("servidor rodando")
});

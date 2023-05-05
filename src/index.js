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

app.listen(1426, ()=>{
    console.log("servidor rodando")
});

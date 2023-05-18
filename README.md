
# Trabalho Final Back-End CRUD
Este é o repositório do projeto Trabalho Final Back-End CRUD, que implementa um sistema de gerenciamento de usuários e recados com operações de CRUD (Create, Read, Update, Delete). O projeto utiliza o framework Express.js para criar uma API RESTful.
* [Desafio final-Módulo Back-end I](https://drive.google.com/file/d/1jcSb8ier-2Pbx0Xb69rjCCq5MZPFJhZK/view?usp=sharing) - Descrição da atividade.

 ### 🚀 Exemplo de execução
 
![final-back-end-leve](https://user-images.githubusercontent.com/95323804/236989989-3e649add-0354-47cd-920c-dcd4faa43b80.gif)


### 🛠️ Construído com 


* [javascript](https://www.javascript.com/) - linguagem de programação usada.<br>
* [node.js](https://nodejs.org/pt-br) - Node.js® é um runtime JavaScript desenvolvido com o Chrome's V8 JavaScript engine.<br>

### 🚀 Funcionalidades


O sistema oferece as seguintes funcionalidades:

* Criação de usuários: permite adicionar novos usuários ao sistema, fornecendo informações como nome, email e senha criptografada.
* Login de usuários: realiza a autenticação de usuários, verificando se o email e a senha fornecidos correspondem a um usuário cadastrado.
* Listagem de usuários: exibe uma lista de todos os usuários cadastrados no sistema.
* Criação de recados: permite adicionar recados a um usuário específico, informando o título e a descrição do recado.
* Atualização de recados: possibilita a edição do título e da descrição de um recado existente de um usuário.
* Exclusão de recados: remove um recado específico de um usuário.

### 📋 Pré-requisitos


* [VS Code](https://code.visualstudio.com/) - Editor de Código<br>
* [postman](https://www.postman.com/downloads/) - O Postman é uma plataforma de API para criar e usar APIs.<br>

### 🚀 Começando 


Essas instruções permitirão que você possa rodar o codigo. <br>
Certifique-se de que o projeto esteja sendo executado corretamente.
Para utilizar o projeto com o Postman, você pode seguir os seguintes passos: <br>
No Postman, você pode fazer requisições para o projeto utilizando o link: https://trabalho-final-back-end-crud.onrender.com/.

# As rotas disponíveis no projeto são:

<h3>POST /usuarios:</h3>  
  Cria um novo usuário no sistema. Você deve fornecer o nome, email e senha no corpo da requisição.<br>
<h3>POST /usuarios/login:</h3> 
  Realiza o login de um usuário. Você deve fornecer o email e a senha no corpo da requisição.
<h3>GET /usuarios:</h3> 
  Retorna uma lista com todos os usuários cadastrados no sistema.
<h3>POST /usuarios/:id/recado:</h3> 
  Cria um novo recado para o usuário com o ID especificado. Você deve fornecer o título e a descrição do recado no corpo da requisição.
<h3>PUT /usuarios/:id/recado/:recadoId:</h3>
  Atualiza o recado com o ID especificado do usuário com o ID especificado. Você deve fornecer o novo título e descrição do recado no corpo da requisição.
<h3>DELETE /usuarios/:id/recado/:idRecado:</h3>
  Remove o recado com o ID especificado do usuário com o ID especificado.
  
### 🔧 Observações 
  
- Ao fazer as requisições, certifique-se de utilizar os métodos HTTP corretos para cada rota. O método HTTP deve ser especificado na requisição no Postman. 

### ✒️ Autores 

Éverton Henrique Cadoná - *Trabalho Completo*- [Evertoncadona](https://github.com/cadonaenrike)

### 🎁 Expressões de gratidão

* [GROWDEV](https://www.growdev.com.br/).
* [Professores da 14º do programa STARTER](https://www.growdev.com.br/) (@Gustavo Kunde, @Anderson Felipe Tavares.)

### 📢 Divulgue esse projeto para me ajudar a obter a primeira vaga. 📢.




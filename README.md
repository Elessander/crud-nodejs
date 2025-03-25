# Crud

Este projeto é um sistema CRUD que utiliza as seguintes tecnologias:

BackEnd: Node.js - Utilizado para a criação do servidor e lógica da aplicação.

FrontEnd: React - Utilizado para desenvolver a interface de usuário.

Banco de Dados: MySQL - Utilizado para armazenar as informações e realizar operações de consulta, inserção, atualização e exclusão.

# Dependências Utilizadas:

## BackEnd (Node.js)
express – Framework minimalista para criação do servidor e gerenciamento de rotas. <br/>
cors – Permite a comunicação entre o FrontEnd (porta 3000) e o BackEnd (porta 8800). <br/>
mysql – Utilizado para conectar o Node.js ao banco de dados MySQL. <br/>
nodemon – Dependência de desenvolvimento que facilita o processo de desenvolvimento, reiniciando automaticamente o servidor sempre que há alterações no código, evitando a necessidade de reiniciar manualmente. <br/>

## FrontEnd (React)
axios – Utilizado para realizar requisições HTTP entre o FrontEnd e o BackEnd. <br/>
react-toastify – Utilizado para exibir notificações amigáveis de sucesso ou erro. <br/>
@fortawesome/react-fontawesome – Usado para os ícones de edição (faEdit) e exclusão (faTrash). <br/>
styled-components – Utilizado para estilizar os componentes de forma modular e escalável. <br/>
react – Biblioteca principal para a construção da interface de usuário. <br/>

# Como Iniciar o Repositório

## Banco de Dados(MySQL)

No Mysql digite esse código para evitar erros de conexão:

ALTER USER 'nome-do-usuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha-do-usuario';

## Instalar Dependências(API)

Primeiramente vá para o arquivo db.js para alterar as configurações do seu usuário e senha para e depois vá para o terminal e insira os seguintes códigos:

1. Navegue até o Diretório da api:
cd api

2. Instale as dependências:
yarn install

3. Inicie o projeto:
yarn start

Após o npm start ele deverá criar o banco automaticamente com as tabelas caso o mesmo não exista.

## Instalar Dependências(FrontEnd)

Após configurar as dependências da api abra outro terminal  e digite os seguintes códigos:

1. Acesse o diretório do FrontEnd
cd api

2. Instale as dependências:
yarn install

3. Inicie o projeto:
yarn start

Por fim ele abrirá uma janela onde você verá o crud e poderá adicionar, deletar e editar produtos.

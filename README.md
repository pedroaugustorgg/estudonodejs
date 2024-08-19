<p align="center">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" alt="LogoNodeJS" width="300px">
</p>

# Repositório para registro de estudo do Node.js
## ÍNDICE
 <a href="#section1" style="text-decoration:none;">**1.** 📄 Documentações e materiais de apoio</a>

 <a href="#section2" style="text-decoration:none;">**2.** 📦 Pacotes utilizados no repositório via npm</a>

 <a href="#section3" style="text-decoration:none;">**3.** ⏯️ Cursos que motivaram a criação do repositório</a>

 <a href="#section4" style="text-decoration:none;">**4.** <img src="https://img.icons8.com/?size=100&id=K7ebDTcbruY8&format=png&color=000000" alt="teamgroup" width="25px"> Autor | Menções honrosas</a>

<br>

## <p id="section1"> 1. 📄 Documentações e materiais de apoio
- **Node.js** -> [Documentação (EN-US)](https://nodejs.org/docs/latest/api/) | Ferramenta que com capacidade de interpretar código JavaScript, de maneira bem similar ao navegador, e convertendo para linguagem de máquina.
- **npm** -> [Documentação (PT-BR)](https://rockcontent.com/br/blog/npm/) | O Gerenciador de Pacotes do Node (Node Package Manager), uma runtime de javascript que permite utilizar a linguagem no _back-end_.
- **{JSON} Placeholder** -> [Documentação (EN-US)](https://jsonplaceholder.typicode.com) | API _fake_ e confiável gratuita para testes e prototipagem.
- **Thunder Client** -> [Documentação (EN-US)](https://docs.thunderclient.com) | Uma extensão para o Visual Studio Code que simplifica o teste de APIs e serviços web. Com ele, pode-se realizar chamadas HTTP diretamente no editor de código e realizar testes e2e, sem a necessidade de utilizar ferramentas externas.
- **Mockaroo** -> [Documentação (EN-US)](https://www.mockaroo.com/docs) | Ferramenta online onde é possível gerar rapidamente dados e teste realistas, personalizando os campos, o número de dados gerados e o formato desejado do documento final.

<br>

## <p id="section2"> 2. 📦 Pacotes, complementos e _frameworks_ utilizados no repositório via NPM
⚠️ **Observação:** Para usuários de Linux/MacOs, os pacotes precisam ser instalados com o comando "sudo" inserido antes dos comandos exemplificados aqui.
- **[body-parser](https://www.npmjs.com/package/body-parser)** (intermediador/conversor de requisições) -> Utilizado para converter um _body_ da requisição de uma página HTML (um formulário por exemplo) em um JSON.
  - Instalação:

            npm install body-parser

  - Utilizando a API (dentro do código):

            var bodyParser = require('body-parser')

- **[expressjs](https://www.npmjs.com/package/express)** [*opcional] <s>(Web Framework) -> Utilizado para aproveitar recursos disponíveis dentro do repositório durante o aprendizado.</s>
  - 💡***Por que é opcional?** Porque atualmente (2024) não é o framework mais leve que existe na comunidade, tendo uma alternativa mais otimizada que se chama _fastify_.
    - **[fastify](https://www.npmjs.com/package/fastify)** (Web Framework) -> Utilizado para comunicação entre o backend e o frontend.
    - Instalação:

              npm i fastify
    - Importando _framework_ (dentro do código):

            import { fastify } from 'fastify'

- **[express-handlebars](https://www.npmjs.com/package/express-handlebars)** (_templates/layouts_) -> Utilizado para manipulação da estrutura e modelo do _frontend_ através do _backend_.
  - Instalação:

            npm install express-handlebars

- **[node-fetch](https://www.npmjs.com/package/node-fetch)** (requisições de APIs) -> Complemento utilizado para realizar as requisições necessárias entre APIs utilizadas no código.
  - Instalação:

            npm install node-fetch

- **[nodemon](https://nodemon.io)** [*opcional] <s>(_auto restart server_) -> Utilizado para atualização automática em caso de alteração no código ou em arquivos rodando no servidor em tempo real.</s>
  - 💡***Por que é opcional?** Caso não queira utilizar o nodemon, existe uma **funcionalidade nativa do node** (a partir da v18.11.0) que faz o papel do nodemon, que é o "[--watch](https://cursos.alura.com.br/forum/topico-sugestao-node-watch-ao-inves-de-nodemon-262725)". Então um comando semelhante sem a utilização do nodemon ficaria assim:

            node --watch arquivo.js

- **[json-server](https://www.npmjs.com/package/json-server)** (Simulador de _backend_) -> Serve para economizar tempo e facilitar o processo de teste das aplicações.
  - Instalação:

            npm install json-server

<br>

## <p id="section3"> 3. ⏯️ Cursos que motivaram a criação do repositório
- **Node.js (v12.12.0) Básico - 2020 (PT-BR)** -> [Playlist no YouTube](https://www.youtube.com/playlist?list=PLWXw8Gu52TRLBgfIclx1Nh8LA60knsxY9)
- **Node.js e MySQL - 2023 (PT-BR)** -> [Playlist no YouTube](https://www.youtube.com/playlist?list=PLWXw8Gu52TRI5NJmexwA9qco33goFxbHK)
- **Como sair do ZERO em Node.js em apenas UMA aula (PT-BR)** -> [Rocketseat (YouTube)](https://www.youtube.com/watch?v=hHM-hr9q4mo)
- **Criando formulario de login com node.js (_front-end_ e _back-end_) (PT-BR)** -> [Programador Aprendiz (YouTube)](https://www.youtube.com/watch?v=gS0uT4Iidj4)
  - Repositório público no GitHub: https://github.com/igorkeven/como-criar-um-login-

<br>

## <p id="section4"> 4. <img src="https://img.icons8.com/?size=100&id=K7ebDTcbruY8&format=png&color=000000" alt="teamgroup" width="30px"> Autor e Menções honrosas

|  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/80770771? v=4" width=115><br><sub>Pedro Guedes</sub>](https://github.com/pedroaugustorgg) |
| :---: |

## 📗 Menções honrosas - Fontes de inspiração

 - **📋 [EstudoGit](https://github.com/pedroaugustorgg/EstudoGit):**  Modelo inspirado de documentação
 - **📥 [estudopython](https://github.com/pedroaugustorgg/estudopython):** Modelo inspirado de registro dos arquivos no repositório (com comentários de aprendizado)
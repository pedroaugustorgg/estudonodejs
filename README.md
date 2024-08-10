<p align="center">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" alt="LogoNodeJS" width="300px">
</p>

# Repositório para registro de estudo do Node.js
## ÍNDICE
 <a href="#section1" style="text-decoration:none;">**1.** 📄 Documentações</a>

 <a href="#section2" style="text-decoration:none;">**2.** 📦 Pacotes utilizados no repositório via npm</a>

 <a href="#section3" style="text-decoration:none;">**3.** ⏯️ Cursos que motivaram a criação do repositório</a>

 <a href="#section4" style="text-decoration:none;">**4.** <img src="https://img.icons8.com/?size=100&id=K7ebDTcbruY8&format=png&color=000000" alt="teamgroup" width="25px"> Autor | Menção honrosa</a>

<br>

## <p id="section1"> 1. 📄 Documentações
- **Node.js** -> [Documentação (EN-US)](https://nodejs.org/docs/latest/api/)
- **npm** -> [Documentação (PT-BR)](https://rockcontent.com/br/blog/npm/)

<br>

## <p id="section2"> 2. 📦 Pacotes e _frameworks_ utilizados no repositório via NPM
⚠️ **Observação:** Para usuários de Linux/MacOs, os pacotes precisam ser instalados com o comando "sudo" inserido antes dos comandos exemplificados aqui.
- **[body-parser](https://www.npmjs.com/package/body-parser)** (intermediador/conversor de requisições) -> Utilizado para converter um _body_ da requisição de uma página HTML (um formulário por exemplo) em um JSON.
  - Instalação:

            npm install body-parser

  - Utilizando a API (dentro do código):

            var bodyParser = require('body-parser')

- **[expressjs](https://www.npmjs.com/package/express)** (Web Framework) -> Utilizado para aproveitar recursos disponíveis dentro do repositório durante o aprendizado.
  - Instalação:

            npm i express

- **[express-handlebars](https://www.npmjs.com/package/express-handlebars)** (_templates/layouts_) -> Utilizado para manipulação da estrutura e modelo do _frontend_ através do _backend_.
  - Instalação:

            npm install express-handlebars

- **[nodemon](https://nodemon.io)** [*opcional] (_auto restart server_) -> Utilizado para atualização automática em caso de alteração no código ou em arquivos rodando no servidor em tempo real.
  - Instalação:

            npm install -g nodemon
  - Executando o nodemon:

            nodemon arquivo.js
  - 💡***Por que é opcional?** Caso não queira utilizar o nodemon, existe uma **funcionalidade nativa do node** (a partir da v18.11.0) que faz o papel do nodemon, que é o "[--watch](https://cursos.alura.com.br/forum/topico-sugestao-node-watch-ao-inves-de-nodemon-262725)". Então um comando semelhante sem a utilização do nodemon ficaria assim:

            node --watch arquivo.js

<br>

## <p id="section3"> 3. ⏯️ Cursos que motivaram a criação do repositório
- **Node.js (v12.12.0) Básico - 2020 (PT-BR)** -> [Playlist no YouTube](https://www.youtube.com/playlist?list=PLWXw8Gu52TRLBgfIclx1Nh8LA60knsxY9)
- **Como sair do ZERO em Node.js em apenas UMA aula (PT-BR)** -> [Rocketseat (YouTube)](https://www.youtube.com/watch?v=hHM-hr9q4mo)

<br>

## <p id="section4"> 4. <img src="https://img.icons8.com/?size=100&id=K7ebDTcbruY8&format=png&color=000000" alt="teamgroup" width="30px"> Autor | Menção honrosa

|  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/80770771? v=4" width=115><br><sub>Pedro Guedes</sub>](https://github.com/pedroaugustorgg) |
| :---: |

## 📗 Menções honrosas - Fontes de inspiração

 - **📋 [EstudoGit](https://github.com/pedroaugustorgg/EstudoGit):**  Modelo inspirado de documentação
 - **📥 [estudopython](https://github.com/pedroaugustorgg/estudopython):** Modelo inspirado de registro dos arquivos no repositório (com comentários de aprendizado)
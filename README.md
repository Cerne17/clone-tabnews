# clone-tabnews

Implementação end-to-end do https://tabnews.com.br desenvolvido durante o https://curso.dev do Filipe Deschamps

# Dia 3:

## Fast-Track:

- versão do node: lts/hydrogen
- .nvmrc

## Slow-Track:

Carl Sagan: "Se você deseja fazer uma torta de maça do zero, você deve, primeiro, criar o universo".

- Analysis Paralysis
  - Analisar demais sobre uma escolha, ao ponto de se paralizar

### Node.JS:

- Controle de versão: nvm
- node -v => v19.6.0
- nvm ls
  - lista as versões do node
- nvm install lts/hydrogen => versão LTS (long term support) usada no curso
- nvm alias default <version>
  - escolhe a versão (<version>) como o default
- .nvmrc => explicita versão do node
  - rc => run command

### Modulos:

- Next.js => full-stack (made by Vercel)
  - v13.1.6
- React.js => front-end
  - v18.2.0
- React-dom => Indica ao react que é uma aplicação rendenizada no browser
  - v18.2.0

# Dia 4:

# Fast-Track:

- protocolos:
  - HTTP => hypertext transfer protocol => documentos referenciando a outros documentos
  - FTP => file transfer protocol => transferência de arquivos
  - SMTP => simple mail transfer protocol => transferência de mensagens de email
- UDP vs TCP, qual a diferença?

# Slow-Track: Protocolos e Rodando o Projeto

- O que é um serviço web?
  - Base em protocolos
- Exemplo: telefone sem fio
  - crianças => proxy
  - mensagem => payload
  - sussuro => protocolo -> problema: sem conferência de erro
- TCP
  - tem processo de error recovery => exemplo: enviar packets de novo
- Montagem de protocolos
  ![Montagem de Protocolos](./doc-assets/protocol-mount.png)

### Quando não é importante a integridade de todos packets

- Usamos o UDP (User Datagram Protocol)
  - Datagram => pedaço de informação autocontido
    - cada packet é autosuficiente e independe de qualquer handshake
  - jogos online
    ![UDP](./doc-assets/udp-protocol.png)
  - Lag surge da Interpolação ("chute" da posição entre as duas posições)

### TCP/IP vs UDP

- Com 0 latência e 0% de packet-loss => UDP === TCP/IP
- Com o aumento da latência / packet-loss
  - UDP parece mais fluido graças à interpolação
    - Interpola e ignora packets perdidos
  - TCP/IP mais travado porém mais preciso
    - Recupera todos packets perdidos

# Dia 9

## Slow-Track: Segredo para organização de tarefas

### Misc:

- Certificação PCI do Pagar.me: Precisa para poder armazenar dados de cartão de crédito

### Organização de Tarefas:

- Fazer muito com pouco vs fazer pouco com muito
- Organizar projetos como: Trabalhar pouco e ganhar muito
- Custo de produção: energia para realizar o que tem que ser feito
- Custo de aquecimento: quanto necessita para conferir o que tem que ser feito
  - Anotar tópicos no papel
- Milestones e Issues
- Listar:
  - Quantas pessoas estão envolvidas no projeto
  - Quais tecnologias o projeto usa
  - Quais metodologias foram aderidas

### Níveis de Organização:

- Nível 1: Ser lembrado individualmente
  - Menor custo de produção
  - Menor custo de aquecimento
- Nível 2: Ser lembrado em grupo
  - Em empresas: Quadro Kanban
- Nível 3: Expandir Conhecimento
  - Conversar o que e como desenvolver
  - Trello ou Github para adicionar assets para gestão de conhecimento
  - Custo de aquecimento muito mais caro
- Nível 4: Gerar Métricas
  - Tomar notas de todas atividades realizadas em um projeto
  - Mensurar resultados
  - Metodologias Ágeis

## Slow-Track: Como peitar projetos de qualquer tamanho

### Misc

- Nem todas tarefas precisam ter saldo positivo
- Issue de Inception
  - Extrair a ideia que está em formato de "grafo" na mente e quebrá-la em formato linear
- Milestones
  - Grandes passos para o projeto
- Milestones são conjuntos de issues
  - issues: pequenas metas de curto prazo
  - milestones: grandes metas para o longo prazo

## Slow-Track: Criando a primeira Milestone e Issues do projeto

- Dispositivo da Dopamina
  1. Estágio 1: início
  2. Estágio 2: Progresso
  3. Estágio 3: Conclusão

# Dia 11: DNS (Domain Name System)

## Fast-Track

- DNS faz a conversão de IP para Domínio
  - IP: Internet Protocol

Comunicação:

1. Computador -> Servidor DNS

- Requere o IP de um Domínio em específico

2. Servidor DNV -> Computador

- Obtém o IP do Site requerido

3. Computador -> Servidor do Domínio/IP

- Firma, de fato, a conexão

4. Servidor do Domínio/IP -> Computador

- Serve os arquivos requeridos

# Dia 12: A Prática do DNS

## Fast-Track: Resumão

1. Comprar um domínio .com.br

2. Configurar um servidor autoritativo

3. Aula Extra

- Capture the flag

![Esquemático de como Registrar um domínio](./doc-assets/dns-schema.png)

## Slow-Track: Registrar um domínio público

Acessar um Registrador de Domínios

- Registro.br
- Hostgator
- UOL Host
- Locaweb
- ...

Os domínios não são armazenados nos registradores, mas sim em um `registry` centralizado.

- nic.br (para domínios .br)
- DNS Propagation Checker (whatsmydns.net)

## Slow-Track: Configurar o Servidor DNS

Antes de configurar o DNS, seu sistema está no seguinte estado:

![Estado antes configuração DNS](./doc-assets/pre-dns-config.png)

Precisamos então, do nosso próprio servidor autoritativo, para atualizarmos o Registrador, que propagará esta atualização para o restante do sistema.

### Etapas:

- Declarar o Domínio dentro do Vercel DNS
  - Por padrão, a Vercel não é configurada como servidor autoritativo, precisamos configurá-lo para isso
  - Além disso, ainda usa um `A Record` apontando para este endereço de `IP`
- Mudar o apontamento do DNS no seu serviço de `Registry` com os endereços disponibilizados na Vercel
  ![Estado após configuração DNS](./doc-assets/post-dns-config.png)

# Dia 13

## Slow-Track: Página em Construção e Encerramento do Milestone 0

- Ideia McDonald's - McDonald's theory (John Bell)
  - Num dia em que todo mundo quer sair para almoçar mas ninguém tem ideia de onde
  - Alguém sugere o McDonald's (batido, ninguém quer)
  - Então gera uma "revolta"/união entre as pessoas
  - Diversas ideias e sugestões de onde comer começam a surgir
  - Funciona para destravar um time ou sua própria ideia
  - Ajuda a pensar em o que precisa ser
    - Feito
    - Protegido
    - Repetido

## Slow-Track: Não confie em nenhum serviço 🛑

- Nenhum serviço terá uptime de 100%
- Maioria dos serviços se comprometem a ter um uptime de 99.9%
  - 9h / Ano (Downtime)
  - 44min / Mês (Downtime)
- Downtime é avisado através do SLA
  - Service level Agreement
  - Acordo de nível de Serviço

### Status Pages

- Páginas para mostrar a saúde dos sistemas utilizados no sistema
- Pesquisar "<serviço> status"
  - Exemplo: "Vercel status"
    - Tem históricos
    - Saúde de todos os serviços deles
    - Status atual do sistema geral e de seus sub-sistemas
  - Exemplo: "AWS status"
    - Mostra o overview geral
    - Dá opções de expandir para cada serviço da AWS
- Não acreditar 100% nem nas páginas de status!
  - As páginas de status também podem cair
  - Exemplo: Falha total nos serviços da AWS
    - A status page apontava que nada estava errado, mas isso se deu pelo fato da página em si não estar funcional

# Dia 14

## Fast-Track

- Comprometer com organização de arquivos/pastas: Over- e Underengineering
  - Um software deve estar o mais modificável possível

## Bônus: PoC e MVP ajudam MESMO

- PoC: Proof of Concept
  - Criar versões mínimas e temporárias de um conceito, que será descartado posteriormente
- MVP: Minimum Viable Product
  - Depois de gerar quantas PoC's necessárias, criar o MVC
  - Será uma "DEMO" do seu produto final, com as principais features, de forma que um usuário entenda como o sistema final deve funcionar, apesar de estar incompleto

## Slow-Track: Inauguração Milestone 1 Fundação

- Criação da Milestone 1
- Criação de Features

## Slow-Track: Uma história macabra sobre Overengineering

- Overengineering: Excesso de Engenharia

![Complexidade x Tempo de carreira](./doc-assets/complexidade-tempo-de-carreira.png)

### Levantamento de requisitos

- Qual linguagem usar para um projeto?
  - Qual maturidade interna da equipe
  - Possível contratar profissionais da área
  - Tem documentação sobre problemas similares ao seu
  - Serve para o contexto atual
- Principal aspectos de um software
  - Linguagem
  - Arquitetura
  - Modelagem
  - Testes Automatizados
  - **Modificabilidade**

## Slow-Track: Proposta de Arquitetura e Pastas

- Primeira Issue da Milestone 1
- Primeira Etapa: Definir a linguagem de programação
  - Javascript
- Organização de Pastas e Arquitetura de Software NÃO são a mesma coisa
  - É possível implementar MVC ou Clean Architecture em uma única pasta
    - Ou até em um único arquivo

### Organização de Pastas

**Primeira Proposta (Deschamps)**

```
📦 root
  ├ 📂 core # Tudo o que é da nossa responsabilidade
  ├ 📂 web  # Tudo o que é responsabilidade do Next.js
  └ tests  # Testes automatizados
```

```
📦 root
  ├ 📂 core
  │  ├ 📂 components
  │  ├ 📂 database
  │  │  ├ 📂 migrations
  │  │  └ 📜 index.js
  │  └ 📂 models
  │  │  ├ 📜 user.js
  │  │  └ 📜 post.js
  ├ 📂 web
  │  ├ 📂 pages
  │  │  ├ 📂 api
  │  │  │  └ 📂 news
  │  │  │  │  └ 📜 index.js
  │  │  ├ 📂 noticia
  │  │  │  └ 📜 [slug].js
  │  │  └ 📜 index.js
```

- Daria dor de cabeça fazer assim, devido à forma que o Next.js funciona
  - Isolando as partes do sistema

**Segunda Proposta**

- Deixando o Next.js gerir o código completo
- Ainda sim, isolando o que é o Next.js e as regras de negócio
  - Regras de Negócio seria o antigo "core"

```
📦 root
  ├ 📂 pages
  ├ 📂 models
  ├ 📂 infra
  ├ 📂 tests # Testes Automatizados
  └ ...
```

```
📦 root
  ├ 📂 pages
  │  ├ 📜 index.js # Home
  ├ 📂 models
  │  ├ 📜 user.js
  │  ├ 📜 content.js
  │  └ 📜 password.js
  ├ 📂 infra
  │  ├ 📜 database.js # Biblioteca de conexão com o db
  │  ├ 📂 migrations
  │  └ 📂 provisioning # Infra as a Code (Terraform)
  │  │  ├ 📂 staging # Homologação
  │  │  ├ 📂 production
  ├ 📂 tests # Testes Automatizados
  └ ...
```

### Arquitetura de Software

- O que é
  - Definição do Escopo dos Componentes
  - Tipo de Interação entre os Componentes
- MVC
  - Model
    - Ruim: Model com muitas responsabilidades
  - View
  - Controller
  - Criado em 1979
- Uma arquitetura simples com uma ótima modelagem, te faz ir LONGE

# Dia 15: Testes Automatizados

## Fast-Track

- Test Runners
  - Mocha
  - AVA (Testes de forma concorrente)
  - Playwrite (End-to-End)
  - **Jest** (v29.6.2)
- Jest
  - Scripts
    - `"test": "jest"`
    - `"test:watch": "jest --watch"`
- TDD
  - Test-Driven-Development
  - Escreve-se o teste primeiro, depois programa-se para obter o resultado esperado no teste

## Slow-Track: Test Runner (Test Framework)

- A testagem previne 'Regressão' (uma feature deixar de funcionar com a evolução do código)
- Jest
  - Criado pelo Facebook
  - Criado para testar aplicações React (atualmente é usado para outras finalidades)
- Para rodar os scripts podemos rodar:
  - npm run test
  - npm test
  - npm run test:watch

## Slow-Track: Criar um Teste de Teste

- Programando uma calculadora
- Utilizando o test:watch
- Criamos `./tests/`

## Slow-Track: Criando um teste de verdade

- Duas Dinâmicas
  - Programar a Feature e depois deselvover testes para ver se a mesma funciona
  - Criar códigos com base no funcionamento esperado da feature e - só então - programá-la
- Criamos a pasta `models`

### Teste e Feature criada pela primeira dinâmica

```JS
//./models/calculadora.js
function somar(arg1, arg2) {
  return arg1 + arg2;
}

exports.somar = somar; // CommonJS (ESM ou ES6 Modules)
```

- Regulado pelo TC39
- Jest na versão atual não suporta ES6 Modules
  - Precisamos fazer um transpiling
    - Converte o código de uma versão incompatível para uma compatível

```JS
// ./tests/calculadora.test.js
const calculadora = require("../models/calculadora.js");

test("somar 2 mais 2", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
```

Para esse exemplo, o output esperado do `jest --watch` seria:
![output jest calculadora (soma)](./doc-assets/jest-calculadora-soma-1.png)

Agora, introduzimos um bug intencionalmente no sistema:

```JS
// ./models/calculadora.js
function somar(num1, num2) {
  return num1 * num2; // Multiplicação, não soma
}

exports.somar = somar; // CommonJS
```

E adicionamos mais testagens para verificar outros casos de uso.

```JS
// ./tests/calculadora.test.js
const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 2 + 5 deveria retornar 7", () => {
  const resultado = calculadora.somar(2, 5);
  expect(resultado).toBe(7);
});
```

E, agora o output esperado do jest seria:

![output jest calculadora (soma)](./doc-assets/jest-calculadora-soma-2.png)

Temos um teste passando (2 + 2 = 2 \* 2 = 4), mas temos outro falhando (2 + 5 != 2 \* 5)

### Teste e Feature criada pela segunda dinâmica (TDD)

- Os testes orientam o que deve acontecer no código

# Dia 16

## Fast-Track

- Interface para Humanos - Interface Gráfica
- Interface para Máquina - Interface Programática
  - API - Application Programming Interface
    - Assim como a interface gráfica é um tipo de interface mais fácil de um humano ler e interpretar, uma API é um tipo de interface mais fácil de uma máquina interpretar
- charset utf-8
  - curl (client url)

### Ser um profissional melhor:

- Enquanto ficarmos vislumbrados com a magia da nossa área, estamos usando nossa energia de forma errada
- Temos que entender a mágica das tecnologias, para dominá-las e não o contrário
- Só assim, vamos conseguir impactar a vida das pessoas!

## Slow-Track: A maior briga no universo dos Testes Automatizados

- Testes Unitários vs Testes de Integração
- Issue: Banco de Dados (Local)
- Divisão dos `./tests`
  - `./tests/unit` # Exemplo da calculadora
  - `./tests/integration` # Integrações ou Camadas da aplicação

### Modelo de Pirâmide de Testes

![Mike Cohn (Martin Fowler) Pirâmide de Testes](./doc-assets/piramide-de-testes.png)
Criada por Mike Cohn (2009), em seu livro `Succeding with Agile`.

### Modelos Troféu de Testes (Front-end) & Favos de Mel (Back-end)

![Troféu de Testes (rauchg)](./doc-assets/trofeu-de-testes.png)
Criado pelo Rauch, criador da Vercel, mostra como deve ser a presença de testes para o Front-end.

![Favos de Mel (Spotify)](./doc-assets/teste-favo-de-mel.png)
Criada pela Spotify, mostra como deve ser a presença de testes para o Back-end.

### Modelo Falta de Tempo do Pagar.me

Neste modelo, temos bom-senso e sabemos que não é possível implementarmos todos os tipos de teste e, então, escolhemos - com base no formato de nosso sistema - qual tipo de teste vamos implementar única e exclusivamente.

Geralmente, também graças ao bom-senso, escolhemos os testes de integração, haja vista que esses já são capazes de identificar quaisquer problemas no encaixe das peças do sistema, sem precisar gastar horas e horas configurando um sistema completo para os testes E2E. (E, de quebra, testamos se as peças funcionam, já que para o encaixe funcionar, as peças devem estar funcionando também 🤯)

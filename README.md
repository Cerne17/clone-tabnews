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

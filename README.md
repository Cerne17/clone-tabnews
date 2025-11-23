# Dia 3 - Instalação dos Primeiros Pacotes

Para o projeto utilizaremos:
- `node.js lts/hydrogen` (Note que LTS significa Long Term Support, ou seja, suporte a longo prazo)
- `next@13.1.6`
- `react@18.2.0`
- `react-dom@18.2.0`

## Instalação Básica do node.js usando o nvm

Utilizaremos o `nvm` para realizar o versionamento do `node.js`.
Uma subversão do LTS terá retrocompatibilidade garantida com as outras subversões do LTS.

Para utilizar o `node.js lts/hydrogen` basta executar o comando:

```bash
nvm install lts/hydrogen
```
| Comando | Descrição    |
| ---------- | ---------- |
| `node -v` | Verifica a versão do node.js instalada |
| `npm -v` | Verifica a versão do npm instalada |
| `nvm -v` | Verifica a versão do nvm instalada |
| `nvm ls` | Lista as versões do node.js instaladas |
| `nvm use lts/hydrogen` | Utiliza a versão do node.js lts/hydrogen |
| `nvm alias default lts/hydrogen` | Define a versão do node.js lts/hydrogen como default |

## O arquivo .nvmrc

Caso mais de uma pessoa esteja trabalhando na mesma base de código, é inteligente que utilizemos uma ferramenta que garanta com que todas pessoas estejam usando a mesma versão de todas tecnologias ou, ao menos, versões compatíveis.

Curiosidade: O final `rc` significa `run command`, ou seja, comando de inicialização.

Para configurar o nvm para usar o `lts/hydrogen` basta garantir que dentro do seu arquivo `.nvmrc` tenha a versão do node.js que deseja utilizar, como segue:

```
lts/hydrogen

```

Note que o `enter` é um caractere especial que representa o final do arquivo, sendo necessário para o arquivo de configuração.
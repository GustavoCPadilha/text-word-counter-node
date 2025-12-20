# 📝 CLI para Identificação de Palavras Repetidas

Este projeto é uma ferramenta de linha de comando (CLI) desenvolvida em **Node.js** com o objetivo de analisar textos e identificar a ocorrência de **palavras repetidas dentro de cada parágrafo**.

A ferramenta é ideal para revisar textos longos, detectar redundâncias e extrair estatísticas de frequência de termos de forma automatizada, auxiliando na melhoria da escrita e análise de dados textuais.

---

## 🚀 Tecnologias e Bibliotecas Utilizadas

* **Node.js**: Ambiente de execução para o processamento de arquivos.
* **Commander.js**: Para criação de uma interface de linha de comando robusta com suporte a flags e comandos.
* **Chalk**: Para facilitar a leitura no terminal através de cores (sucesso em verde, erros em vermelho).
* **FS (File System)**: Manipulação do sistema de arquivos para leitura de textos e escrita de resultados.
* **Path**: Gerenciamento e resolução de caminhos de arquivos de forma segura.

---

## 🛠️ Como usar

A ferramenta funciona através da passagem de parâmetros diretamente no seu terminal.

### Pré-requisitos

* Node.js instalado.
* Dependências instaladas (execute `npm install` na pasta do projeto).

### Execução

Para processar um texto e gerar o relatório de repetições, utilize o comando:

```bash
node cli.js -t ./caminho/do/arquivo.txt -d ./diretorio/de/destino

```

**Parâmetros:**

* `-t, --texto`: O caminho do arquivo `.txt` que você deseja analisar.
* `-d, --destino`: A pasta onde o arquivo `resultado.txt` (contendo as contagens) será salvo.

---

## 🧠 Funcionalidades Principais

* **Identificação de Repetições**: O algoritmo analisa o conteúdo e contabiliza quantas vezes cada palavra aparece em cada parágrafo.
* **Detecção por Parágrafo**: O processamento é segmentado, permitindo identificar onde as repetições estão mais concentradas dentro da estrutura do texto.
* **Relatório Automatizado**: Gera um arquivo de saída formatado com a lista de palavras encontradas e suas respectivas frequências.
* **Tratamento de Exceções**: Sistema preparado para tratar erros de leitura, caminhos inexistentes ou falhas na escrita.
* **Processamento Assíncrono**: Utiliza Promises para garantir eficiência na manipulação de arquivos.

---

## 📚 Origem do Projeto

Este projeto foi desenvolvido com base no curso **"JavaScript com Node.js: criando sua primeira biblioteca"** da **Alura**. O foco dos estudos foi o domínio de lógica de programação, manipulação de arquivos com Node.js, modularização de código e criação de ferramentas utilitárias para o terminal.

---

## 📫 Contato

* Email: **padilhacgustavo@gmail.com**
* LinkedIn: [Gustavo Cigerza Padilha](https://www.linkedin.com/in/gustavo-cigerza-padilha-28bbba23a/)

---

⭐ Sinta-se à vontade para explorar e utilizar esta ferramenta em seus estudos!
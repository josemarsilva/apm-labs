## README-guia-exec-demo-teste-sanity-loadtest-stresstest-json-api-get-post.md

[## 3. Projeto](./README.md#3-projeto)

[### 3.4. Guia de Execução, Demonstração e Cenários de Teste](./README.md#34-guia-de-execução-demonstração-e-cenários-de-teste)

#### 3.4.2. Performance Test - Teste de Carga e de Performance com Json API's GET e POST

##### Planejar

* **Objetivo**: O objetivo deste cenário de testes é avaliar se uma <ins>API</ins> construída em <ins>NodeJS</ins> com um cadastro simples consegue suportar uma carga de 100 usuários simultâneos fazendo requisições de GET e POST. Para completar, desejamos saber qual o limite de usuários simultâneos.
* **Tipo de Testes**: *Teste de Carga (Load Test)* e *Teste de Estresse (Stress Test)*
* **Ciclos e Cenários**: Executar um único ciclo para cada cenário com cada uma das ferramentas

| Cenário | Detalhamento |
| :------ | :---         |
| **01**  | *Teste de Sanidade (Sanity Test)* da aplicação com scripts `Curl(windows)`, acessando REST API, somente GET, somente 100 _requests_ e no _Design Patterns: Synchronous Request / Response_ |
| **02**  | *Teste de Sanidade (Sanity Test)* da aplicação com scripts `Powershell(windows)`, acessando REST API, com variações: GET/POST, com variações de Quantidades (conforme detalhamento do item) e no _Design Patterns: Synchronous Request / Response_ |


* **Quantidades, rampa de subida, tempo e usuários simultâneos**:

| Quantidade _(qty)_       | Rampa _(ramp-up)_ | Tempo _(dur)_ | Usuários _(threads)_ | Obs  |
| ---:                     | :---:             | :---:         | :---                 | :--- |
| 1, 100 e 1000 _requests_ | n/a               | n/a           | Cenários com 1, 100 e 1000 _threads_ simultâneas | n/a  |


* **Amostra da carga "payload" e "test-data"**:
  * *Payload* do `POST` request:

```json
{
    "name":  "Name 1",
    "salary":  "1"
}
```


* **Infraestrutura, arquitetura e sequência**:
  * Infraestrutura:
    * Intel Core i5-8250U CPU @ 1.60 GHz 1.80 GHz - RAM 16 GB - Windows 10 Pro
  * Arquitetura:
![DeployDiagram-SanityTest-LoadTest-StressTest-NodeJs-JsonAPI-GetPost.png](./doc/DeployDiagram-SanityTest-LoadTest-StressTest-NodeJs-JsonAPI-GetPost.png) 
  * Sequência:

![SequenceDiagram-Context-SynchronousRequestResponse.png](./doc/SequenceDiagram-Context-SynchronousRequestResponse.png) 


* **Monitoramento**: n/a

* **Construção robôs de testes: injetar, rebater e monitorar**:
  * Os robôs de teste para _injetar_:
    * *Curl* scripts:
      * ( `win-cmd-curl-script-sanity-json-api-get.bat` ) construídos e disponíveis em `./src/curl-scripts`
    * *Powershell* scripts:
      * ( `powershell-script-sanity-json-api-get-post.ps1` ) construídos e disponíveis em `./src/powershell-scripts`
    * *JMeter* scripts:
      * ( `jmeter-script-` ) construídos e disponíveis em `./src/jmeter-scripts`
  * Os robôs de teste para _rebater_:
    * ( `app-nodejs-rest-api-get-post.js`) construídos e disponíveis em `./src/nodejs-rest-api`
  * Os robôs de teste para _monitorar_:
    * n/a

* **Itens de análise, check-list e relatórios**: Quadro comparativo das características de cada ferramenta, facilidades, dificuldades, etc

##### Executar

###### Cenário-01

* *Iniciar* o(s) _rebatedor_ servidor REST API `app-nodejs-rest-api-get-post.js` disponível(eis) em `src\nodejs-rest-api`

```cmd
apm-labs> cd src/nodejs-rest-api
nodejs-webserver> node app-nodejs-rest-api-get-post.js
```

* *Executar* os *Teste de Sanidade (Sanit Test)* do `Cenário-01`:
  * Execute o(s) _injetor_ REST GET Request `win-cmd-curl-script-sanity-json-api-get.bat` disponível(eis) em `src\curl-scripts`
  * Obtenha e encontre a diferença de tempo entre data/hora final e inicial em segundos e divida pela quantidade
  * Pronto! Você encontrou a *métrica* de *TPS - Transações por Segundos* deste cenário

* *Encerrar* o(s) _rebatedor_ servidor REST API `app-nodejs-rest-api-get-post.js`. Use ^C na tela do Windows Command onde ele está sendo executado

###### Cenário-02

* *Iniciar* o(s) _rebatedor_ servidor REST API `app-nodejs-rest-api-get-post.js` disponível(eis) em `src\nodejs-rest-api`

```cmd
apm-labs> cd src/nodejs-rest-api
nodejs-webserver> node app-nodejs-rest-api-get-post.js
```

* *Executar* um *Teste de Carga (Load Test)* do `Cenário-02`:
  * Execute o(s) _injetor_ REST GET/POST Request `powershell -file powershell-script-sanity-json-api-get-post.ps1` disponível(eis) em `src\powershell-scripts`
  * Obtenha e encontre a diferença de tempo entre data/hora final e inicial em segundos e divida pela quantidade
  * Pronto! Você encontrou a *métrica* de *TPS - Transações por Segundos* deste cenário

* *Executar* um *Teste de Carga (Load Test)* do `Cenário-02.b`:
  * Execute o(s) _injetor_ REST GET/POST Request `powershell -file powershell-script-sanity-json-api-get-post.ps1 -qty 100` disponível(eis) em `src\powershell-scripts`
  * Obtenha e encontre a diferença de tempo entre data/hora final e inicial em segundos e divida pela quantidade
  * Pronto! Você encontrou a *métrica* de *TPS - Transações por Segundos* deste cenário

* *Executar* um *Teste de Carga (Load Test)* do `Cenário-02.c`:
  * Execute o(s) _injetor_ REST GET/POST Request `powershell -file powershell-script-sanity-json-api-get-post.ps1 -qty 1000` disponível(eis) em `src\powershell-scripts`
  * Obtenha e encontre a diferença de tempo entre data/hora final e inicial em segundos e divida pela quantidade
  * Pronto! Você encontrou a *métrica* de *TPS - Transações por Segundos* deste cenário



##### Checar e Agir

* *Aferir* as métricas anotadas em cada um dos testes de cada um dos testes
* *Compilar* relatório com as métricas aferidas
* *Elaborar* relatório
* *Apresentar* relatório

* Relatório Comparativo de Métricas de Cenários

| Cenário | Métricas     | Observações  |
| :------ | :---         | :---         |
| 01 - _Sanity Test_ / `Curl(windows)` / REST API GET / 1 user e 100 _requests_ / `Synchronous Request / Response`|  Elapsed: ? s, TPS: ? | |
| 02 - _Sanity Test_ / `Powershell(windows)` / REST API GET/POST / 1 user, 1 _requests_ / `Synchronous Request / Response`|  Elapsed: ? s, TPS: ? | |
| 02.b - _Sanity Test_ / `Powershell(windows)` / REST API GET/POST / 1 user, 100 _requests_ / `Synchronous Request / Response`|  Elapsed: ? s, TPS: ? | |
| 02.c - _Sanity Test_ / `Powershell(windows)` / REST API GET/POST / 1 user, 1000 _requests_ / `Synchronous Request / Response`|  Elapsed: ? s, TPS: ? | |


* Relatório Considerações Finais
  * Todos os cenários foram executadas na mesma infraestrutura, isto é em um equipamento Intel Core i5-8250U CPU @ 1.60 GHz 1.80 GHz - RAM 16 GB - Windows 10 Pro
  * As condições gerais de inteferências do equipamento com processos externos foram minimizadas
  * Foram executadas 1 (um) ciclo(s) de repetição dos cenários, o critério de eleição para métrica do relatório foi a última métrica disponível
  * Todas as etapas do projeto ocorreram em condições normais, permitindo um planejamento de tempo adequado e um perfeito  entendimento da infraestrutura, arquitetura e fluxo do negócio
  * É possível concluir que ...

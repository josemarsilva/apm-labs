## README-guia-exec-demo-teste-sanity-loadtest-robo-injetor-rebatedor-iso8583.md

[## 3. Projeto](./README.md#3-projeto)

[### 3.4. Guia de Execução, Demonstração e Cenários de Teste](./README.md#34-guia-de-execução-demonstração-e-cenários-de-teste)

#### 3.4.3. Performance Test - Teste de Sanidade e Carga com robôs injetor e rebatedor ISO8583

##### Planejar

* **Objetivo**: O objetivo deste cenário de testes é avaliar se um <ins>robô rebatedor ISO8583</ins> construída em <ins>NodeJS</ins> consegue suportar uma carga de 10 a 100 usuários simultâneos realizando 10 mil requisições ISO8583 em menos de 1 minuto. 
* **Tipo de Testes**: *Teste de Sanidade (Sanity Test)* e *Teste de Carga (Load Test)*
* **Ciclos e Cenários**: Executar um único ciclo para cada cenário com cada uma das ferramentas

| Cenário | Detalhamento |
| :------ | :---         |
| **01**  | *Teste de Sanidade (Sanity Test)* do <ins>robô injetor</ins> `nodejs-iso8583-launcher.js` e do <ins>robô rebatedor</ins> `nodejs-iso8583-hitter.js` enviando 100 mensagens ISO8583, com somente 1 usuário simultâneo e no _Design Patterns: Synchronous Request / Response_ |

* **Quantidades, rampa de subida, tempo e usuários simultâneos**:

| Quantidade _(qty)_       | Rampa _(ramp-up)_ | Tempo _(dur)_ | Usuários _(threads)_ | Obs  |
| ---:                     | :---:             | :---:         | :---                 | :--- |
| 10.000 _mensagens_       | n/a               | 1 min         | Cenários com 1, 10 e 100  _threads_ simultâneas | n/a  |


* **Amostra da carga "payload" e "test-data"**:

  * *Payload* da mensagem enviada pelo injetor:

```iso8583
12345678901234567890123456789012345678901234567890
```

  * *Payload* da mensagem respondida pelo rebatedor:

```iso8583
12345678901234567890123456789012345678901234567890
```


* **Infraestrutura, arquitetura e sequência**:
  * Infraestrutura:
    * Intel Core i5-8250U CPU @ 1.60 GHz 1.80 GHz - RAM 16 GB - Windows 10 Pro
  * Arquitetura:
![DeployDiagram-SanityTest-LoadTest-sanity-Robo-Injetor-Rebatedor-ISO8583.png](./doc/DeployDiagram-SanityTest-LoadTest-sanity-Robo-Injetor-Rebatedor-ISO8583.png) 
  * Sequência:

![SequenceDiagram-Context-SynchronousRequestResponse.png](./doc/SequenceDiagram-Context-SynchronousRequestResponse.png) 


* **Monitoramento**: n/a

* **Construção robôs de testes: injetar, rebater e monitorar**:
  * Os robôs de teste para _injetar_:
      * ( `nodejs-iso8583-launcher.js` ) construídos e disponíveis em `./src/nodejs-iso8583-launcher`
  * Os robôs de teste para _rebater_:
      * ( `nodejs-iso8583-hitter.js` ) construídos e disponíveis em `./src/nodejs-iso8583-hitter`
  * Os robôs de teste para _monitorar_:
    * n/a

* **Itens de análise, check-list e relatórios**: Comparativo de Métricas de Cenários e Considerações Finais

##### Executar

###### Cenário-01

* *Iniciar* o(s) _rebatedor_ ISO8583  `nodejs-iso8583-hitter.js` disponível(eis) em `src\nodejs-iso8583-hitter`

```cmd
apm-labs> cd src/nodejs-iso8583-hitter.js
nodejs-webserver> node nodejs-iso8583-hitter.js
```

* *Executar* os *Teste de Sanidade (Sanit Test)* do `Cenário-01`:
  * Execute o(s) _injetor_ ISO8583 `nodejs-iso8583-launcher.js` disponível(eis) em `src\nodejs-iso8583-launcher` com os seguintes argumentos em linha de comando: ` -q 100 -u 1`
  * Obtenha e encontre a diferença de tempo entre data/hora final e inicial em segundos e divida pela quantidade
  * Pronto! Você encontrou a *métrica* de *TPS - Transações por Segundos* deste cenário

* *Encerrar* o(s) _rebatedor_ ISO8583 `nodejs-iso8583-hitter.js`. Use ^C na tela do Windows Command onde ele está sendo executado

##### Checar e Agir

* *Aferir* as métricas anotadas em cada um dos testes de cada um dos testes
* *Identificar* gargalos e _Quick Wins_
* *Compilar* relatório de recomendações com as métricas aferidas, incidentes e eventos, oportunidades e necessidades de melhorias, _Quick Wins_, comparativos, considerações, etc
* *Elaborar* e *Apresentar* relatório de recomendações

* Relatório Comparativo de Métricas de Cenários

| Cenário | Métricas     | Observações  |
| :------ | :---         | :---         |


* Relatório Considerações Finais
  * Todos os cenários foram executadas na mesma infraestrutura, isto é em um equipamento Intel Core i5-8250U CPU @ 1.60 GHz 1.80 GHz - RAM 16 GB - Windows 10 Pro
  * As condições gerais de inteferências do equipamento com processos externos foram minimizadas
  * Foram executadas 1 (um) ciclo(s) de repetição dos cenários, o critério de eleição para métrica do relatório foi a última métrica disponível
  * Todas as etapas do projeto ocorreram em condições normais, permitindo um planejamento de tempo adequado e um entendimento da infraestrutura, arquitetura e fluxo do negócio

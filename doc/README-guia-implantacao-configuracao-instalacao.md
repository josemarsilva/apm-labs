### README-guia-implantacao-configuracao-instalacao.md

### [3. Projeto](./../README.md#3-projeto)

### [3.3. Guia de Implantação, Configuração e Instalação](./../README.md#33-guia-de-implantação-configuração-e-instalação)

#### a. Instalando/Clonando este repositório no ambiente

* Windows

```cmd
C:\> md githome
C:\> cd githome
C:\githome> git clone https://github.com/josemarsilva/apm-labs.git
```

* Linux

```sh
$ sudo mkdir /opt
$ sudo mkdir /opt/githome
$ sudo chown -R $USER:$USER /opt/githome
$ cd /opt/githome
$ git clone https://github.com/josemarsilva/apm-labs.git
```


#### b. Instalando NodeJS (em Linux Ubuntu)

* https://github.com/josemarsilva/eval-virtualbox-vm-ubuntu-server#31-nodejs


#### c. Instalando Docker e Docker Composer (em Linux Ubuntu)

* https://github.com/josemarsilva/eval-virtualbox-vm-ubuntu-server/blob/master/README.md#41-docker---installation
* https://github.com/josemarsilva/eval-virtualbox-vm-ubuntu-server/blob/master/README.md#42-docker-composer---installation


#### d. Instalando JMeter

* Localize a última versão de distribuição do _Binaries_ do JMeter em https://jmeter.apache.org/download_jmeter.cgi

```sh
$ sudo mkdir /opt
$ cd /opt
$ wget https://downloads.apache.org//jmeter/binaries/apache-jmeter-5.3.tgz
$ tar -xvf apache-jmeter-5.3.tgz
$ sudo chown -R $USER:$USER /opt/apache-jmeter-5.3
$ rm apache-jmeter-5.3.tgz
```

#### e. Instalando Oracle em Linux (Oracle Linux 7)

* https://medium.com/@anuketjain007/how-to-install-oracle-database-12c-release-2-in-linux-7-35923db49487
* https://wiki.centos.org/HowTos/Xming
* https://sourceforge.net/projects/xming/files/latest/download

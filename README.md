## ANDROID
![cover](.github/android.png?style=flat)

## IOS
![cover](.github/ios.png?style=flat)

## 💻 Projeto
Desafio Front-end mobile aplicado pela Contele.


## ✨ Tecnologias

- [React Native](https://reactnative.dev/) : Linguagem especificada do teste em questão.

- [TypeScript](https://www.typescriptlang.org/) : Usado para ter mais fidelidade no código, ajuda demais em momentos de fazer refatorações e manutenções do código, como também auxiliando rapidamente a encontrar erros no código.

- [Expo](https://expo.io/) : Para ter um ganho na produtividade na construção do app, foi utilizado com bare workflow, possibilitando facilmente a utilização de códigos nos quais o expo ainda não dê suporte(caso você precise).

- [Context](https://reactjs.org/docs/context.html) : Optei pela Context ao invés do Redux também pelo ganho na produtividade e agilidade na construção do projeto.

- [Axios](https://axios-http.com/ptbr/docs/intro) : Usado para obter os Posts via api vinda do docker do [repositório de teste](https://github.com/contele/contele-vagas/tree/master/react-native).

- [React Navigation](https://reactnavigation.org/) : Utilizado para fazer a navegação entre telas dentro do app, nesse projeto foi utilizado apenas a Stack navigation.

- [Net Info](https://docs.expo.dev/versions/latest/sdk/netinfo/) : Utilizado para ficar observando se o dispositivo esta on-line ou off-line.

- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) : Foi usado no intuito de obter a geolocalização do dispositivo do usuário.

- [Styled Components](https://styled-components.com/) : Utilizado na estilização CSS da aplicação, escolhi apenas por estar bastante acostumado com ele, mas poderia facilmente ter sido feito com stylesheet ou qualquer outro.


## :hammer_and_wrench: Executando o projeto

Antes de qualquer coisa, será necessário instalar o Expo CLI, caso não tenha em sua máquina. Para isso clique [nesse link](https://docs.expo.dev/get-started/installation/), que conterá todas as instruções para a instalação do mesmo, irá lhe instruir a instalar o Node.js, Git, etc.

Após a instalação do expo e ter puxado o projeto, utilize o **yarn** ou **npm install** para instalar as dependências do projeto.
Com a conclusão da instalação das dependências do projeto, inicie o projeto.<br/>

```cl
expo start
```

Você conseguirá visualizar em seu próprio celular, só precisa ter o aplicativo Expo Go instalado nele, ai é só ler o código de barras gerado no terminal e pronto. Também consegue visualizar pelo emulador android por exemplo, basta instalar o expo go nele também e executar a partir do emulador, fica à seu critério.

**Observações**: 

**1 -** Necessário estar com o [backend](https://github.com/contele/contele-vagas/tree/master/react-native) executando para estar com seu pleno funcionamento.
<br/>
**2 -** Lembre-se de alterar o IP em **src/services/api** para o IP de sua máquina local, evitando erros de conexão do Axios com a API.

**Comentários sobre o Projeto**:

Gostaria de dizer que considerei o uso do banco de dados [Watermelondb](https://github.com/Nozbe/WatermelonDB) para realizar a funcionalidade de offline-first, mas acabei obtendo alguns erros durante a instalação do mesmo e não fiquei com tempo para me aprofundar na solução do problema, por isso optei por fazer essa sincronização apenas com o uso da Context do próprio React junto a variáveis de estado.

---

Feito por Rafael Quartaroli.

<br />

const data = [
  {
    category: "IA",
    questions: [
      {
        question: "Qual não é um algoritmo de aprendizado profundo ?",
        options: ["A Redes neurais recorrentes", "Redes neurais convolucionais", "Setr-codificador", "Máquina de vetores de suporte"],
        answer: "Máquina de vetores de suporte",
        tip: "Minimização dos erros",
      },
      {
        question: "As opções a seguir não pertecem ao escopo da solução full-stack da Huawei são ?",
        options: ["Habilitar chip", "Computação de ponta", "Ativar aplicativo", "Estrutura de código aberto"],
        answer: "Computação de ponta",
        tip: " Arquitetura de TI aberta",
      },
      {
        question: "Qual das opções a seguir não é uma operação comum do MindSpore?",
        options: ["matriz", "sinal", "nn", "matemática"],
        answer: "sinal",
      },
      {
        question: "Qual modelo não é uma rede neural ciclica?",
        options: ["GRU", "GBOT", "LSTM", "RNN"],
        answer: "GBOT",
      },
      {
        question: "Pytorch Qual empresa lançou primeiro ?",
        options: ["Huawei", "Facebook", "Google", "Baidu"],
        answer: "Facebook",
      },
    ],
  },
  {
    category: "Python",
    questions: [
      {
        question: "Na linguagem Python, a sequência imutável de valores de qualquer tipo, como, por exemplo, inteiros e floats, a qual é útil para representar registros, mas sem atribuir nomes aos campos, é conhecida como?",
        options: ["lista", "dicionário", "break", "tupla"],
        answer: "tupla",
        tip: "sequência imutável ",
      },
      {
        question: "O sckit-learn suporta o processamento de algoritmos de aprendizado de máquina do tipo supervisionado como, por exemplo:",
        options: ["o SVM e a clusterização", "o BIRCH e o vizinho mais próximo", "o Naive bayes e as árvores de decisão", "o PCA e os gaussian mixture models"],
        answer: "o Naive bayes e as árvores de decisão",
      },
      {
        question: "A classe da biblioteca scikit-learn, versão 1.1.2, utilizada em scripts python para a implementação de regressão linear baseada no método dos mínimos quadrados é:",
        options: ["sklearn.linear_model.LinearRegression", "sklearn.linear.ml.LinearRegression", "scikit-learn.LinearRegression", "scikit-learn.linear_model.LinearRegression.LeastSquare"],
        answer: "sklearn.linear_model.LinearRegression",
      },
      {
        question: "Em Phyton, a variável de ambiente que tem como função forçar o Phyton a despejar o rastreamento — lista de chamadas que chegaram a um erro — em erros fatais denomina-se:",
        options: ["PYTHONPROFILEIMPORTTIME", "PYTHONTRACEMALLOC", "PYTHONASYNCIODEBUG", "PYTHONFAULTHANDLER"],
        answer: "PYTHONTRACEMALLOC",
      },
      {
        question: "Na disciplina de ciência de dados, Python é uma das linguagens de programação mais utilizadas. A esse respeito, é correto afirmar que a linguagem de programação Python :",
        options: ["mostra-se ideal para desenvolvimento rápido e criação de scripts em razão de sua natureza compilada", "possui recursos para controle de fluxo, como if-else, switch-case, while e for em todas as suas versões", "pode ser utilizada como uma linguagem de programação funcional", "classifica-se como fracamente tipada"],
        answer: "pode ser utilizada como uma linguagem de programação funcional",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;

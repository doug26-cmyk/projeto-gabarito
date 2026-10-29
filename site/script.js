const WHATSAPP_LINK_URL = "https://www.whatsapp.com/download?lang=pt";
const WHATSAPP_NUMBER = "";
const STORAGE_KEY = "gabarito-cart-v1";
const THEME_STORAGE_KEY = "gabarito-theme-v1";
const ageOptions = [
  { value: "15-17", label: "15 a 17 anos" },
  { value: "18-25+", label: "18 anos ou mais" }
];
const paymentMethods = [
  { value: "pix", label: "Pix" },
  { value: "boleto", label: "Boleto" },
  { value: "credito", label: "Cartão de crédito" },
  { value: "debito", label: "Cartão de débito" }
];
const games = [
  {
    id: "concordancia", title: "Concordância em campo", subject: "Português", level: "Começando", ages: ["15-17", "18-25+"], paid: false, price: 0, symbol: "A", art: "#d9f264",
    description: "Acerte frases do dia a dia e fique de olho na concordância verbal.", questions: {
      "15-17": [
        { prompt: "Qual frase está de acordo com a norma-padrão?", choices: ["A gente vamos amanhã.", "A gente vai amanhã.", "A gente irão amanhã."], answer: 1, explanation: "A expressão ‘a gente’ pede o verbo na terceira pessoa do singular: vai." },
        { prompt: "Complete: As equipes ___ prontas para a prova.", choices: ["está", "estão", "estive"], answer: 1, explanation: "O sujeito ‘as equipes’ está no plural, então usamos ‘estão’." },
        { prompt: "Escolha a frase correta.", choices: ["Fazem dois anos que estudo.", "Faz dois anos que estudo.", "Fazem dois ano que estudo."], answer: 1, explanation: "Indicando tempo decorrido, o verbo ‘fazer’ é impessoal e fica no singular." }
      ],
      "18-25+": [
        { prompt: "Assinale a concordância correta.", choices: ["Houveram mudanças no edital.", "Houve mudanças no edital.", "Houveram mudança no edital."], answer: 1, explanation: "O verbo ‘haver’, com sentido de existir, é impessoal e permanece no singular." },
        { prompt: "Qual alternativa completa a frase? Mais de um candidato ___ recurso.", choices: ["apresentaram", "apresentou", "apresentastes"], answer: 1, explanation: "Com ‘mais de um’, o verbo normalmente concorda no singular: apresentou." },
        { prompt: "Marque a frase adequada à norma-padrão.", choices: ["É proibido a entrada.", "É proibida a entrada.", "São proibida a entrada."], answer: 1, explanation: "Com artigo definido, o adjetivo concorda com ‘entrada’: proibida." }
      ]
    }
  },
  {
    id: "proporcao", title: "Matemática sob pressão", subject: "Matemática", level: "Aquecimento", ages: ["15-17", "18-25+"], paid: false, price: 0, symbol: "%", art: "#f5ca4b",
    description: "Uma rodada rápida de porcentagem e raciocínio para destravar o estudo.", questions: {
      "15-17": [
        { prompt: "Quanto é 20% de 150?", choices: ["20", "30", "35"], answer: 1, explanation: "10% de 150 é 15; o dobro, 20%, é 30." },
        { prompt: "Uma turma tem 12 meninas e 8 meninos. Quantas pessoas há ao todo?", choices: ["18", "20", "22"], answer: 1, explanation: "Somamos 12 + 8 = 20 pessoas." },
        { prompt: "Se 3 cadernos custam R$ 24, quanto custam 5 pelo mesmo preço unitário?", choices: ["R$ 36", "R$ 40", "R$ 45"], answer: 1, explanation: "Cada caderno custa R$ 8; então 5 custam R$ 40." }
      ],
      "18-25+": [
        { prompt: "Um valor de R$ 200 recebe desconto de 15%. Qual é o preço final?", choices: ["R$ 170", "R$ 175", "R$ 185"], answer: 0, explanation: "15% de 200 é 30; 200 - 30 = 170." },
        { prompt: "Se 4 pessoas concluem uma tarefa em 6 dias, em quantos dias 8 pessoas a concluem no mesmo ritmo?", choices: ["3 dias", "6 dias", "12 dias"], answer: 0, explanation: "O trabalho é inversamente proporcional: dobrando a equipe, o tempo cai pela metade." },
        { prompt: "Qual é a média aritmética de 6, 8 e 13?", choices: ["8", "9", "9,5"], answer: 1, explanation: "(6 + 8 + 13) / 3 = 27 / 3 = 9." }
      ]
    }
  },
  {
    id: "banca", title: "Circuito da banca", subject: "Português", level: "Desafio", ages: ["18-25+"], paid: true, price: 19.9, symbol: "?", art: "#f18b6d",
    description: "Interpretação e gramática em rodadas curtas inspiradas em provas.", questions: {
      "15-17": [
        { prompt: "Em uma frase, a ideia principal costuma ser...", choices: ["o assunto central que organiza as informações.", "sempre a última palavra do texto.", "um detalhe sem relação com o tema."], answer: 0, explanation: "A ideia principal sintetiza o ponto central desenvolvido pelo texto." },
        { prompt: "Qual expressão indica uma conclusão?", choices: ["Além disso", "Portanto", "Por exemplo"], answer: 1, explanation: "‘Portanto’ é uma conjunção conclusiva." },
        { prompt: "Na frase ‘Os alunos revisaram o conteúdo’, o sujeito é...", choices: ["o conteúdo", "revisaram", "Os alunos"], answer: 2, explanation: "‘Os alunos’ é quem pratica a ação de revisar." }
      ],
      "18-25+": [
        { prompt: "Assinale o emprego correto da crase.", choices: ["Entregou o recurso à comissão.", "Chegou à pé ao local.", "A prova começa à partir das oito."], answer: 0, explanation: "O verbo ‘entregar’ rege ‘a’ e ‘comissão’ admite artigo feminino: a + a = à." },
        { prompt: "Em ‘Embora estivesse cansada, continuou estudando’, ‘embora’ expressa...", choices: ["causa", "concessão", "finalidade"], answer: 1, explanation: "‘Embora’ introduz uma ideia de concessão, uma expectativa contrariada." },
        { prompt: "Qual alternativa apresenta colocação pronominal adequada à norma-padrão?", choices: ["Nunca disseram-me isso.", "Nunca me disseram isso.", "Nunca disseram isso-me."], answer: 1, explanation: "A palavra negativa ‘nunca’ atrai o pronome para antes do verbo: próclise." }
      ]
    }
  },
  {
    id: "raciocinio", title: "Raciocínio em série", subject: "Matemática", level: "Desafio", ages: ["15-17", "18-25+"], paid: true, price: 24.9, symbol: "∑", art: "#91cdb2",
    description: "Problemas encadeados de lógica, proporção e leitura de dados.", questions: {
      "15-17": [
        { prompt: "Uma sequência começa em 4 e aumenta 3 a cada termo. Qual é o 5º termo?", choices: ["13", "16", "19"], answer: 1, explanation: "A sequência é 4, 7, 10, 13, 16." },
        { prompt: "Uma receita para 4 pessoas usa 300 g de farinha. Para 8 pessoas, quanto usar?", choices: ["450 g", "600 g", "900 g"], answer: 1, explanation: "O número de pessoas dobrou, então dobramos a quantidade: 600 g." },
        { prompt: "Um produto de R$ 80 teve aumento de 10%. Qual o novo preço?", choices: ["R$ 88", "R$ 90", "R$ 98"], answer: 0, explanation: "10% de R$ 80 é R$ 8; o novo valor é R$ 88." }
      ],
      "18-25+": [
        { prompt: "Se x + 7 = 19, qual é o valor de x?", choices: ["10", "12", "26"], answer: 1, explanation: "Subtraindo 7 dos dois lados: x = 19 - 7 = 12." },
        { prompt: "Um investimento de R$ 1.000 cresce 10% em um período. Qual o total ao final?", choices: ["R$ 1.010", "R$ 1.100", "R$ 1.200"], answer: 1, explanation: "10% de R$ 1.000 é R$ 100; total de R$ 1.100." },
        { prompt: "Em um grupo, 18 de 30 pessoas foram aprovadas. Qual percentual isso representa?", choices: ["50%", "60%", "65%"], answer: 1, explanation: "18 / 30 = 0,6, ou 60%." }
      ]
    }
  },
  {
    id: "simulado", title: "Simulado misto: reta final", subject: "Português + Matemática", level: "Avançado", ages: ["18-25+"], paid: true, price: 29.9, symbol: "!", art: "#a7b9e5",
    description: "Uma sessão mais longa para treinar ritmo, atenção e troca de matéria.", questions: {
      "15-17": [
        { prompt: "Qual é o plural correto de ‘cidadão’?", choices: ["cidadões", "cidadãos", "cidadães"], answer: 1, explanation: "O plural mais comum e adequado é ‘cidadãos’." },
        { prompt: "Quanto é 3/4 de 80?", choices: ["40", "60", "64"], answer: 1, explanation: "80 ÷ 4 = 20; 20 × 3 = 60." },
        { prompt: "Qual palavra é sinônimo de ‘conciso’?", choices: ["breve", "confuso", "extenso"], answer: 0, explanation: "Conciso é aquilo que expressa muito com poucas palavras: breve." }
      ],
      "18-25+": [
        { prompt: "A frase ‘Faltam documentos’ concorda com...", choices: ["o sujeito plural ‘documentos’.", "o verbo impessoal ‘faltar’.", "um sujeito oculto singular."], answer: 0, explanation: "O sujeito é ‘documentos’, por isso o verbo fica no plural: faltam." },
        { prompt: "Um candidato acertou 42 de 60 questões. Qual foi seu percentual de acertos?", choices: ["60%", "70%", "75%"], answer: 1, explanation: "42 / 60 = 0,7, portanto 70%." },
        { prompt: "Qual conectivo completa melhor: ‘Estudou bastante; ___, obteve bom resultado.’", choices: ["contudo", "por isso", "embora"], answer: 1, explanation: "‘Por isso’ conecta a causa (estudou) à consequência (obteve resultado)." }
      ]
    }
  },
  {
    id: "edital-medio", title: "Simulado de edital · nível médio", subject: "Português + Matemática + Informática", level: "Base do edital", education: ["medio"], educationLabel: "Ensino médio", exam: true, ages: ["18-25+"], paid: true, price: 34.9, symbol: "M", art: "#f5ca4b",
    description: "Interpretação, porcentagem e segurança digital em questões de concurso.", questions: {
      "15-17": [
        { prompt: "Qual frase está de acordo com a norma-padrão?", choices: ["Fazem três meses que estudo.", "Faz três meses que estudo.", "Fazem três mês que estudo."], answer: 1, explanation: "Indicando tempo decorrido, ‘fazer’ é impessoal e fica no singular." },
        { prompt: "Quanto é 15% de 200?", choices: ["25", "30", "35"], answer: 1, explanation: "10% de 200 é 20 e 5% é 10; juntos, 15% são 30." },
        { prompt: "Qual atitude ajuda a proteger uma conta?", choices: ["Repetir a mesma senha em todos os sites.", "Usar uma senha longa e exclusiva.", "Enviar a senha por mensagem."], answer: 1, explanation: "Uma senha longa e exclusiva reduz o impacto de vazamentos em outros serviços." }
      ],
      "18-25+": [
        { prompt: "Assinale o uso correto da crase.", choices: ["O candidato dirigiu-se à sala indicada.", "O candidato foi à pé até a sala.", "O candidato começou à estudar cedo."], answer: 0, explanation: "‘Dirigir-se’ pede a preposição ‘a’ e ‘sala’ admite artigo feminino: a + a = à." },
        { prompt: "Um item de R$ 240 recebeu desconto de 15%. Qual é o valor do desconto?", choices: ["R$ 24", "R$ 36", "R$ 40"], answer: 1, explanation: "10% de 240 são 24 e 5% são 12; o desconto total é R$ 36." },
        { prompt: "Uma mensagem pede sua senha por um link urgente. Qual é a conduta mais segura?", choices: ["Abrir o link e responder rapidamente.", "Não informar a senha e verificar o canal oficial.", "Encaminhar a mensagem aos colegas."], answer: 1, explanation: "Pedidos de senha por links são um sinal comum de phishing; confirme sempre nos canais oficiais." }
      ]
    }
  },
  {
    id: "matematica-edital-medio", title: "Matemática de edital · nível médio", subject: "Matemática", level: "Matemática básica", education: ["medio"], educationLabel: "Ensino médio", exam: true, ages: ["18-25+"], paid: true, price: 24.9, symbol: "%", art: "#f5ca4b",
    description: "Porcentagem, regra de três e leitura de dados em questões de concurso.", questions: {
      "18-25+": [
        { prompt: "Um produto de R$ 160 recebeu desconto de 25%. Qual é o preço final?", choices: ["R$ 120", "R$ 125", "R$ 140"], answer: 0, explanation: "25% de R$ 160 são R$ 40; subtraindo o desconto, o preço final é R$ 120." },
        { prompt: "Se 6 servidores concluem uma tarefa em 10 dias, em quantos dias 12 servidores a concluem no mesmo ritmo?", choices: ["5 dias", "10 dias", "20 dias"], answer: 0, explanation: "A relação é inversamente proporcional: dobrando a equipe, o tempo cai pela metade." },
        { prompt: "Em uma prova com 50 questões, uma pessoa acertou 35. Qual foi o percentual de acertos?", choices: ["65%", "70%", "75%"], answer: 1, explanation: "35 dividido por 50 é 0,7, ou seja, 70%." }
      ]
    }
  },
  {
    id: "ingles-edital-medio", title: "Inglês de edital · nível médio", subject: "Inglês", level: "Leitura e gramática", education: ["medio"], educationLabel: "Ensino médio", exam: true, ages: ["18-25+"], paid: true, price: 24.9, symbol: "E", art: "#91cdb2",
    description: "Vocabulário, interpretação e estruturas frequentes em provas de concurso.", questions: {
      "18-25+": [
        { prompt: "Choose the correct option: ‘The candidates ___ the instructions carefully.’", choices: ["reads", "read", "reading"], answer: 1, explanation: "Com o sujeito plural ‘the candidates’, usamos ‘read’ no presente simples." },
        { prompt: "In ‘The results were announced yesterday’, the verb is in the...", choices: ["simple past passive", "present perfect", "future"], answer: 0, explanation: "‘Were announced’ forma a voz passiva no passado simples." },
        { prompt: "The word ‘although’ expresses...", choices: ["contrast or concession", "addition", "time"], answer: 0, explanation: "‘Although’ introduz uma ideia de concessão ou contraste." }
      ]
    }
  },
  {
    id: "espanhol-edital-medio", title: "Espanhol de edital · nível médio", subject: "Espanhol", level: "Leitura e gramática", education: ["medio"], educationLabel: "Ensino médio", exam: true, ages: ["18-25+"], paid: true, price: 24.9, symbol: "Ñ", art: "#f18b6d",
    description: "Vocabulário, interpretação e gramática espanhola para provas de concurso.", questions: {
      "18-25+": [
        { prompt: "Completa: ‘Los documentos ___ sobre la mesa.’", choices: ["está", "están", "estás"], answer: 1, explanation: "O sujeito plural ‘los documentos’ concorda com ‘están’." },
        { prompt: "La palabra ‘además’ indica...", choices: ["oposición", "adición", "duda"], answer: 1, explanation: "‘Además’ acrescenta uma informação: significa ‘além disso’." },
        { prompt: "¿Cuál es el significado de ‘actualmente’?", choices: ["atualmente", "eventualmente", "antigamente"], answer: 0, explanation: "‘Actualmente’ significa ‘atualmente’; não deve ser confundido com ‘eventualmente’." }
      ]
    }
  },
  {
    id: "portugues-edital", title: "Português de edital", subject: "Português + interpretação", level: "Médio + superior", education: ["medio", "superior"], educationLabel: "Médio + superior", exam: true, ages: ["18-25+"], paid: true, price: 24.9, symbol: "P", art: "#f18b6d",
    description: "Interpretação, coesão e gramática com foco em questões de prova.", questions: {
      "15-17": [
        { prompt: "Qual conectivo indica uma conclusão?", choices: ["Entretanto", "Portanto", "Embora"], answer: 1, explanation: "‘Portanto’ introduz uma conclusão ou consequência." },
        { prompt: "Em ‘Os fiscais conferiram os documentos’, qual é o sujeito?", choices: ["Os fiscais", "os documentos", "conferiram"], answer: 0, explanation: "‘Os fiscais’ é o sujeito que pratica a ação de conferir." },
        { prompt: "Qual palavra está escrita corretamente?", choices: ["excessão", "exceção", "excesssão"], answer: 1, explanation: "A grafia correta é ‘exceção’, com c e ç." }
      ],
      "18-25+": [
        { prompt: "Em ‘Embora o prazo fosse curto, a equipe concluiu a análise’, ‘embora’ expressa...", choices: ["concessão", "causa", "finalidade"], answer: 0, explanation: "‘Embora’ introduz uma concessão, isto é, uma circunstância que poderia impedir o fato, mas não impediu." },
        { prompt: "Assinale a frase com concordância correta.", choices: ["Houveram recursos contra o resultado.", "Houve recursos contra o resultado.", "Haviam recurso contra o resultado."], answer: 1, explanation: "Com sentido de existir, ‘haver’ é impessoal e fica no singular." },
        { prompt: "Qual expressão completa corretamente: ‘O relatório foi revisado, ___ ainda precisa de aprovação.’", choices: ["portanto", "contudo", "porque"], answer: 1, explanation: "‘Contudo’ estabelece uma relação de oposição entre as orações." }
      ]
    }
  },
  {
    id: "constitucional", title: "Direito constitucional essencial", subject: "Direito constitucional", level: "Ensino superior", education: ["superior"], educationLabel: "Ensino superior", exam: true, ages: ["18-25+"], paid: true, price: 29.9, symbol: "C", art: "#91cdb2",
    description: "Princípios fundamentais, direitos e organização do Estado para concursos.", questions: {
      "15-17": [
        { prompt: "Qual alternativa apresenta um objetivo fundamental da República previsto na Constituição Federal?", choices: ["Construir uma sociedade livre, justa e solidária.", "Impedir a criação de associações.", "Concentrar os poderes em um único órgão."], answer: 0, explanation: "Construir uma sociedade livre, justa e solidária é um objetivo fundamental previsto no art. 3º." },
        { prompt: "Qual princípio orienta a atuação da administração pública no art. 37?", choices: ["Publicidade", "Exclusividade", "Sigilo permanente"], answer: 0, explanation: "A publicidade é um dos princípios expressos no art. 37 da Constituição." },
        { prompt: "Segundo a Constituição, os poderes da União são...", choices: ["Legislativo, Executivo e Judiciário.", "Federal, estadual e municipal.", "Civil, militar e eleitoral."], answer: 0, explanation: "Os Poderes da União são independentes e harmônicos entre si: Legislativo, Executivo e Judiciário." }
      ],
      "18-25+": [
        { prompt: "Quais são os princípios expressos da administração pública no art. 37, caput?", choices: ["Legalidade, impessoalidade, moralidade, publicidade e eficiência.", "Hierarquia, sigilo, pessoalidade, rapidez e autonomia.", "Legalidade, pessoalidade, economicidade, soberania e eficiência."], answer: 0, explanation: "O art. 37, caput, reúne os princípios conhecidos pelo acrônimo LIMPE." },
        { prompt: "A Constituição Federal de 1988 estabelece que todo poder emana...", choices: ["dos representantes do Poder Executivo.", "do povo, que o exerce por representantes eleitos ou diretamente.", "exclusivamente do Congresso Nacional."], answer: 1, explanation: "O parágrafo único do art. 1º dispõe que todo poder emana do povo." },
        { prompt: "Qual é uma garantia constitucional relacionada ao devido processo legal?", choices: ["Contraditório e ampla defesa.", "Julgamento sem conhecimento dos autos.", "Restrição geral ao direito de petição."], answer: 0, explanation: "Contraditório e ampla defesa são garantias previstas no art. 5º, LV." }
      ]
    }
  },
  {
    id: "administracao-publica", title: "Administração pública e ética", subject: "Administração pública", level: "Ensino superior", education: ["superior"], educationLabel: "Ensino superior", exam: true, ages: ["18-25+"], paid: true, price: 29.9, symbol: "A", art: "#a7b9e5",
    description: "Princípios administrativos, ética no serviço público e atos administrativos.", questions: {
      "15-17": [
        { prompt: "Agir sem favorecer amigos ou prejudicar alguém por motivos pessoais demonstra...", choices: ["impessoalidade", "publicidade", "informalidade"], answer: 0, explanation: "A impessoalidade exige atuação voltada ao interesse público, sem favorecimentos pessoais." },
        { prompt: "A divulgação de informações públicas, respeitadas as hipóteses legais de sigilo, relaciona-se ao princípio da...", choices: ["publicidade", "pessoalidade", "hierarquia"], answer: 0, explanation: "A publicidade dá transparência aos atos administrativos, observadas as exceções legais." },
        { prompt: "O dever de tratar o cidadão com honestidade e probidade está ligado à...", choices: ["ética no serviço público", "promoção pessoal", "liberdade para ignorar regras"], answer: 0, explanation: "A ética pública orienta a conduta íntegra e responsável de quem exerce função pública." }
      ],
      "18-25+": [
        { prompt: "A presunção de legitimidade dos atos administrativos significa que eles...", choices: ["são considerados válidos até prova em contrário.", "não podem ser questionados judicialmente.", "dispensam motivação em qualquer situação."], answer: 0, explanation: "A presunção é relativa: admite prova em contrário e controle administrativo ou judicial." },
        { prompt: "Um agente que usa o cargo para obter vantagem privada viola especialmente o dever de...", choices: ["probidade e finalidade pública.", "publicidade institucional.", "eficiência estatística."], answer: 0, explanation: "O exercício do cargo deve atender à finalidade pública e aos deveres de probidade." },
        { prompt: "A anulação de um ato administrativo ocorre quando ele é...", choices: ["ilegal.", "inconveniente, ainda que legal.", "antigo, independentemente de seus efeitos."], answer: 0, explanation: "A Administração anula atos ilegais; a revogação é que se relaciona a conveniência e oportunidade." }
      ]
    }
  },
  {
    id: "administracao-intermediaria", title: "Administração · nível intermediário", subject: "Administração geral", level: "Nível intermediário", education: ["superior"], educationLabel: "Ensino superior", exam: true, ages: ["18-25+"], paid: true, price: 29.9, symbol: "A", art: "#f5ca4b",
    description: "Funções administrativas, estrutura organizacional e gestão por processos para concursos.", questions: {
      "18-25+": [
        { prompt: "Qual função administrativa define objetivos e estabelece ações para alcançá-los?", choices: ["Planejamento", "Controle", "Direção"], answer: 0, explanation: "Planejar é definir objetivos e os caminhos para atingi-los." },
        { prompt: "Em um organograma, a representação de níveis e relações de autoridade mostra principalmente...", choices: ["a estrutura organizacional.", "o fluxo financeiro anual.", "o desempenho individual da equipe."], answer: 0, explanation: "O organograma representa graficamente a estrutura e as relações hierárquicas da organização." },
        { prompt: "Quando decisões ficam concentradas nos níveis mais altos da organização, ocorre...", choices: ["descentralização", "centralização", "departamentalização"], answer: 1, explanation: "Na centralização, a autoridade decisória permanece concentrada nos níveis superiores." }
      ]
    }
  },
  {
    id: "informatica-intermediaria", title: "Informática · nível intermediário", subject: "Informática", level: "Nível intermediário", education: ["superior"], educationLabel: "Ensino superior", exam: true, ages: ["18-25+"], paid: true, price: 29.9, symbol: "I", art: "#91cdb2",
    description: "Planilhas, redes e segurança da informação em questões de concursos de nível superior.", questions: {
      "18-25+": [
        { prompt: "Em uma planilha, o que indica a referência absoluta $B$2?", choices: ["Coluna e linha permanecem fixas ao copiar a fórmula.", "A fórmula soma automaticamente toda a coluna B.", "A célula contém necessariamente um valor monetário."], answer: 0, explanation: "O cifrão fixa a coluna B e a linha 2 ao copiar ou preencher uma fórmula." },
        { prompt: "Uma mensagem falsa tenta induzir o usuário a informar senha por um link. Esse golpe é conhecido como...", choices: ["phishing", "backup", "criptografia"], answer: 0, explanation: "Phishing usa mensagens e páginas fraudulentas para obter dados ou credenciais." },
        { prompt: "Uma rede que conecta dispositivos em uma área limitada, como um escritório, é normalmente uma...", choices: ["LAN", "WAN", "MAN"], answer: 0, explanation: "LAN (Local Area Network) é uma rede local, geralmente restrita a uma área pequena." }
      ]
    }
  },
  {
    id: "ingles-em-jogo", title: "English in action", subject: "Inglês", level: "Vocabulário e gramática", ages: ["15-17", "18-25+"], paid: false, price: 0, symbol: "E", art: "#91cdb2",
    description: "Pratique vocabulário e estruturas comuns em inglês com questões rápidas.", questions: {
      "15-17": [
        { prompt: "Complete: My friends ___ at school.", choices: ["is", "are", "am"], answer: 1, explanation: "Com o sujeito plural ‘my friends’, usamos ‘are’." },
        { prompt: "What is the opposite of ‘early’?", choices: ["late", "fast", "near"], answer: 0, explanation: "‘Late’ significa ‘atrasado’ e é o oposto de ‘early’ (cedo)." },
        { prompt: "Complete: I ___ breakfast at seven.", choices: ["have", "has", "having"], answer: 0, explanation: "No presente simples com ‘I’, usamos a forma base ‘have’." }
      ],
      "18-25+": [
        { prompt: "Choose the sentence with correct grammar.", choices: ["She doesn't like coffee.", "She don't like coffee.", "She not likes coffee."], answer: 0, explanation: "Na negativa com ‘she’, usamos ‘doesn't’ seguido do verbo na forma base." },
        { prompt: "In ‘The notice was published yesterday’, the phrase ‘was published’ is...", choices: ["passive voice", "present perfect", "future tense"], answer: 0, explanation: "‘Was published’ é voz passiva no passado: o aviso recebeu a ação de ser publicado." },
        { prompt: "Complete the second conditional: If I ___ more time, I would study Spanish.", choices: ["have", "had", "will have"], answer: 1, explanation: "No second conditional, usamos past simple na condição: ‘If I had...’" }
      ]
    }
  },
  {
    id: "espanol-en-accion", title: "Español en acción", subject: "Espanhol", level: "Vocabulário e gramática", ages: ["15-17", "18-25+"], paid: false, price: 0, symbol: "Ñ", art: "#f5ca4b",
    description: "Explore vocabulário, verbos e expressões do espanhol em uma rodada leve.", questions: {
      "15-17": [
        { prompt: "¿Cómo se dice ‘window’ en español?", choices: ["ventana", "puerta", "silla"], answer: 0, explanation: "‘Ventana’ significa ‘janela’ em espanhol." },
        { prompt: "Completa: Nosotros ___ español en clase.", choices: ["estudiamos", "estudian", "estudias"], answer: 0, explanation: "Com ‘nosotros’, o verbo ‘estudiar’ fica ‘estudiamos’." },
        { prompt: "¿Cuál palabra es un color?", choices: ["verde", "mesa", "correr"], answer: 0, explanation: "‘Verde’ é uma cor; ‘mesa’ é um móvel e ‘correr’ é um verbo." }
      ],
      "18-25+": [
        { prompt: "Elige la opción correcta: Ayer nosotros ___ un simulacro.", choices: ["completamos", "completaremos", "completar"], answer: 0, explanation: "‘Ayer’ indica passado; ‘completamos’ pode expressar a ação concluída." },
        { prompt: "Completa: A María le ___ las ciencias.", choices: ["gusta", "gustan", "gustas"], answer: 1, explanation: "O verbo concorda com ‘las ciencias’, então usamos ‘gustan’." },
        { prompt: "En ‘Aunque llovía, el equipo llegó a tiempo’, ‘aunque’ expresa...", choices: ["concesión", "causa", "finalidad"], answer: 0, explanation: "‘Aunque’ introduz uma concessão: a chuva não impediu a chegada no horário." }
      ]
    }
  },
  {
    id: "biologia-em-campo", title: "Biologia em campo", subject: "Biologia", level: "Células e ecologia", ages: ["15-17", "18-25+"], paid: false, price: 0, symbol: "B", art: "#f18b6d",
    description: "Revise células, fotossíntese e ecologia com desafios de ciências.", questions: {
      "15-17": [
        { prompt: "Qual estrutura controla grande parte das atividades da célula e guarda o DNA?", choices: ["núcleo", "membrana", "parede celular"], answer: 0, explanation: "O núcleo abriga o DNA e coordena diversas atividades celulares." },
        { prompt: "Na fotossíntese, as plantas absorvem principalmente qual gás do ar?", choices: ["oxigênio", "gás carbônico", "nitrogênio"], answer: 1, explanation: "As plantas utilizam gás carbônico e água, com energia luminosa, para produzir glicose." },
        { prompt: "Em uma cadeia alimentar, os produtores geralmente são...", choices: ["plantas e algas", "animais carnívoros", "fungos decompositores"], answer: 0, explanation: "Plantas e algas produzem matéria orgânica, geralmente pela fotossíntese." }
      ],
      "18-25+": [
        { prompt: "Qual organela está mais associada à produção de ATP na respiração celular?", choices: ["mitocôndria", "complexo golgiense", "lisossomo"], answer: 0, explanation: "A mitocôndria participa das etapas aeróbias da respiração celular e da produção de ATP." },
        { prompt: "Na mitose, uma célula diploide origina, em condições usuais, quantas células-filhas?", choices: ["duas com o mesmo número de cromossomos", "quatro com metade dos cromossomos", "duas sem material genético"], answer: 0, explanation: "A mitose produz duas células-filhas geneticamente semelhantes, mantendo o número de cromossomos." },
        { prompt: "Em um ecossistema, a energia disponível tende a diminuir entre níveis tróficos porque...", choices: ["parte é dissipada como calor a cada transferência.", "a energia é reciclada integralmente pelos decompositores.", "os consumidores produzem energia nova."], answer: 0, explanation: "A transferência de energia não é integral; parte é usada no metabolismo e dissipada como calor." }
      ]
    }
  }
];

const state = {
  route: "inicio",
  selectedAge: "",
  filter: "todos",
  search: "",
  examLevel: "todos",
  examSearch: "",
  customer: null,
  lastOrder: null,
  cart: loadCart(),
  game: null
};
const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter(item => games.some(game => game.id === item.id && game.paid) && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  updateCartCount();
}

function updateCartCount() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  const badge = document.querySelector("#cart-count");
  badge.textContent = String(count);
  badge.setAttribute("aria-label", `${count} ${count === 1 ? "item" : "itens"} no carrinho`);
}

function money(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function ageLabel(value) {
  return ageOptions.find(option => option.value === value)?.label || "Todas as idades";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

const courseBannerImages = {
  concordancia: "photo-1455390582262-044cdead277a",
  proporcao: "photo-1509228468518-180dd4864904",
  banca: "photo-1491841550275-ad7854e35ca6",
  raciocinio: "photo-1434030216411-0b793f4b4173",
  simulado: "photo-1503676260728-1c00da094a0b",
  "edital-medio": "photo-1523240795612-9a054b0db644",
  "matematica-edital-medio": "photo-1509228468518-180dd4864904",
  "ingles-edital-medio": "photo-1516979187457-637abb4f9353",
  "espanhol-edital-medio": "photo-1491841550275-ad7854e35ca6",
  "portugues-edital": "photo-1497633762265-9d179a990aa6",
  constitucional: "photo-1589829545856-d10d557cf95f",
  "administracao-publica": "photo-1454165804606-c3d57bc86b40",
  "administracao-intermediaria": "photo-1521737711867-e3b97375f902",
  "informatica-intermediaria": "photo-1498050108023-c5249f4df085",
  "ingles-em-jogo": "photo-1516321497487-e288fb19713f",
  "espanol-en-accion": "photo-1517842645767-c639042777db",
  "biologia-em-campo": "photo-1532094349884-543bc11b234d"
};

function gameCard(game) {
  const ageText = game.ages.length === 2 ? "15–17 · 18–25+" : ageLabel(game.ages[0]);
  const image = courseBannerImages[game.id] || "photo-1503676260728-1c00da094a0b";
  const owned = state.lastOrder?.ids?.includes(game.id);
  const action = game.paid
    ? owned
      ? `<button class="small-button" type="button" data-action="play" data-id="${game.id}">Jogar demonstração</button>`
      : `<button class="small-button outline" type="button" data-action="add" data-id="${game.id}">Adicionar</button>`
    : `<button class="small-button" type="button" data-action="play" data-id="${game.id}">Jogar grátis</button>`;
  const price = game.paid ? money(game.price) : "Grátis";
  return `<article class="game-card">
    <div class="game-art" style="--art:${game.art}"><img class="game-photo" src="https://images.unsplash.com/${image}?auto=format&fit=crop&w=720&q=80" alt="" loading="lazy"><span class="card-kicker">${game.paid ? "JOGO COMPLETO" : "JOGUE AGORA"}</span><span class="game-symbol" aria-hidden="true">${game.symbol}</span></div>
    <div class="game-content">
      <div class="game-meta"><span>${game.subject}</span><span>·</span><span>${ageText}</span><span>·</span><span>${game.level}</span></div>
      <h3>${game.title}</h3><p>${game.description}</p>
      <div class="card-bottom"><span class="price ${game.paid ? "" : "free"}">${price}</span>${action}</div>
    </div>
  </article>`;
}

function agePicker() {
  return `<section class="age-section" aria-labelledby="age-title">
    <div><h2 id="age-title">Qual é a sua faixa etária?</h2><p>Escolha uma trilha para encontrar desafios no seu ritmo.</p></div>
    <div class="age-choices" role="group" aria-label="Escolha sua faixa etária">
      ${ageOptions.map(option => `<button class="age-choice" type="button" data-action="age" data-age="${option.value}" aria-pressed="${state.selectedAge === option.value}">${option.label}</button>`).join("")}
    </div>
  </section>`;
}

function homeView() {
  const featured = games.slice(0, 3);
  return `<main class="shell">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow">Estudo que acompanha você</p><h1 id="hero-title">Aprender também pode ser jogo.</h1><p>Português e Matemática com desafios rápidos para dar o próximo passo rumo à sua prova.</p><div class="hero-actions"><button class="button" type="button" data-route="catalogo">Explorar jogos</button><button class="button secondary" type="button" data-action="play" data-id="concordancia">Jogar agora</button></div></div>
      <div class="hero-media"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85" alt="Estudantes reunidos em uma mesa de estudos" fetchpriority="high"><span class="photo-note">Uma questão por vez. Um passo de cada vez.</span></div>
    </section>
    ${agePicker()}
    <section aria-labelledby="featured-title"><div class="section-heading"><div><p class="eyebrow" style="color:var(--green)">Comece por aqui</p><h2 id="featured-title">Desafios para hoje</h2></div><button class="text-link" type="button" data-route="catalogo">Ver todos os jogos</button></div><div class="game-grid">${featured.map(gameCard).join("")}</div></section>
    <section class="wide-band"><div class="shell band-inner"><strong>Seu estudo. Seu ritmo. Seu próximo passo.</strong><span>Desafios gratuitos para começar; jogos completos para aprofundar.</span></div></section>
  </main>`;
}

function normalized(value) {
  return value.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filteredGames() {
  return games.filter(game => {
    const matchesFilter = state.filter === "todos" || (state.filter === "gratis" ? !game.paid : game.paid);
    const matchesAge = !state.selectedAge || game.ages.includes(state.selectedAge);
    const query = normalized(state.search.trim());
    const matchesSearch = !query || normalized(`${game.title} ${game.subject} ${game.description} ${game.level}`).includes(query);
    return matchesFilter && matchesAge && matchesSearch;
  });
}

function catalogView() {
  const results = filteredGames();
  return `<main class="shell page-wrap">
    <div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Catálogo</p><h1>Escolha seu desafio.</h1><p>Encontre jogos rápidos e simulados completos para treinar Português e Matemática.</p></div><button class="text-link" type="button" data-route="carrinho">Abrir carrinho (${state.cart.reduce((total, item) => total + item.quantity, 0)})</button></div>
    ${agePicker()}
    <div class="catalog-tools"><div class="search-wrap"><label for="game-search">Buscar jogos</label><input id="game-search" type="search" value="${escapeHtml(state.search)}" placeholder="Ex.: crase, porcentagem, lógica" autocomplete="off"></div><div class="filters" role="group" aria-label="Filtrar jogos">${[["todos", "Todos"], ["gratis", "Gratuitos"], ["pagos", "Completos"]].map(([value, label]) => `<button class="filter-button" type="button" data-action="filter" data-filter="${value}" aria-pressed="${state.filter === value}">${label}</button>`).join("")}</div></div>
    <p class="results-line" id="results-count" aria-live="polite">${results.length} ${results.length === 1 ? "jogo encontrado" : "jogos encontrados"}${state.selectedAge ? ` para ${ageLabel(state.selectedAge)}` : ""}.</p>
    <div class="game-grid" id="product-grid">${results.length ? results.map(gameCard).join("") : `<div class="empty-state" style="grid-column:1/-1"><h2>Nenhum jogo encontrado</h2><p>Tente outra busca, faixa etária ou filtro.</p></div>`}</div>
  </main>`;
}

function filteredExamGames() {
  const query = normalized(state.examSearch.trim());
  return games.filter(game => {
    if (!game.exam || !game.paid) return false;
    const matchesLevel = state.examLevel === "todos" || game.education.includes(state.examLevel);
    const matchesSearch = !query || normalized(`${game.title} ${game.subject} ${game.description} ${game.level}`).includes(query);
    return matchesLevel && matchesSearch;
  });
}

function concursoView() {
  const results = filteredExamGames();
  return `<main class="shell page-wrap">
    <div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Preparação para concursos</p><h1>Estudos para concurso.</h1><p>Jogos pagos com conteúdo de provas de nível médio e superior. Escolha a escolaridade do edital e pratique.</p></div></div>
    <div class="catalog-tools"><div class="search-wrap"><label for="exam-search">Buscar assuntos de concurso</label><input id="exam-search" type="search" value="${escapeHtml(state.examSearch)}" placeholder="Ex.: constitucional, português, ética" autocomplete="off"></div><div class="filters" role="group" aria-label="Filtrar por escolaridade">${[["todos", "Todos"], ["medio", "Ensino médio"], ["superior", "Ensino superior"]].map(([value, label]) => `<button class="filter-button" type="button" data-action="education" data-education="${value}" aria-pressed="${state.examLevel === value}">${label}</button>`).join("")}</div></div>
    <p class="results-line" id="exam-results-count" aria-live="polite">${results.length} ${results.length === 1 ? "jogo pago" : "jogos pagos"}${state.examLevel !== "todos" ? ` para ${state.examLevel === "medio" ? "ensino médio" : "ensino superior"}` : ""}.</p>
    <div class="game-grid" id="exam-product-grid">${results.length ? results.map(gameCard).join("") : `<div class="empty-state" style="grid-column:1/-1"><h2>Nenhum jogo encontrado</h2><p>Tente outro assunto, faixa etária ou escolaridade.</p></div>`}</div>
  </main>`;
}

function cartItems() {
  return state.cart.map(item => ({ ...item, game: games.find(game => game.id === item.id) })).filter(item => item.game);
}

function cartTotal() {
  return cartItems().reduce((total, item) => total + item.game.price * item.quantity, 0);
}

function cartView() {
  const items = cartItems();
  if (!items.length) return `<main class="shell page-wrap"><div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Seu carrinho</p><h1>Está começando vazio.</h1><p>Os jogos gratuitos podem ser iniciados direto no catálogo. Adicione um jogo completo quando quiser aprofundar.</p></div></div><div class="empty-state"><h2>Seu carrinho está vazio</h2><p>Explore os desafios gratuitos ou escolha um jogo completo.</p><button class="button" style="margin-top:12px;background:var(--green);color:white" type="button" data-route="catalogo">Ver catálogo</button></div></main>`;
  return `<main class="shell page-wrap"><div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Seu carrinho</p><h1>Quase lá.</h1><p>Revise seus jogos antes de seguir para o cadastro.</p></div></div><div class="split-layout"><div class="cart-list">${items.map(item => `<article class="cart-row"><div><h2>${item.game.title}</h2><p>${item.game.subject} · Jogo completo</p></div><div class="quantity" aria-label="Quantidade de ${item.game.title}"><button type="button" data-action="quantity" data-id="${item.id}" data-delta="-1" aria-label="Diminuir quantidade">−</button><span>${item.quantity}</span><button type="button" data-action="quantity" data-id="${item.id}" data-delta="1" aria-label="Aumentar quantidade">+</button></div><span class="price">${money(item.game.price * item.quantity)}</span><button class="remove-button" type="button" data-action="remove" data-id="${item.id}">Remover</button></article>`).join("")}</div><aside class="summary"><h2>Resumo do pedido</h2><div class="summary-line"><span>${items.reduce((sum, item) => sum + item.quantity, 0)} jogo(s)</span><span>${money(cartTotal())}</span></div><div class="summary-total"><span>Total demonstrativo</span><span>${money(cartTotal())}</span></div><button class="button" type="button" data-route="checkout">Continuar para cadastro</button><p class="note">Este é um fluxo de demonstração. Nenhum pagamento será solicitado ou processado.</p></aside></div></main>`;
}

function customerFields() {
  const customer = state.customer || {};
  const selected = state.selectedAge || customer.age || "";
  return `<div class="form-panel"><div class="field"><label for="customer-name">Nome</label><input id="customer-name" name="name" required minlength="2" autocomplete="name" value="${escapeHtml(customer.name || "")}" placeholder="Seu nome"></div><div class="field"><label for="customer-email">E-mail</label><input id="customer-email" name="email" type="email" required autocomplete="email" value="${escapeHtml(customer.email || "")}" placeholder="voce@email.com"></div><div class="field full"><label for="customer-age">Faixa etária</label><select id="customer-age" name="age" required><option value="" ${selected ? "" : "selected"} disabled>Selecione sua faixa etária</option>${ageOptions.map(option => `<option value="${option.value}" ${selected === option.value ? "selected" : ""}>${option.label}</option>`).join("")}</select><span class="hint">A escolha personaliza os desafios; não precisamos da sua data de nascimento.</span></div></div>`;
}

function paymentMethodFields() {
  return `<fieldset class="payment-methods"><legend>Forma de pagamento</legend><p class="payment-hint">Escolha uma opção para esta demonstração. Nenhum pagamento será processado.</p><div class="payment-options">${paymentMethods.map(method => `<label class="payment-option"><input type="radio" name="paymentMethod" value="${method.value}" required><span>${method.label}</span></label>`).join("")}</div></fieldset>`;
}

function paymentMethodLabel(value) {
  return paymentMethods.find(method => method.value === value)?.label || "Não informada";
}

function registrationView() {
  return `<main class="shell page-wrap"><div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Cadastro</p><h1>Vamos nos conhecer.</h1><p>Preencha só o necessário para preparar sua trilha de estudos.</p></div></div><div class="form-layout"><div><form id="registration-form">${customerFields()}<div class="form-actions"><button class="button" type="submit">Salvar cadastro de demonstração</button><span class="privacy-note">Os dados ficam somente nesta sessão de demonstração e não são enviados a um servidor.</span></div></form><div id="registration-status" role="status"></div></div><aside class="side-note"><h2>Feito para o seu momento</h2><p>Escolha uma das faixas etárias e encontre atividades de Português e Matemática no nível adequado. Você pode alterar a seleção quando quiser.</p></aside></div></main>`;
}

function checkoutView() {
  if (!state.cart.length) return `<main class="shell page-wrap"><div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Finalização</p><h1>Seu carrinho está vazio.</h1><p>Escolha um jogo completo no catálogo para continuar.</p></div></div><button class="button" style="background:var(--green);color:white" type="button" data-route="catalogo">Ir para o catálogo</button></main>`;
  return `<main class="shell page-wrap"><div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Finalização demonstrativa</p><h1>Confirme seus dados.</h1><p>Escolha uma forma de pagamento para a demonstração. Nenhum pagamento será processado.</p></div></div><div class="form-layout"><div><form id="checkout-form">${customerFields()}${paymentMethodFields()}<div class="form-actions"><button class="button" type="submit">Confirmar pedido demonstrativo · ${money(cartTotal())}</button><span class="privacy-note">Nenhum pagamento será cobrado. Esta ação não cria um pedido real.</span></div></form></div><aside class="summary"><h2>Seu pedido</h2>${cartItems().map(item => `<div class="summary-line"><span>${item.quantity} × ${item.game.title}</span><span>${money(item.game.price * item.quantity)}</span></div>`).join("")}<div class="summary-total"><span>Total demonstrativo</span><span>${money(cartTotal())}</span></div></aside></div></main>`;
}

function confirmationView() {
  const order = state.lastOrder;
  if (!order) return `<main class="shell page-wrap"><div class="page-title"><div><p class="eyebrow" style="color:var(--green)">Pedido</p><h1>Nenhum pedido por aqui.</h1><p>Quando estiver pronto, escolha um jogo completo no catálogo.</p></div></div><button class="button" style="background:var(--green);color:white" type="button" data-route="catalogo">Explorar jogos</button></main>`;
  return `<main class="shell page-wrap"><section class="confirmation"><p class="eyebrow">Demonstração concluída</p><h1>Pedido anotado, ${escapeHtml(order.name.split(" ")[0])}.</h1><p>Seu pedido de demonstração <strong>${order.reference}</strong> ficou em <strong>${money(order.total)}</strong>. Forma selecionada: <strong>${paymentMethodLabel(order.paymentMethod)}</strong>. Nenhuma cobrança foi feita. Os jogos escolhidos agora aparecem com acesso de demonstração no catálogo.</p><button class="button" type="button" data-route="catalogo">Ir para meus jogos</button></section></main>`;
}

function render() {
  document.querySelectorAll(".nav [data-route]").forEach(button => {
    if (button.tagName === "BUTTON") {
      if (button.dataset.route === state.route || (state.route === "checkout" && button.dataset.route === "carrinho")) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
  const views = { inicio: homeView, catalogo: catalogView, concursos: concursoView, carrinho: cartView, cadastro: registrationView, checkout: checkoutView, pedido: confirmationView };
  app.innerHTML = (views[state.route] || homeView)();
  updateCartCount();
  document.querySelector("#main-nav").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  if (state.route === "catalogo") {
    const search = document.querySelector("#game-search");
    search.addEventListener("input", event => {
      state.search = event.target.value;
      const results = filteredGames();
      document.querySelector("#results-count").textContent = `${results.length} ${results.length === 1 ? "jogo encontrado" : "jogos encontrados"}${state.selectedAge ? ` para ${ageLabel(state.selectedAge)}` : ""}.`;
      document.querySelector("#product-grid").innerHTML = results.length ? results.map(gameCard).join("") : `<div class="empty-state" style="grid-column:1/-1"><h2>Nenhum jogo encontrado</h2><p>Tente outra busca, faixa etária ou filtro.</p></div>`;
    });
  }
  if (state.route === "concursos") {
    document.querySelector("#exam-search").addEventListener("input", event => {
      state.examSearch = event.target.value;
      const results = filteredExamGames();
      document.querySelector("#exam-results-count").textContent = `${results.length} ${results.length === 1 ? "jogo pago" : "jogos pagos"}${state.examLevel !== "todos" ? ` para ${state.examLevel === "medio" ? "ensino médio" : "ensino superior"}` : ""}.`;
      document.querySelector("#exam-product-grid").innerHTML = results.length ? results.map(gameCard).join("") : `<div class="empty-state" style="grid-column:1/-1"><h2>Nenhum jogo encontrado</h2><p>Tente outro assunto, faixa etária ou escolaridade.</p></div>`;
    });
  }
  if (state.route === "cadastro") document.querySelector("#registration-form").addEventListener("submit", saveCustomer);
  if (state.route === "checkout") document.querySelector("#checkout-form")?.addEventListener("submit", submitOrder);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigate(route) {
  state.route = route;
  render();
}

function addToCart(id) {
  const game = games.find(item => item.id === id && item.paid);
  if (!game) return;
  const item = state.cart.find(entry => entry.id === id);
  if (item) item.quantity += 1;
  else state.cart.push({ id, quantity: 1 });
  saveCart();
  render();
  const count = state.cart.reduce((total, entry) => total + entry.quantity, 0);
  document.querySelector("#cart-count").setAttribute("aria-label", `${count} ${count === 1 ? "item adicionado" : "itens no carrinho"}`);
}

function changeQuantity(id, delta) {
  const item = state.cart.find(entry => entry.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) state.cart = state.cart.filter(entry => entry.id !== id);
  saveCart();
  render();
}

function saveCustomer(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget));
  state.customer = { name: values.name.trim(), email: values.email.trim(), age: values.age };
  state.selectedAge = values.age;
  document.querySelector("#registration-status").innerHTML = `<p class="note" style="color:var(--green);font-weight:700">Cadastro de demonstração salvo nesta sessão. Sua faixa: ${ageLabel(values.age)}.</p>`;
}

function submitOrder(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget));
  const ids = state.cart.map(item => item.id);
  state.customer = { name: values.name.trim(), email: values.email.trim(), age: values.age };
  state.selectedAge = values.age;
  state.lastOrder = {
    name: state.customer.name,
    reference: `DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    total: cartTotal(),
    ids,
    paymentMethod: values.paymentMethod
  };
  state.cart = [];
  saveCart();
  navigate("pedido");
}

function startGame(id) {
  const game = games.find(item => item.id === id);
  if (!game) return;
  if (game.paid && !state.lastOrder?.ids?.includes(id)) {
    addToCart(id);
    return;
  }
  if (!state.selectedAge && game.ages.length === 2) {
    state.game = { id, age: "15-17", index: 0, score: 0, answered: false };
  } else {
    const age = game.ages.includes(state.selectedAge) ? state.selectedAge : game.ages[0];
    state.game = { id, age, index: 0, score: 0, answered: false };
  }
  renderGame();
}

function renderGame() {
  const game = games.find(item => item.id === state.game.id);
  const questions = game.questions[state.game.age] || game.questions[game.ages[0]];
  const question = questions[state.game.index];
  const progress = state.game.index + 1;
  const isDone = state.game.index >= questions.length;
  if (isDone) {
    modalRoot.innerHTML = `<div class="modal-backdrop" data-action="backdrop"><section class="game-modal" role="dialog" aria-modal="true" aria-labelledby="game-title"><button class="modal-close" type="button" data-action="close-game" aria-label="Fechar jogo">×</button><p class="eyebrow">Rodada concluída</p><h2 id="game-title">${game.title}</h2><div class="game-result"><strong>${state.game.score}/${questions.length}</strong><p>Respostas corretas nesta rodada. ${state.game.score === questions.length ? "Mandou muito bem!" : "Cada questão revisada já conta como avanço."}</p></div><button class="button" type="button" data-action="close-game">Voltar aos jogos</button></section></div>`;
    document.querySelector(".modal-close").focus();
    return;
  }
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="backdrop"><section class="game-modal" role="dialog" aria-modal="true" aria-labelledby="game-title" tabindex="-1"><button class="modal-close" type="button" data-action="close-game" aria-label="Fechar jogo">×</button><p class="eyebrow">${game.subject} · ${ageLabel(state.game.age)}</p><h2 id="game-title">${game.title}</h2><p class="game-progress">Questão ${progress} de ${questions.length}</p><p class="question">${question.prompt}</p><div class="answer-list">${question.choices.map((choice, index) => `<button class="answer-option" type="button" data-action="answer" data-answer="${index}" ${state.game.answered ? "disabled" : ""}>${choice}</button>`).join("")}</div><p class="feedback" id="game-feedback" role="status">${state.game.answered ? `${question.answer === state.game.lastAnswer ? "Correto! " : "Quase. "}${question.explanation}` : "Escolha uma resposta para continuar."}</p><button class="button" type="button" data-action="next-question" ${state.game.answered ? "" : "disabled"}>${progress === questions.length ? "Ver resultado" : "Próxima questão"}</button></section></div>`;
  const dialog = document.querySelector(".game-modal");
  dialog.focus();
  if (state.game.answered) markAnswers(question);
}

function markAnswers(question) {
  document.querySelectorAll(".answer-option").forEach(button => {
    const index = Number(button.dataset.answer);
    if (index === question.answer) button.classList.add("correct");
    else if (index === state.game.lastAnswer) button.classList.add("incorrect");
  });
}

function answerQuestion(index) {
  if (state.game.answered) return;
  const game = games.find(item => item.id === state.game.id);
  const questions = game.questions[state.game.age] || game.questions[game.ages[0]];
  const question = questions[state.game.index];
  state.game.answered = true;
  state.game.lastAnswer = index;
  if (index === question.answer) state.game.score += 1;
  renderGame();
}

function nextQuestion() {
  state.game.index += 1;
  state.game.answered = false;
  delete state.game.lastAnswer;
  renderGame();
}

document.addEventListener("click", event => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    event.preventDefault();
    navigate(routeButton.dataset.route);
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const { action, id } = actionButton.dataset;
  if (action === "age") {
    state.selectedAge = actionButton.dataset.age;
    render();
  } else if (action === "filter") {
    state.filter = actionButton.dataset.filter;
    render();
  } else if (action === "education") {
    state.examLevel = actionButton.dataset.education;
    render();
  } else if (action === "play") startGame(id);
  else if (action === "add") addToCart(id);
  else if (action === "quantity") changeQuantity(id, Number(actionButton.dataset.delta));
  else if (action === "remove") {
    state.cart = state.cart.filter(item => item.id !== id);
    saveCart();
    render();
  } else if (action === "answer") answerQuestion(Number(actionButton.dataset.answer));
  else if (action === "next-question") nextQuestion();
  else if (action === "close-game") {
    modalRoot.innerHTML = "";
    state.game = null;
  } else if (action === "backdrop" && event.target === actionButton) {
    modalRoot.innerHTML = "";
    state.game = null;
  }
});

document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector("#main-nav");
  const isOpen = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  event.currentTarget.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modalRoot.innerHTML) {
    modalRoot.innerHTML = "";
    state.game = null;
  }
});

const whatsappLinkUrl = (() => {
  try {
    const whatsappLink = new URL(WHATSAPP_LINK_URL.trim());
    const inviteCode = whatsappLink.pathname.split("/").filter(Boolean);
    const isGroupInvite = whatsappLink.hostname.toLowerCase() === "chat.whatsapp.com" && inviteCode.length === 1;
    const isDownloadPage = whatsappLink.hostname.toLowerCase() === "www.whatsapp.com" && whatsappLink.pathname === "/download";
    return whatsappLink.protocol === "https:" && (isGroupInvite || isDownloadPage) ? whatsappLink.href : "";
  } catch {
    return "";
  }
})();
const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
const whatsappUrl = whatsappLinkUrl || (whatsappNumber ? `https://wa.me/${whatsappNumber}` : "");
const whatsappCta = document.querySelector("#whatsapp-cta");
const whatsappFooterLink = document.querySelector("#whatsapp-link");
if (whatsappUrl) {
  whatsappCta.href = whatsappUrl;
  whatsappCta.target = "_blank";
  whatsappCta.rel = "noopener noreferrer";
  whatsappCta.setAttribute("aria-label", whatsappLinkUrl ? "Abrir link do WhatsApp" : "Abrir conversa no WhatsApp");
  whatsappFooterLink.href = whatsappUrl;
  whatsappFooterLink.textContent = whatsappLinkUrl?.includes("www.whatsapp.com/download") ? "Baixar WhatsApp" : "Fale com a gente pelo WhatsApp";
  whatsappFooterLink.hidden = false;
} else {
  whatsappCta.addEventListener("click", event => {
    event.preventDefault();
    const status = document.querySelector("#whatsapp-status");
    status.textContent = "Link do WhatsApp ainda não configurado em WHATSAPP_LINK_URL.";
    status.hidden = false;
    status.focus({ preventScroll: true });
    status.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

const themeToggle = document.querySelector("#theme-toggle");
function applyTheme(isDark) {
  const label = isDark ? "Ativar modo claro" : "Ativar modo escuro";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#243328" : "#f4f5ec";
}

applyTheme(localStorage.getItem(THEME_STORAGE_KEY) === "dark");
themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
});

render();

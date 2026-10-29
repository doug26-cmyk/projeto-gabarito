# Requisitos do sistema

Este documento consolida os requisitos fornecidos nas imagens e os requisitos identificados nas funcionalidades da aplicação em `site/`. Os requisitos originais foram mantidos; requisitos adicionais descrevem comportamentos que já existem no protótipo.

**Status:** Implementado = disponível no protótipo; Parcial = existe uma versão demonstrativa ou ainda não foi validado; Pendente = não implementado.

## Requisitos funcionais

| ID | Requisito | Status |
| --- | --- | --- |
| RF01 | O sistema deverá permitir que a pessoa cliente visualize os jogos disponíveis, com informações como título, matéria, nível e preço ou indicação de gratuidade. | Implementado |
| RF02 | O sistema deverá permitir pesquisar jogos por nome. A busca também considera matéria, descrição e nível. | Implementado |
| RF03 | O sistema deverá permitir adicionar jogos completos ao carrinho. | Implementado |
| RF04 | O sistema deverá permitir finalizar um pedido e apresentar sua confirmação. Nesta versão, a finalização é demonstrativa e não cria um pedido em servidor nem processa pagamento. | Parcial |
| RF05 | O administrador deverá conseguir cadastrar novos produtos ou jogos. | Pendente |
| RF06 | O sistema deverá permitir filtrar o catálogo por jogos gratuitos ou completos e pela faixa etária selecionada. | Implementado |
| RF07 | O sistema deverá oferecer uma área de estudos para concursos com busca e filtro por escolaridade (ensino médio ou superior). | Implementado |
| RF08 | O sistema deverá permitir iniciar jogos gratuitos e responder às questões interativas, usando a faixa etária escolhida quando houver conteúdo específico para ela. | Implementado |
| RF09 | O sistema deverá informar se cada resposta está correta e apresentar uma explicação; ao final, deverá exibir a pontuação da rodada. | Implementado |
| RF10 | O sistema deverá permitir alterar quantidades e remover jogos do carrinho, atualizando os preços e o total demonstrativo. | Implementado |
| RF11 | O sistema deverá preservar o conteúdo do carrinho entre visitas no mesmo navegador. | Implementado — armazenamento local |
| RF12 | O sistema deverá permitir preencher e validar nome, e-mail e faixa etária no cadastro demonstrativo. | Implementado — dados mantidos apenas na sessão |
| RF13 | Ao finalizar a demonstração, o sistema deverá permitir selecionar uma forma de pagamento e mostrar uma referência, o resumo e a confirmação do pedido. | Implementado — sem cobrança ou pedido real |
| RF14 | O sistema deverá permitir alternar entre tema claro e escuro e lembrar a preferência no mesmo navegador. | Implementado — armazenamento local |

RF01–RF05 correspondem aos requisitos funcionais fornecidos nas imagens; RF06–RF14 foram identificados na análise do código do projeto.

## Requisitos não funcionais

| ID | Requisito | Status |
| --- | --- | --- |
| RNF01 | O site deverá ser responsivo para celular, tablet e computador. | Implementado no CSS; requer validação visual em dispositivos e navegadores |
| RNF02 | O site deverá apresentar carregamento rápido. | Parcial; imagens de catálogo usam carregamento tardio, mas não há medição ou meta de desempenho definida |
| RNF03 | Os dados dos usuários deverão ser protegidos. | Parcial; dados do cadastro não são enviados a servidor, mas o carrinho e a preferência de tema ficam no armazenamento local do navegador |
| RNF04 | O site deverá possuir uma interface de fácil utilização. | Parcial; há navegação, filtros e formulários identificados, mas não foi registrada avaliação de usabilidade |
| RNF05 | O sistema deverá estar disponível 24 horas por dia. | Dependente da disponibilidade do GitHub Pages; não há SLA próprio ou monitoramento configurado |
| RNF06 | A interface deverá oferecer suporte a tecnologias assistivas e navegação por teclado, com conteúdo semântico, rótulos e indicação de foco. | Parcial; há estrutura semântica, atributos ARIA e estilos de foco, mas não foi realizada auditoria completa de acessibilidade |

RNF01–RNF05 correspondem aos requisitos não funcionais fornecidos nas imagens. RNF06 foi identificado na análise da marcação e dos estilos do projeto.

## Escopo e limitações

O site publicado é um protótipo front-end estático. Não há painel administrativo, autenticação, API ou banco de dados. O cadastro e o pedido existem somente durante a sessão atual da página; nenhuma cobrança é realizada. A disponibilidade contínua e o desempenho dependem da conexão, dos recursos externos e da plataforma de hospedagem.

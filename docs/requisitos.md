# Requisitos do sistema

Este documento registra os requisitos funcionais e não funcionais fornecidos para o Projeto Gabarito.

## Requisitos funcionais

| ID | Requisito |
| --- | --- |
| RF01 | O sistema deverá permitir que o cliente visualize os produtos. |
| RF02 | O sistema deverá permitir pesquisar produtos por nome. |
| RF03 | O sistema deverá permitir adicionar produtos ao carrinho. |
| RF04 | O sistema deverá permitir finalizar um pedido. |
| RF05 | O administrador deverá conseguir cadastrar novos produtos. |

## Requisitos não funcionais

| ID | Requisito |
| --- | --- |
| RNF01 | O site deverá ser responsivo para celular, tablet e computador. |
| RNF02 | O site deverá apresentar carregamento rápido. |
| RNF03 | Os dados dos usuários deverão ser protegidos. |
| RNF04 | O site deverá possuir uma interface de fácil utilização. |
| RNF05 | O sistema deverá estar disponível 24 horas por dia. |

## Estado na versão atual

Os requisitos acima descrevem o sistema desejado e não significam que todas as funções já estejam implementadas. A versão publicada é um protótipo front-end demonstrativo:

- RF01 e RF02 estão disponíveis no catálogo de jogos, que permite visualizar, buscar e filtrar atividades.
- RF03 está disponível para os jogos completos.
- RF04 é apenas uma finalização demonstrativa: não há processamento de pagamento nem criação de pedido em servidor.
- RF05 não está implementado; esta versão não possui painel administrativo nem cadastro de produtos.
- A interface é responsiva. O carregamento e a disponibilidade dependem da conexão e da plataforma de hospedagem.
- Não há backend. Os dados informados no cadastro não são enviados a um servidor; não há autenticação ou conta de usuário.

Uma implementação completa de pedidos, administração de produtos e proteção de dados persistidos exige serviços de backend apropriados. A disponibilidade contínua também depende do serviço de hospedagem.

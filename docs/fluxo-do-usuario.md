# Fluxo do usuário

O Projeto Gabarito permite explorar e jogar sem criar uma conta. A faixa etária é opcional e pode ser escolhida para filtrar atividades adequadas.

```mermaid
flowchart TD
    Inicio[Início] --> Faixa[Escolher faixa etária opcional]
    Faixa --> Catalogo[Explorar catálogo]
    Faixa --> Gratis[Jogar desafio gratuito]
    Inicio --> Gratis
    Inicio --> CadastroLivre[Cadastro demonstrativo pelo menu]
    Catalogo --> Tipo{Tipo de atividade}
    Tipo --> Gratis
    Tipo --> Concurso[Filtrar estudos para concurso]
    Concurso --> Completo[Selecionar jogo completo]
    Catalogo --> Completo
    Gratis --> Questao[Responder questões]
    Questao --> Feedback[Ver acerto e explicação]
    Feedback --> Continua{Há mais questões?}
    Continua -->|Sim| Questao
    Continua -->|Não| Resultado[Ver resultado da rodada]
    Completo --> Carrinho[Adicionar ao carrinho]
    Carrinho --> Revisao[Revisar itens e total demonstrativo]
    Revisao --> Cadastro[Informar dados para demonstração]
    Cadastro --> Pedido[Confirmar pedido demonstrativo]
    Pedido --> Acesso[Acessar jogos completos nesta sessão]
```

## Limites desta versão

- Não há login, conta de usuário nem verificação de identidade.
- O cadastro pode ser aberto pelo menu ou durante a finalização; os dados ficam somente na memória da sessão atual do navegador.
- A forma de pagamento é uma seleção demonstrativa: nenhuma cobrança é feita.
- O carrinho e o tema são armazenados localmente no navegador; não há envio para API ou banco de dados.

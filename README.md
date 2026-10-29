# Projeto Gabarito

Aplicação web educacional com jogos rápidos de Português e Matemática para apoiar a preparação para concursos. O projeto oferece desafios gratuitos e simulados demonstrativos em uma interface responsiva.

## Acessar o site

O site é publicado pelo GitHub Pages: [abrir Projeto Gabarito](https://doug26-cmyk.github.io/projeto-gabarito/).

## Funcionalidades

- Catálogo de jogos com busca e filtros por matéria, faixa etária e escolaridade.
- Perguntas interativas com alternativas, explicações e resultado da rodada.
- Área de estudos para concursos de nível médio e superior.
- Cadastro demonstrativo, carrinho e fluxo de pedido sem processamento de pagamento.
- Tema claro/escuro e preferência de tema salva no navegador.

## Fluxo do usuário

1. A pessoa acessa o início e pode escolher uma faixa etária para personalizar os jogos.
2. No catálogo, pode buscar e filtrar atividades ou abrir a área de estudos para concursos.
3. Jogos gratuitos começam diretamente. A pessoa responde às questões, recebe explicações e vê o resultado da rodada.
4. Jogos completos podem ser adicionados ao carrinho, onde é possível revisar itens, quantidades e total demonstrativo.
5. Na finalização, a pessoa informa nome, e-mail, faixa etária e uma forma de pagamento demonstrativa.
6. O app apresenta uma confirmação e libera acesso de demonstração aos jogos selecionados.

O fluxo não exige criação de conta. Cadastro, pedido e pagamento são apenas demonstrativos; nenhum dado é enviado a um servidor e nenhuma cobrança é realizada. Consulte o [diagrama do fluxo](docs/fluxo-do-usuario.md).

## Estrutura

- `site/`: aplicação publicada pelo GitHub Pages.
- `docs/`: escopo do portal e documentação do fluxo do usuário.
- `.github/workflows/pages.yml`: publicação automática no GitHub Pages.

## Observações

Este projeto é uma demonstração front-end: não há backend, os dados não são enviados a um servidor e nenhum pagamento é processado. O carrinho e a preferência de tema são armazenados no navegador. Fontes e imagens podem depender de acesso à internet.

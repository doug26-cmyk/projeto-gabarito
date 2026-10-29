# Projeto Gabarito

Aplicação web educacional com jogos rápidos de Português e Matemática para apoiar a preparação para concursos. O projeto oferece desafios gratuitos e simulados demonstrativos em uma interface responsiva.

## Funcionalidades

- Catálogo de jogos com busca e filtros por matéria, faixa etária e escolaridade.
- Perguntas interativas com alternativas, explicações e resultado da rodada.
- Área de estudos para concursos de nível médio e superior.
- Cadastro demonstrativo, carrinho e fluxo de pedido sem processamento de pagamento.
- Tema claro/escuro e preferência de tema salva no navegador.

## Como executar

Não é necessário instalar dependências. Com Python 3, inicie um servidor estático na raiz do repositório:

```bash
python3 -m http.server 8000
```

Abra [http://localhost:8000/projeto/](http://localhost:8000/projeto/) no navegador. Também é possível abrir `projeto/index.html` diretamente, embora o servidor local seja recomendado.

## Estrutura

- `projeto/index.html`: estrutura da aplicação.
- `projeto/style.css`: estilos e layout responsivo.
- `projeto/script.js`: catálogo, jogos e interações.
- `projeto/escopo-portal.html` e `projeto/escopo-portal.pdf`: documentação do escopo do portal.

## Observações

Este projeto é uma demonstração front-end: não há backend, os dados não são enviados a um servidor e nenhum pagamento é processado. O carrinho e a preferência de tema são armazenados no navegador. Fontes e imagens podem depender de acesso à internet.

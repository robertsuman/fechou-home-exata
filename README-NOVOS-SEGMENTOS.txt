VALEU — NOVAS LPs DE SEGMENTOS
================================

Criadas a partir da LP REAL /eletricistas/ como TEMPLATE RÍGIDO.

Páginas:
- /encanadores/
- /marido-de-aluguel/
- /pintores/

O MEIO DAS PÁGINAS
------------------
Mantém a mesma estrutura, ordem, classes HTML e CSS da LP de Eletricistas:

1. Hero
2. 4 benefícios
3. Serviços do segmento
4. Fluxo orçamento > envio > agenda > materiais
5. Bloco de Orçamentos com 2 celulares
6. Bloco de Agenda
7. Bloco de Estoque com 2 celulares
8. Mais organização / profissionalismo
9. Seção SEO
10. FAQ
11. CTA final
12. Footer

CSS
---
Nenhum novo arquivo CSS foi criado.
As 3 páginas carregam:
../assets/styles.css

Para manter fidelidade total sem arriscar a página existente, o body das novas LPs
também contém a classe lp-eletricistas, que hoje funciona como classe de layout da LP.
Exemplo:
<body class="lp-eletricistas lp-encanadores">

Assim as novas páginas herdam EXATAMENTE os mesmos seletores atuais.

SCREENSHOTS
-----------
Todos partiram dos screenshots reais do Valeu usados em Eletricistas.

Foi permitido alterar apenas dados ilustrativos/textos:
- agenda
- serviços do orçamento
- materiais de estoque
- histórico de estoque

Não foram alterados:
- layout
- menu
- botões
- componentes
- navegação
- funcionalidades

HOME
----
Os cards de:
- Encanadores
- Pintores
- Marido de aluguel

foram transformados em links para as novas LPs, mantendo a classe segment-card.

SITEMAP
-------
sitemap.xml atualizado com as 3 novas URLs.

DEPLOY
------
Você pode substituir o conteúdo do projeto por este pacote ou copiar apenas:
- encanadores/
- marido-de-aluguel/
- pintores/
- assets/images/encanadores/
- assets/images/marido-de-aluguel/
- assets/images/pintores/

E então aplicar as mudanças de index.html e sitemap.xml, se quiser os links/home e SEO.

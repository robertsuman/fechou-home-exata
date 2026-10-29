VALEU — PROJETO HTML COMPLETO
==============================

Este pacote reúne a Home e todas as páginas criadas até aqui.

PÁGINAS
-------
/
├── index.html
├── agenda/index.html
├── orcamentos/index.html
├── orcamento-digital/index.html
├── vendas/index.html
├── estoque/index.html
├── relatorios/index.html
├── eletricistas/index.html
├── encanadores/index.html
├── marido-de-aluguel/index.html
├── pintores/index.html
├── jardinagem/index.html
├── pedreiros/index.html
├── privacidade/index.html
└── termos/index.html

ASSETS
------
Todas as páginas usam o mesmo:
assets/styles.css
assets/script.js

Os assets específicos dos segmentos ficam em:
assets/images/<segmento>/

TRACKING — REGRA OBRIGATÓRIA
----------------------------
Toda página nova do site DEVE carregar:
assets/script.js

O arquivo assets/script.js é responsável pelo tracking global do site:
- GA4: G-WFS6CHS0P5
- page_view automático pelo GA4
- evento click_playstore em todos os links da Google Play
- parâmetros do evento: link_url, cta_location, page_path e page_title

Não criar uma nova LP sem assets/script.js.
O tracking deve ser considerado requisito padrão de publicação, assim como SEO,
responsividade, header/footer e uso das telas reais do Valeu.

SEGMENTOS NA HOME
-----------------
A Home já possui links para:
- Eletricistas
- Encanadores
- Pintores
- Marido de aluguel
- Jardinagem
- Pedreiros

SEO
---
O sitemap.xml contém as páginas públicas do site.

O robots.txt referencia:
https://sejavaleu.com.br/sitemap.xml

PÁGINAS LEGAIS
---------------
URLs:
https://sejavaleu.com.br/privacidade/
https://sejavaleu.com.br/termos/

Os links também foram adicionados ao footer da Home e das LPs.

RESPONSIVIDADE
--------------
O CSS compartilhado contém os ajustes responsivos usados pelas páginas do projeto.

GIT
---
O .gitignore inclui:
*.rar
*.zip

Para publicar:
git add .
git status
git commit -m "Atualiza site Valeu"
git push

NETLIFY
-------
Publique a raiz deste projeto. As URLs em pastas com index.html funcionarão como:
https://sejavaleu.com.br/jardinagem/
https://sejavaleu.com.br/pedreiros/
etc.

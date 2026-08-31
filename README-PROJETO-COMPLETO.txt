VALEU — PROJETO HTML COMPLETO
==============================

Este pacote reúne a Home e todas as páginas criadas até aqui.

PÁGINAS
-------
/
├── index.html
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
O sitemap.xml já contém:
- Home
- 6 LPs de segmentos
- Política de Privacidade
- Termos de Uso

O robots.txt já referencia:
https://sejavaleu.com.br/sitemap.xml

PÁGINAS LEGAIS
---------------
URLs:
https://sejavaleu.com.br/privacidade/
https://sejavaleu.com.br/termos/

Os links também foram adicionados ao footer da Home e das LPs.

RESPONSIVIDADE
--------------
O CSS compartilhado inclui, no final, a correção da seção da Home:
"E depois do serviço?"
No mobile os cinco cards passam a ficar em uma coluna, evitando o estouro horizontal.

GIT
---
O .gitignore inclui:
*.rar
*.zip

Para publicar:
git add .
git status
git commit -m "Adiciona novas LPs e páginas legais"
git push

NETLIFY
-------
Publique a raiz deste projeto. As URLs em pastas com index.html funcionarão como:
https://sejavaleu.com.br/jardinagem/
https://sejavaleu.com.br/pedreiros/
etc.

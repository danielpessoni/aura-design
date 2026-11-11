# 🏛️ Aura Design — Design de Interiores

Landing page de alto padrão e experiência imersiva desenvolvida para o escritório fictício boutique de arquitetura **Studio Aura**, liderado pela arquiteta fictícia Marina Vasconcelos.

> ⚠️ **Nota de Autoria e Contexto:** O código contido na versão inicial deste repositório **não foi escrito por mim**. Ele é uma adaptação/refatoração do código gerado inteiramente por Inteligência Artificial durante uma aula prática dos mentores da escola **Dev em Dobro** no curso **DevQuest**. O objetivo central do exercício foi demonstrar como orquestrar prompts e *GitHub Skills* para solucionar o problema real de um cliente, gerando uma aplicação funcional sem a necessidade de digitação manual de código.

---

## 🕹️ Funções Existentes

O produto entregue pela IA opera como uma interface dinâmica que emula a experiência de um escritório de design de interiores, contendo as seguintes interações:

*   **Abertura Cinematográfica (Hero Section):** Banner principal com reprodução em tela cheia de vídeo ambientado e tipografia sob animações de entrada controladas por tempo (`riseIn`).
*   **Acompanhamento de Processo via Scroll:** Seção interativa em 3 etapas dividida em duas colunas, onde os blocos informativos mudam dinamicamente enquanto o vídeo descritivo do processo permanece fixado na tela (`position: sticky`).
*   **Portfólio Assimétrico:** Exibição de projetos autorais dispostos em um grid irregular composto por diferentes proporções visuais e efeitos fluidos de aproximação (`scale`) e saturação ao passar o mouse.
*   **Hairline de Progresso:** Um indicador minimalista dourado no topo da página que mapeia e exibe visualmente o avanço da leitura do usuário à medida que a página sofre rolagem.
*   **Menu Mobile e Navegação Responsiva:** Estrutura adaptável para dispositivos menores com botão de menu e fechamento automático ao clicar em links.
*   **Validação do Formulário de Contato:** Campos com feedback visual e validação assíncrona simulada para envio de proposta.

---

## 💻 Estrutura Atual do Projeto

A estrutura do repositório foi reorganizada para refletir uma abordagem mais profissional e modular, separando responsabilidades por pasta e arquivo:

```text
.
├── README.md
├── index.html
├── src/
│   ├── assets/
│   │   ├── interior-dark-video.mp4
│   │   ├── projeto-banheiro.png
│   │   ├── projeto-biblioteca.png
│   │   ├── projeto-cozinha.png
│   │   ├── projeto-quarto.png
│   │   ├── projeto-sala-2.png
│   │   ├── projeto-sala.png
│   │   ├── projeto-terracota.png
│   │   └── video-camadas.mp4
│   ├── css/
│   │   ├── about.css
│   │   ├── build.css
│   │   ├── footer.css
│   │   ├── form.css
│   │   ├── globals.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── manifest.css
│   │   ├── movie.css
│   │   ├── portfolio.css
│   │   └── testimonials.css
│   └── js/
│       ├── app.js
│       ├── form.js
│       ├── menuMobile.js
│       ├── movie.js
│       ├── scroll.js
│       └── startLoader.js
└──
```

### Organização por responsabilidade

*   **CSS modular:** cada seção recebe seus próprios estilos em arquivos separados, mantendo o design system centralizado em `globals.css`.
*   **JavaScript em módulos:** o fluxo da página foi quebrado em pequenos módulos para carregador, menu, rolagem, vídeos e formulário.
*   **Assets isolados:** imagens e vídeos ficam em `src/assets`, mantendo o projeto limpo e escalável.

---

## 🛠️ Stacks Utilizadas

*   **HTML5:** Estruturação semântica da aplicação.
*   **CSS3 Avançado:** Estilização baseada em CSS Grid, Flexbox, posicionamento adesivo (`sticky`), variáveis nativas e consultas de mídia responsivas.
*   **JavaScript (Vanilla JS em módulos):** Lógica nativa para controle de progresso, navegação, carregamento e interações de vídeo e formulário.
*   **IA & GitHub Skills Integration:** Geração automatizada via prompts a partir do briefing da cliente, utilizando as habilidades de automação *taste-skill*, *minimalist-skill* e *soft-skill*.

---

## ▶️ Como Rodar Localmente

Como é um projeto estático, não é necessário instalar dependências nem configurar build tools.

### Opção 1: abrir direto no navegador

1. Acesse a pasta do projeto.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. A página será carregada diretamente.

### Opção 2: com VS Code / Live Server

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

---

## 🎯 Foco no Projeto

O propósito central deste repositório é servir como base de estudo prático para a **modularização e organização estrutural de código**.

Partindo da proposta original gerada por Inteligência Artificial sob a curadoria da mentoria, este projeto adota como diretriz técnica a separação rígida de escopos, isolando HTML, CSS e JavaScript em seus respectivos arquivos e pastas. O objetivo principal desta reestruturação é exercitar boas práticas de arquitetura de pastas e otimização de projetos no ecossistema front-end, garantindo a fidelidade absoluta ao design visual, às seções e à lógica gerada na solução original.

Além disso, a refatoração mantém a essência da proposta original, mas com uma estrutura mais legível, reutilizável e fácil de evoluir conforme o projeto cresce.

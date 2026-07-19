# 🏛️ Aura Design — Design de Interiores

Landing page de alto padrão e experiência imersiva desenvolvida para o escritório fictício boutique de arquitetura **Studio Aura**, liderado pela arquiteta fictícia Marina Vasconcelos. 

> ⚠️ **Nota de Autoria e Contexto:** O código contido na versão inicial deste repositório **não foi escrito por mim**. Ele é uma cópia exata do código gerado inteiramente por Inteligência Artificial durante uma aula prática dos mentores da escola **Dev em Dobro** no curso **DevQuest**. O objetivo central do exercício foi demonstrar como orquestrar prompts e *GitHub Skills* para solucionar o problema real de um cliente, gerando uma aplicação funcional sem a necessidade de digitação manual de código.

---

## 🕹️ Funções Existentes

O produto entregue pela IA opera como uma interface dinâmica que emula a experiência de um hotel boutique, contendo as seguintes interações:

*   **Abertura Cinematográfica (Hero Section):** Banner principal com reprodução em tela cheia de vídeo ambientado e tipografia sob animações de entrada controladas por tempo (`riseIn`).
*   **Acompanhamento de Processo via Scroll:** Seção interativa em 3 etapas dividida em duas colunas, onde os blocos informativos mudam dinamicamente enquanto o vídeo descritivo do processo permanece fixado na tela (`position: sticky`).
*   **Portfólio Assimétrico:** Exibição de projetos autorais dispostos em um grid irregular composto por diferentes proporções visuais e efeitos fluidos de aproximação (`scale`) e saturação ao passar o mouse.
*   **Hairline de Progresso:** Um indicador minimalista dourado no topo da página que mapeia e exibe visualmente o avanço da leitura do usuário à medida que a página sofre rolagem.

---

## 💻 Recursos de Código

A estrutura gerada pela IA apresenta soluções cliente unificadas em um único arquivo:

*   **Design System Centralizado:** Todos os tokens visuais estão concentrados em variáveis CSS nativas (`:root`), abrangendo paleta de cores restrita, transições cúbicas personalizadas (`cubic-bezier`) e dimensionamento fluido via função `clamp()`.
*   **Otimização de Textura:** Inclusão de uma camada fixa de granulação digital executada via SVG inline em modo de mesclagem (`mix-blend-mode: overlay`), configurada com isolamento de eventos (`pointer-events: none`).
*   **Orquestração via Data Attributes:** Atributos customizados (`data-scrolled`, `data-done`) aplicados diretamente à estrutura DOM para controlar o comportamento do cabeçalho flutuante e o encerramento do carregador de página nativo.

---

## 🛠️ Stacks Utilizadas

*   **HTML5:** Estruturação semântica da aplicação.
*   **CSS3 Avançado (Inline):** Estilização baseada em CSS Grid, Flexbox, posicionamento adesivo (`sticky`), variáveis nativas e consultas de mídia responsivas.
*   **JavaScript (Vanilla JS):** Lógica nativa embutida para controle de progresso, navegação e ciclos do carregador da interface.
*   **IA & GitHub Skills Integration:** Geração automatizada via prompts a partir do briefing da cliente, utilizando as habilidades de automação *taste-skill*, *minimalist-skill* e *soft-skill*.

---

## 🎯 Foco no Projeto

O propósito central deste repositório é servir como base de estudo prático para a **modularização e organização estrutural de código**. 

Partindo da proposta original gerado por Inteligência Artificial sob a curadoria da mentoria, este projeto adota como diretriz técnica a separação rígida de escopos, isolando HTML, CSS e JavaScript em seus respectivos arquivos e pastas. O objetivo principal desta reestruturação é exercitar boas práticas de arquitetura de pastas e otimização de projetos no ecossistema front-end, garantindo a fidelidade absoluta ao design visual, às seções e à lógica gerada na solução original.

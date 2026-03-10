# DOPPIO Arquitetura - Site Institucional

## 🎯 Sobre o Projeto

Site profissional para DOPPIO Arquitetura criado com foco em performance, design sofisticado e conversão de leads.

## 📦 Estrutura do Projeto

```
doppio-site/
├── index.html          # Página principal
├── styles/
│   └── main.css       # Estilos completos
├── scripts/
│   └── main.js        # Interatividade
├── public/
│   ├── images/
│   │   ├── logos/     # Logos DOPPIO
│   │   ├── equipe/    # Fotos Letycia + Nertan
│   │   ├── processo/  # Fotos de materiais
│   │   └── projetos/  # Fotos dos projetos
│   └── videos/
│       └── hero.mp4   # Vídeo do hero
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Extraia o arquivo `doppio-site-v1.tar.gz`
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Pronto! O site está funcionando

### Opção 2: Hospedar (Recomendado)

#### Vercel (Grátis e Recomendado)
1. Crie uma conta em https://vercel.com
2. Instale o Vercel CLI: `npm i -g vercel`
3. Na pasta do projeto, execute: `vercel`
4. Siga as instruções
5. Seu site estará no ar em minutos!
6. Para conectar seu domínio doppioarq.com.br:
   - No painel Vercel, vá em Settings > Domains
   - Adicione: doppioarq.com.br
   - Configure os DNS no registro.br conforme instruções

#### Netlify (Alternativa Grátis)
1. Acesse https://netlify.com
2. Arraste a pasta do site para o Netlify Drop
3. Pronto! Site no ar
4. Para conectar domínio: Settings > Domain management

#### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Site estará em: https://doppioarqui.github.io/site

## 🎨 Paleta de Cores

```css
--doppio-terracota: #AA5641  /* Cor accent do logo */
--doppio-black: #3C3C3C      /* Preto sofisticado */
--doppio-white: #FFFFFF       /* Branco puro */
--doppio-beige: #F5F5DC       /* Bege quente */
--doppio-wood: #8B6F47        /* Tom madeira */
```

## 📱 Funcionalidades

✅ Hero com vídeo em slow motion
✅ Seção Sobre com fotos profissionais
✅ Portfólio com 3 projetos
✅ Formulário de contato funcional
✅ Totalmente responsivo (mobile-first)
✅ Animações suaves
✅ SEO otimizado
✅ Performance otimizada

## 🔧 Personalizações

### Adicionar Mais Projetos
Edite o arquivo `index.html`, seção `<section class="portfolio">`:
```html
<article class="portfolio__item">
    <div class="portfolio__image">
        <img src="public/images/projetos/novo-projeto/capa.jpg" alt="Nome do Projeto">
        ...
    </div>
</article>
```

### Conectar Formulário de Contato
O formulário atualmente usa `mailto`. Para integrar com serviços:

**Opção 1: Formspree (Grátis)**
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

**Opção 2: EmailJS**
Adicione o script e configure conforme documentação

## 📊 Próximos Passos

1. **Hospedar o site** (Vercel recomendado)
2. **Conectar domínio** doppioarq.com.br
3. **Configurar Google Analytics**
4. **Adicionar mais projetos** conforme forem ficando prontos
5. **Implementar Portal do Cliente** (fase 2)

## 🆘 Suporte

Qualquer dúvida, me chama! Estou aqui para ajudar.

## 📄 Licença

© 2026 DOPPIO Arquitetura. Todos os direitos reservados.

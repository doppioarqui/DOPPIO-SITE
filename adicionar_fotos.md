# 📸 Como Adicionar Fotos dos Projetos

## 🎯 Projetos que precisam de fotos:

### **Projeto 2: Escritório JV** (51m²)
### **Projeto 3: Apartamento F+L** (165m²)

---

## 📂 Passo a Passo:

### **1. Organize as Fotos**

Crie pastas para cada projeto:

```
public/images/projetos/
├── apartamento-tj/      ✅ JÁ TEM
├── escritorio-jv/       ⚠️ CRIAR
└── apartamento-fl/      ⚠️ CRIAR
```

### **2. Renomeie as Fotos**

**Para Escritório JV:**
```
escritorio-jv/
├── 01-capa.jpg         ← Foto principal (será a capa)
├── 02-recepcao.jpg
├── 03-sala-reuniao.jpg
├── 04-detalhes.jpg
└── ... (quantas quiser)
```

**Para Apartamento F+L:**
```
apartamento-fl/
├── 01-capa.jpg         ← Foto principal (será a capa)
├── 02-living.jpg
├── 03-cozinha.jpg
├── 04-quarto.jpg
└── ... (quantas quiser)
```

---

## 🔧 **3. Editar o HTML**

Abra o arquivo `index.html` e substitua:

### **ESCRITÓRIO JV (linha ~242):**

**DE:**
```html
<article class="portfolio__item portfolio__item--placeholder">
    <div class="portfolio__image portfolio__image--coming-soon">
        <div class="portfolio__placeholder">
            <!-- SVG placeholder -->
        </div>
```

**PARA:**
```html
<article class="portfolio__item">
    <div class="portfolio__image">
        <img src="public/images/projetos/escritorio-jv/01-capa.jpg" alt="Escritório JV">
```

---

### **APARTAMENTO F+L (linha ~258):**

**DE:**
```html
<article class="portfolio__item portfolio__item--placeholder">
    <div class="portfolio__image portfolio__image--coming-soon">
        <div class="portfolio__placeholder">
            <!-- SVG placeholder -->
        </div>
```

**PARA:**
```html
<article class="portfolio__item">
    <div class="portfolio__image">
        <img src="public/images/projetos/apartamento-fl/01-capa.jpg" alt="Apartamento F+L">
```

---

## ✅ **Exemplo Completo (copie e cole):**

### **Para Escritório JV:**
```html
<!-- Projeto 2 - Escritório JV -->
<article class="portfolio__item">
    <div class="portfolio__image">
        <img src="public/images/projetos/escritorio-jv/01-capa.jpg" alt="Escritório JV">
        <div class="portfolio__overlay">
            <h3 class="portfolio__title">Escritório JV</h3>
            <p class="portfolio__meta">Teresina, PI • 51m² • 2024</p>
            <a href="#" class="btn btn--primary btn--small">Ver projeto completo</a>
        </div>
    </div>
    <div class="portfolio__info">
        <h3>Escritório JV</h3>
        <p>Escritório de advocacia que equilibra profissionalismo e acolhimento.</p>
    </div>
</article>
```

### **Para Apartamento F+L:**
```html
<!-- Projeto 3 - Apartamento F+L -->
<article class="portfolio__item">
    <div class="portfolio__image">
        <img src="public/images/projetos/apartamento-fl/01-capa.jpg" alt="Apartamento F+L">
        <div class="portfolio__overlay">
            <h3 class="portfolio__title">Apartamento F+L</h3>
            <p class="portfolio__meta">Teresina, PI • 165m² • 2025-2026</p>
            <a href="#" class="btn btn--primary btn--small">Ver projeto completo</a>
        </div>
    </div>
    <div class="portfolio__info">
        <h3>Apartamento F+L</h3>
        <p>Projeto sensível que honrou a história do casal com mais funcionalidade e conforto.</p>
    </div>
</article>
```

---

## 💡 **Dicas:**

### **Otimize as Imagens Antes:**
1. Redimensione para máximo **1920px de largura**
2. Use formato **JPG** (melhor para fotos)
3. Qualidade **80-85%** (equilíbrio qualidade/tamanho)
4. Use ferramentas como:
   - [TinyPNG](https://tinypng.com) (online, grátis)
   - [Squoosh](https://squoosh.app) (Google, grátis)

### **Quantidade Ideal:**
- Mínimo: **1 foto** (capa)
- Recomendado: **4-6 fotos** por projeto
- Máximo: quanto quiser!

---

## 🎯 **Status Atual:**

| Projeto | Status | Fotos |
|---------|--------|-------|
| Apartamento T+J | ✅ Completo | 6 fotos |
| Escritório JV | ⚠️ Placeholder | 0 fotos |
| Apartamento F+L | ⚠️ Placeholder | 0 fotos |

---

## 📧 **Precisa de Ajuda?**

Se tiver dificuldade, é só me mandar as fotos que eu:
1. Organizo as pastas
2. Renomeio os arquivos
3. Atualizo o HTML
4. Te entrego tudo pronto!

**Enquanto isso, o site já está funcionando com placeholders bonitos!** ✨

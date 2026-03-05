# Criar site baseado em referência

Este é um site moderno construído com React, Vite e Tailwind CSS.

O projeto original está disponível em: https://www.figma.com/design/w2Vojj6WDgxejroDdWqzEY/Criar-site-baseado-em-refer%C3%AAncia

## 🚀 Colocando o site no ar

### Pré-requisitos:
- Node.js instalado ([Download aqui](https://nodejs.org))

### Passo 1: Instalar dependências
```bash
npm install
```

### Passo 2: Testar localmente
```bash
npm run dev
```
Acesse http://localhost:5173 no navegador para testar.

### Passo 3: Fazer o build
```bash
npm run build
```

### Passo 4: Subir para a internet (ESCOLHA UMA OPÇÃO)

#### **OPÇÃO A: Vercel (MAIS FÁCIL - Recomendado)**
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e escolha "Continue with GitHub"
3. No Vercel, clique em "Import Project" e selecione este repositório
4. Clique em "Deploy"
5. **Pronto! Seu site está no ar!** Vercel vai gerar uma URL automática

#### **OPÇÃO B: Netlify**
1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique em "New site from Git"
4. Selecione este repositório
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Clique em "Deploy"

#### **OPÇÃO C: GitHub Pages (Gratuito)**
1. Vá em Settings → Pages
2. Na seção "Build and deployment", escolha "GitHub Actions"
3. Seu site será publicado em `https://seu-usuario.github.io/seu-repositorio`

---

## 🔐 Proteção por Senha

O site está protegido por senha. Para alterá-la, edite o arquivo `src/Auth.tsx` e mude a constante `SENHA_CORRETA`.

Padrão: `seu-cliente-2026`

---

## 📝 Atribuições

Este site inclui componentes do [shadcn/ui](https://ui.shadcn.com/) ([MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md))

Este site inclui fotos do [Unsplash](https://unsplash.com) ([Unsplash License](https://unsplash.com/license))

---

## 🛠️ Desenvolvido com:
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- TypeScript

---

## 📞 Suporte
Se tiver dúvidas, entre em contato com o desenvolvedor.
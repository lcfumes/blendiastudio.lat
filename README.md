# BlendIA Studio - Site Estático

Site profissional estático para BlendIA Studio - Criação de sites em 24 horas por R$ 80.

## 🚀 Características

- HTML5, CSS3 e JavaScript puro
- 100% responsivo (mobile, tablet, desktop)
- SEO otimizado com dados estruturados
- Design moderno com animações suaves
- Timeline interativa
- Integração com Botpress para chat
- Sitemap e robots.txt inclusos

## 📁 Estrutura do Projeto

\`\`\`
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── blendialogo.png     # Logo da empresa
├── sitemap.xml         # Sitemap para SEO
└── robots.txt          # Configuração de crawlers
\`\`\`

## 🌐 Como Usar

### Hospedagem Simples

Basta fazer upload de todos os arquivos para qualquer servidor web ou serviço de hospedagem:

- **GitHub Pages**: Faça push para um repositório e ative GitHub Pages
- **Netlify**: Arraste e solte a pasta no Netlify
- **Vercel**: Conecte o repositório ou faça deploy manual
- **Qualquer hosting tradicional**: Via FTP/SFTP

### Desenvolvimento Local

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

\`\`\`bash
# Python
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
\`\`\`

Acesse em: `http://localhost:8000`

## 🎨 Personalização

### Cores

As cores principais estão definidas em `styles.css` usando CSS variables:

\`\`\`css
:root {
  --color-dark-teal: #0a2e2e;
  --color-cyan: #06b6d4;
  --color-whatsapp: #25d366;
}
\`\`\`

### Conteúdo

Edite o arquivo `index.html` para modificar textos, imagens e estrutura.

### Scripts

O arquivo `script.js` contém as animações e interações do site.

## 📞 Integrações

### Botpress Chat

O chat está integrado com Botpress. Para configurar:

1. Os scripts já estão inclusos no `index.html`
2. O botão de chat possui o ID `bp-toggle-chat`
3. Personalize as configurações no painel do Botpress

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

## 🔍 SEO

- Meta tags configuradas
- Dados estruturados JSON-LD para Google
- Sitemap.xml incluído
- Robots.txt configurado
- Descrições e alt texts otimizados

## 📦 Repositório

GitHub: [blendiastudio-site-marcas](https://github.com/seu-usuario/blendiastudio-site-marcas)

## 📄 Licença

© 2025 BlendIA Studio. Todos os direitos reservados.

## 🛠️ Suporte

Para dúvidas ou modificações, entre em contato através do site.

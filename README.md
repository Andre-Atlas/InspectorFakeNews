# Saúde em foco — projeto acadêmico

Protótipo independente para apresentação na UnB, sem vínculo oficial com o SUS. Layout provisório; não é uma reprodução fiel da página original.

Abra `index.html` diretamente no navegador. Não há dependências externas ou instalação necessária.

Para servir a página localmente, execute na raiz do projeto:

```bash
python3 -m http.server 8001 --bind 127.0.0.1
```

Acesse http://127.0.0.1:8001/. Se esse servidor já estiver aberto nesta pasta, basta acessar o endereço, sem iniciar outro servidor.

O chatbot usa respostas predefinidas locais. Não usa IA, não consulta fontes em tempo real e não avalia alegações médicas. Nenhuma mensagem é enviada ou persistida. Recarregar ou usar “Limpar” remove a conversa.

Arquivos: `index.html` (estrutura), `styles.css` (visual responsivo), `app.js` (conversa demonstrativa).

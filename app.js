const messages = document.querySelector('#messages');
const input = document.querySelector('#question');
const welcome = 'Olá! Sou um assistente demonstrativo do projeto acadêmico. Posso explicar como analisar uma mensagem e procurar fontes. Não verifico notícias em tempo real. Por onde vamos começar?';

function addMessage(text, user = false) {
  const bubble = document.createElement('div');
  bubble.className = user ? 'bubble user' : 'bubble';
  const author = document.createElement('strong');
  author.textContent = user ? 'Você' : 'Assistente · demonstração';
  bubble.append(author, document.createTextNode(text));
  messages.append(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function reply(question) {
  const text = question.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (/fonte|buscar|referencia/.test(text)) return 'Para começar, procure publicações do Ministério da Saúde, da Fiocruz e da Organização Mundial da Saúde. Confira se a página realmente pertence à instituição, observe a data e procure a publicação original. Nesta demonstração, não consultei essas fontes nem avaliei uma notícia específica.';
  if (/suspeita|recebi|mensagem|whatsapp/.test(text)) return 'Antes de repassar a mensagem, procure quem a escreveu, quando foi publicada e qual é a evidência apresentada. Expressões como “compartilhe antes que apaguem” são motivo para redobrar a atenção, mas não provam que o conteúdo é falso. Este protótipo não consegue verificar a mensagem por você.';
  if (/identificar|fake|noticia|desinformacao/.test(text)) return 'Use este roteiro de leitura: 1. Identifique a autoria. 2. Confira a data e o contexto. 3. Procure a fonte original. 4. Compare com outras fontes confiáveis. 5. Se não conseguir confirmar, espere antes de compartilhar. Aparência profissional e muitas curtidas não comprovam uma informação.';
  return 'Esta versão usa respostas predefinidas e não consegue avaliar essa afirmação ou dar orientação médica. Posso mostrar como identificar sinais de desinformação, procurar fontes ou analisar uma mensagem suspeita. Escolha uma das perguntas sugeridas para explorar a demonstração.';
}

function send(text) {
  const question = text.trim();
  if (!question) return;
  addMessage(question, true);
  addMessage(reply(question));
  input.value = '';
}

document.querySelector('#chat-form').addEventListener('submit', event => {
  event.preventDefault();
  send(input.value);
  input.focus();
});
document.querySelectorAll('.suggestions button').forEach(button => {
  button.addEventListener('click', () => send(button.textContent));
});
document.querySelector('#clear').addEventListener('click', () => {
  messages.replaceChildren();
  input.value = '';
  addMessage(welcome);
  input.focus();
});
addMessage(welcome);

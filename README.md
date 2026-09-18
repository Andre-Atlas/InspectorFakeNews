# InspectorFakeNews — projeto acadêmico

Chatbot educativo sobre desinformação em saúde. Interface independente, sem vínculo oficial com o SUS. Desenvolvido para apresentação na Eldorado.

## Executar localmente

Requer Python 3.10+ e [Ollama](https://ollama.com/download). Sem pacotes pip, chave de API ou serviços pagos. O processamento usa os recursos do computador.

1. Inicie o Ollama pelo aplicativo ou, em um terminal, com `ollama serve`.
2. Se o modelo ainda não estiver instalado, execute `ollama pull qwen2.5:7b` (download de aproximadamente 4,7 GB, uma única vez).
3. Na pasta do projeto, execute:

```bash
python3 server.py
```

4. Abra **http://127.0.0.1:8002**.

Use o servidor `server.py`, não `python3 -m http.server` nem o Live Server: eles não executam a API do chatbot. Não é necessário encerrar o servidor antigo da porta 8001.

Outra porta: `python3 server.py --port 8003`.
Outro modelo local instalado: `OLLAMA_MODEL=nome:tag python3 server.py`.

## Organização

- `index.html`: página e chat.
- `styles.css`: aparência responsiva.
- `app.js`: conversa, histórico, espera e tratamento de falhas.
- `server.py`: arquivos públicos e API local que conversa com o Ollama.

A conversa existe apenas em memória. O navegador envia as últimas seis trocas e a nova pergunta ao servidor local. Limpar ou recarregar reinicia o histórico. Limpar cancela a espera no navegador; o Ollama pode continuar a geração já iniciada até concluir. O servidor não salva as mensagens. Os logs HTTP registram rotas e códigos, não o corpo das conversas.

## Limites desta etapa

O modelo gera respostas, mas não consulta a internet nem uma base documental. Não se deve apresentar suas respostas como checagem factual ou orientação médica. O próximo passo para checagens com evidências é integrar fontes verificáveis e exibir as referências realmente consultadas.

## Referências técnicas

- [API de conversa do Ollama](https://docs.ollama.com/api/chat)
- [Modelo Qwen2.5](https://ollama.com/library/qwen2.5)

# 👤 Autor

**Guilherme Barros**

<img src="https://github.com/dida0982.png" width="150" alt="Foto de perfil">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilherme-barros-6a0369209/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dida0982)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/guilherme_barros_jr/)

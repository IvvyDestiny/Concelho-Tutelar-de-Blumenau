[Utilizador submete o Relato]
│
▼
┌────────────────────────────────────────────────────────┐
│  Módulo SDK Frontend (Executando no index.html)        │
│  - Captura texto bruto, bairro e ponto de referência.  │
│  - Despacha via HTTPS POST acompanhado do API_TOKEN.   │
└─────────────────────────────┬──────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────┐
│  API Gateway & Validador Multi-Tenant (SaaS Core)       │
│  - Identifica o município de origem.                   │
│  - Consulta na Dashboard quais Flags estão ligadas.    │
└─────────────────────────────┬──────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────┐
│  Motor Lógico de Triagem (Análise Textual / PLN)       │
│  - Aplica normalização (lowercase + extração de acentos)│
│  - Varre o texto contra a Matriz de Bairros da Cidade  │
│  - Varre o texto contra o Léxico de Urgência           │
└─────────────────────────────┬──────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────┐
│  Gerador de Payload de Resposta                        │
│  - Assinala a severidade (BAIXA, MÉDIA, CRÍTICA)      │
│  - Define os e-mails de destino exatos daquela região   │
│  - Injeta a mensagem de instrução dinâmica para a tela │
└─────────────────────────────┬──────────────────────────┘
│
▼
[Resposta devolvida ao Navegador]
│
├─► SE SEVERIDADE == CRÍTICA & FLAG_190 == ATIVA:
│   Exibe Alerta Pop-up Bloqueante: "Ligue 190 Imediatamente!"
│   Oferece opção opcional de registo de B.O. Virtual.
│
└─► SE FORMULÁRIO CONFIGURADO PARA PROSSEGUIR:
Prepara e executa o protocolo 'mailto:' estruturado com o
Cabeçalho de Inteligência Técnica integrado para o CT.
```

---

## 📧 Especificação Textual da Saída de Alta Legibilidade (Para o CT)

Independentemente do município que utiliza o SaaS, o motor reestruturará os dados brutos inseridos para entregar aos Conselheiros Tutelares uma mensagem limpa, padronizada e com prioridade visual evidente no assunto:

```text
ASSUNTO: [TRIAGEM AUTOMÁTICA SAAS - SEVERIDADE: CRÍTICA] Alerta de Violação - Bairro: Velha Central

=== RELATÓRIO DE INTELIGÊNCIA GEOGRÁFICA E RISCO ===
ID DO MUNICÍPIO: sc_blumenau
CONSELHO COMPETENTE: 2º Conselho Tutelar de Blumenau (Região Oeste)
ACIONAMENTO POLICIAL RECOMENDADO: SIM (Presença de gatilhos de violência ativa)
ALERTA EXIBIDO NA TELA DO USUÁRIO: SIM (Direcionamento ao telefone 190 emitido)

=== DADOS GEOGRÁFICOS DE TRIAGEM ===
• Bairro Identificado no Texto: Velha Central
• Ponto de Referência Cadastrado: Próximo à Cooper da Velha
• Identificação do Denunciante: Anónimo (Preservação de Sigilo Ativada)

=== RELATO ORIGINAL PROCESSADO PELO MOTOR SAAS ===
"O vizinho da casa ao lado está gritando muito e quebrando as coisas dentro de casa agora. Dá para ouvir o choro das crianças no quarto de trás e a mãe pedindo para ele parar. Ele está muito alterado e isso acontece quase todo fim de semana na Rua X, perto da Cooper da Velha Central."

======================================================================
[Nota de Governança]: Este documento foi sintetizado e auditado estruturalmente pelo motor de triagem do ecossistema SaaS fornecido pela DestinyServicesTI.

```
## 🛠️ Tecnologias Sugeridas para Implementação do Back-End
 * **Runtime/Linguagem:** Node.js (TypeScript) ou Python (FastAPI), visando excelente velocidade no processamento de strings e manipulação de expressões regulares (Regex).
 * **Segurança e Cache:** Redis para armazenamento ultrarrápido das configurações das prefeituras (Feature Flags de bairros e e-mails), reduzindo o tempo de resposta das consultas da API a milissegundos.
 * **Hospedagem API:** Serverless (AWS Lambda ou Google Cloud Functions) garantindo custo zero enquanto o portal não recebe denúncias e escalabilidade automática infinita em picos de acessos.
Este planeamento foi arquitetado de forma abstrata e puramente textual, garantindo a flexibilidade necessária para que a **DestinyServicesTI** possa implementar o sistema de acordo com as necessidades comerciais futuras.
"""

# Desafio Técnico - FlowPay
Este projeto é parte do desafio técnico para a vaga de Desenvolvedor(a) na Ubots. O objetivo principal é implementar um sistema de distribuição de solicitações para os atendentes da central de relacionamento da FlowPay, utilizando JavaScript.

# Evidência
### Obs: Design responsivo

Vídeo: https://jam.dev/c/6780b2fd-0f3d-4aaf-8c21-80f1fd7388c6

Desktop:
![image](https://github.com/user-attachments/assets/b1534f2a-79a3-4a0c-ae69-dc77a0631a6d)

Teste o projeto em diferentes resoluções. Disponível também em tablet e mobile

# Missão
Sua missão é desenvolver uma aplicação que distribua as solicitações dos clientes para os times corretos, de acordo com o tipo de assunto informado. As solicitações de "Problemas com cartão" devem ser direcionadas para o time "Cartões", as de "contratação de empréstimo" para o time "Empréstimos", e os demais assuntos para o time "Outros Assuntos".

# Contexto
A FlowPay, uma fintech, está estruturando sua central de relacionamento para atender a solicitações dos clientes. O sistema de distribuição deve garantir que cada atendente atenda no máximo 3 solicitações simultaneamente, enfileirando solicitações quando todos os atendentes de um time estiverem ocupados.

# Requisitos Técnicos
- Linguagem: JavaScript
- Distribuição de Solicitações: As solicitações devem ser distribuídas de acordo com o assunto para os times corretos:
  - Problemas com cartão → Time "Cartões"
  - Contratação de empréstimo → Time "Empréstimos"
  - Outros assuntos → Time "Outros Assuntos"
- Limite de Atendentes: Cada atendente pode atender até 3 solicitações simultaneamente.
- Fila de Solicitações: Se todos os atendentes de um time estiverem ocupados, as solicitações devem ser enfileiradas e distribuídas assim que um atendente estiver disponível.

# Como Executar

Clone o repositório:

`git clone https://github.com/sauloveigr/ubots-flowpay.git`

Instale as dependências em ambos projetos

`npm install`

Rode backend e frontend
- server: `npm run start`
- client: `npm run dev`

# Autor
Desenvolvido por Saulo Veiga

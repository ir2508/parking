# 🚗 Parking System
Sistema de gerenciamento de estacionamento desenvolvido com React e Vite. O foco do projeto é o controle de fluxo de veículos utilizando Recoil para um estado global performático e Axios para integração com serviços de dados.

🛠️ Stack Tecnológica
Runtime: Node.js

Build Tool: Vite (Garante um ambiente de desenvolvimento ultra-rápido)

Library: React

Estado Global: Recoil

HTTP Client: Axios

📂 Estrutura de Pastas
Plaintext

parking/
├── src/
│   ├── components/  # Componentes visuais
│   ├── services/    # Configurações do Axios e chamadas de API
│   ├── state/       # Atoms e seletores do Recoil
│   ├── assets/      # Imagens e estilos globais
│   └── App.jsx      # Ponto de entrada da aplicação
├── public/          # Arquivos estáticos
└── index.html       # Template base
🚀 Como Rodar o Projeto
Clone o repositório:

Bash

git clone https://github.com/ir2508/parking.git
cd parking
Instale as dependências:

Bash

npm install
Inicie o ambiente de desenvolvimento:

Bash

npm run dev
Build para produção:

Bash

npm run build
🔧 Configuração de Estado e API
A aplicação utiliza uma arquitetura desacoplada:

Axios: Configurado em src/services/api.js para padronizar as requisições.

Recoil: Os dados de veículos são gerenciados pelo vehicleListState, permitindo que múltiplos componentes acessem a mesma lista sem "prop drilling".

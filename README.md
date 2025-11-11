

# Projeto QuizMaster – React + Open Trivia API
Projeto desenvolvido pelo grupo 6 da turma 29 para disciplina de React - Professor Felipe Menegueli.

Este projeto é um quiz interativo desenvolvido em **React**, inspirado no visual nostálgico do **Game Boy do Mario**. Ele faz uso da API pública **Open Trivia DB** para trazer perguntas dinâmicas, além de uma API própria de usuários (MockAPI) e integração com uma API de tradução.

##  Algumas Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **React.js** | Biblioteca principal da aplicação |
| **React Router DOM** | Gerenciamento de rotas |
| **Open Trivia DB API** | Fonte das perguntas do quiz |
| **MockAPI** | API criada para gerenciar usuários e perfis |
| **Hooks do React** | useState, useEffect, useContext |
| **Hooks personalizados** | use-alph, use-favorites-contexts |
| **API de Tradução** | Utilizada para traduzir perguntas e respostas |

---

##  Funcionalidades Principais

- **Home**: Tela inicial com navegação para as demais áreas.
- **Categorias**: Escolha o tema do quiz.
- **Quiz**: Exibição das perguntas com opções de resposta.
- **Favoritos**: Página onde o usuário salva perguntas marcadas como favoritas.
- **Perfil**: Edição de foto, nome e demais informações do usuário, como email logado e quantidade de pontos.
- **Ranking**:  Exibição da posição do usuario com relação aos outro usurios na MockApi e seus ppntos.
- **Login / Cadastro**: Autenticação via API MockAPI.
- **Página de Erro (HotPath)**: Caso o usuário acesse rotas inexistentes.

---

## 🛠 Estrutura do Projeto

```
src/
 ├── assets/            # Imagens, ícones e outros arquivos estáticos
 ├── components/        # Componentes reutilizáveis (ex: Input, Modal, Sidebar)
 ├── hooks/             # Hooks personalizados
 ├── pages/             # Páginas principais da aplicação (Home, Login, Quiz, etc.)
 ├── routes/            # Definições e configurações de rotas
 ├── services/          # Conexão com APIs externas (ex: Api.jsx)
 ├── App.jsx            # Configuração principal da aplicação e rotas
 ├── main.jsx           # Ponto de entrada da aplicação React
 └── global.css         # Estilos globais da aplicação

```

---

## 🎨 Design

O design foi inspirado no **Game Boy**, com:
- Paleta retrô
- Elementos que remetem ao universo do **Mario**
- Interface simples e intuitiva

---

## 🔗 APIs Utilizadas

| API | Link | Uso |
|-----|------|-----|
| Open Trivia DB | https://opentdb.com/api.php | Perguntas do quiz |
| MockAPI | https://68dda415d7b591b4b78cfdb5.mockapi.io/users| Gerenciamento de usuários |
| API de Tradução | https://api.mymemory.translated.net/| Tradução dos textos do quiz |

---

## 👥 Equipe do Projeto

*Isabella Machado*
*Thais Nubia Turl*
*José Arthur Freitas*
*Pedro Ribeiro*
*Hyago Guimarães*
---

## 📦 Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/thaisturl-wq/React-trabalho.git

# Acesse o diretório
cd nome-do-projeto

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

---


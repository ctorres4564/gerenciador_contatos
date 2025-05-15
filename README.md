# 📇 Gerenciador de Contatos com HTML, CSS e JavaScript

Este é um projeto simples e funcional de um **gerenciador de contatos** que permite:

✅ Adicionar nome, email, telefone e imagem de um contato  
✅ Escolher a imagem do próprio dispositivo ou colar uma URL  
✅ Visualizar todos os contatos salvos na tela  
✅ Buscar contatos por nome ou email em tempo real  
✅ Armazenar os dados no `localStorage`, mantendo as informações salvas mesmo após fechar a página  
✅ Excluir qualquer contato da lista  

---

## 🚀 Como usar

### 1. Faça o download dos arquivos:

- `index.html`
- `style.css`
- `script.js`

Coloque todos na mesma pasta e abra o arquivo `index.html` no navegador.

---

## 📁 Estrutura dos arquivos

```
/pasta-do-projeto
│
├── index_com_upload.html     → HTML da interface
├── style.css                 → Estilos visuais
└── script_com_upload.js      → Funcionalidades JavaScript
```

---

## 🧠 Funcionalidades detalhadas

### ✏️ Adicionar Contato

- Preencha nome, email e telefone.
- Adicione uma imagem do computador (`input type="file"`) **ou** cole uma URL de imagem.
- Clique em **"Adicionar Contato"**.

### 🖼️ Imagem

- Caso nenhum campo de imagem seja preenchido, uma imagem padrão será usada.
- Imagens locais são exibidas com `URL.createObjectURL()` e não são salvas permanentemente após fechar o navegador.

### 🔍 Busca de Contatos

- O campo “Buscar contato...” filtra a lista enquanto você digita.
- A busca é por **nome ou email** (não diferencia maiúsculas/minúsculas).

### 🗑️ Excluir Contato

- Clique no botão de lixeira para remover um contato da lista e do `localStorage`.

---

## 💾 Como funciona o armazenamento

Todos os contatos são armazenados em `localStorage` usando a chave `"contacts"`.  
Eles são carregados automaticamente ao abrir a página.

---

## 🧪 Tecnologias usadas

- HTML5
- CSS3
- JavaScript puro (Vanilla JS)
- Font Awesome (ícones)

---

## 📌 Observações

- As imagens locais funcionam apenas durante a sessão do navegador. Se você recarregar, a URL gerada pelo `URL.createObjectURL()` será inválida.
- Para persistência real de imagens, seria necessário backend com upload.

---

## 📷 Exemplo visual

![Exemplo de uso](https://www.w3schools.com/howto/img_avatar.png)

---

## 👨‍💻 Autor

Desenvolvido com fins educativos por [Seu Nome Aqui].


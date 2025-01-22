const express = require('express');
const path = require('path');
const app = express();

// 1. Serve arquivos estáticos da pasta "public"
app.use(express.static('public'));

// 2. Quando acessarem "/", envia o "index.html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Porta para escutar (Render usa process.env.PORT, local usa 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require('express');
const path = require('path');
const app = express();

// Supondo que sua pasta "público" seja onde estão os arquivos
// (ideal renomear para "public" sem acento, mas funciona com acento se você tiver cuidado)
app.use(express.static('público'));

// Rota principal apontando pro index.html (ou índice.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'público', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

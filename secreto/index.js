const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const miVariable = process.env.valor;

app.get('/secreto', (req, res) => {
  res.json({
    message: `Secret: ${miVariable}`
  });
});

app.listen(port, () => {
  console.log(`🚀 Servidor en puerto ${port}`);
});

const express = require('express');

const app  = express();
const port = process.env.PORT || 3000;

app.get('/secreto', (req, res) => {
    res.json({ message: 'Secret: $valor' });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
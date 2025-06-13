
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/execute', (req, res) => {
  const { command } = req.body;
  console.log('✅ Comando ricevuto da Nexa:', command);

  let response = 'Comando eseguito con successo: ' + command;
  res.json({ status: 'success', message: response });
});

app.get('/', (req, res) => {
  res.send('Nexa API is running.');
});

app.listen(port, () => {
  console.log(`🚀 Nexa API listening on port ${port}`);
});

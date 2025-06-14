const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // ✅ ABILITA CORS
app.use(express.json());

app.post('/api/execute', (req, res) => {
  const { command } = req.body;
  console.log('✅ Comando ricevuto da Nexa:', command);
  res.json({ status: 'success', message: 'Comando eseguito con successo: ' + command });
});

app.get('/', (req, res) => {
  res.send('Nexa API is running.');
});

app.listen(port, () => {
  console.log(`🚀 Nexa API listening on port ${port}`);
});

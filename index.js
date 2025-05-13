const express = require('express');
const registrarLog = require('./script');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota para registrar um log
app.post('/logs', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: 'Nome do aluno é obrigatório.' });
    }

    const id = registrarLog(nome);
    res.status(201).json({ mensagem: 'Log registrado com sucesso.', id });
});

// Rota para consultar log por ID
app.get('/logs/:id', (req, res) => {
    const id = req.params.id;
    const logs = fs.readFileSync('logs.txt', 'utf8').split('\n');

    const logEncontrado = logs.find(log => log.startsWith(id));
    
    if (logEncontrado) {
        return res.status(200).json({ log: logEncontrado });
    } else {
        return res.status(404).json({ erro: 'Log não encontrado.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

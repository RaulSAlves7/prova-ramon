const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function registrarLog(nomeAluno) {
    const id = uuidv4();
    const dataHora = new Date().toISOString().replace('T', ' ').slice(0, 19);
    const mensagem = `${id} - ${dataHora} - ${nomeAluno}\n`;

    fs.appendFileSync('logs.txt', mensagem, 'utf8');
    return id;
}

// Teste opcional:
const idGerado = registrarLog("João da Silva");
console.log("ID gerado:", idGerado);

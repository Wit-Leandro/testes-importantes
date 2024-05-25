const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // Recebe os dados do pedido
    });
    req.on('end', () => {
      console.log('Pedido recebido:', body); // Exibe os dados do pedido no console
      // Aqui você pode adicionar lógica para processar o pedido recebido
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Pedido recebido com sucesso.');
    });
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Método não permitido.');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost: `+ PORT);
});

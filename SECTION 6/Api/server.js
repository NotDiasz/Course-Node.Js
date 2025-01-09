const http = require('http');
const url = require('url');

// Cria o servidor HTTP
http.createServer((request, response) => {
   
    // Analisa a URL da requisição e extrai o caminho (pathname) e os parâmetros de consulta (query)
    const parsedURL = url.parse(request.url, true);
    const pathName = parsedURL.pathname;  // Extrai o caminho da URL
    const queryParams = parsedURL.query;  // Extrai os parâmetros de consulta da URL

    // Se a requisição for para o favicon, responde com código 404 e finaliza a requisição
    if (pathName === '/favicon.ico') {
        response.writeHead(404);  // Retorna um status 404
        response.end();  // Finaliza a resposta
        return;  // Impede o código de seguir para o próximo bloco
    }

    console.log(queryParams);  // Exibe os parâmetros de consulta no console

    // Se a requisição for do tipo POST
    if (request.method === 'POST') {
        response.write('Hello World Miguel');  // Envia a resposta "Hello World Miguel"
        response.end();  // Finaliza a resposta
    }   
    // Se a requisição for do tipo GET
    else if (request.method === 'GET') {
        response.write('Metodo GET Aplicado');  // Envia a resposta "Metodo GET Aplicado"
        response.end();  // Finaliza a resposta
    }

}).listen(9090, () => {
    console.log('Servidor rodando em http://localhost:9090');  // Exibe a mensagem quando o servidor está em funcionamento
});

// A função .listen faz o servidor "escutar" na porta 9090

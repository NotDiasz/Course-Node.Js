const http = require('http');
const url = require('url');
//chamei a funcao http e criei um server web
//request e a requisao e o response e a resposta que o server da pro cliente

http.createServer((request, response) => {
   
    const parsedURL = url.parse(request.url, true);
    const pathName = parsedURL.pathname
    const queryParams = parsedURL.query
    
    if (pathName === '/favicon.ico') {
        response.writeHead(404)
        response.end();
        return;
    }

    if (request.method === 'POST') {
        response.write('Hello World Miguel');
        response.end();
    }   else if (request.method === 'GET'){
        response.writeHead(200, {"content-type": 'text/plain; charset=utf-8'})
        response.write('Metodo GET Aplicado , Amo a Elo' + (Number(queryParams.num) + Number(queryParams.num2)));
        response.end();
    }
   
}).listen(9090, () => {
    console.log('Servidor rodando em http://localhost:9090');
});

//usei a func .listen para ouvir na porta 9090
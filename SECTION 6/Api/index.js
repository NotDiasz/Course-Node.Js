const http = require('http');
//chamei a funcao http e criei um server web
//request e a requisao e o response e a resposta que o server da pro cliente

http.createServer((request, response) => {
    if (request.method === 'POST') {
        response.write('Hello World Miguel');
        response.end();
    }   else if (request.method === 'GET'){
        response.write('Metodo GET Aplicado');
        response.end();
    }
   
}).listen(9090, () => {
    console.log('Servidor rodando em http://localhost:9090');
});

//usei a func .listen para ouvir na porta 9090
//SERVIÇO SAUDAÇÃO
var http = require("http");
var url = require("url");
const operacoes = require("./matematica");
//criando um objeto do tipo servidor
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta

    // ação conta

    let num1 = parseInt(q.n1);
    let num2 = parseInt(q.n2);

    let opera = q.oper;
    let resultado = 0;
    let resposta;
    switch (opera) {
      case "soma":
        resultado = operacoes.soma(num1, num2);
        resposta = `O resultado da operação é: ${resultado}`;
        break;
      case "subt":
        resultado = operacoes.subt(num1, num2);
        resposta = `O resultado da operação é: ${resultado}`;
        break;
      case "mult":
        resultado = operacoes.mult(num1, num2);
        resposta = `O resultado da operação é: ${resultado}`;
        break;
      case "divi":
        resultado = operacoes.divi(num1, num2);
        resposta = `O resultado da operação é: ${resultado}`;
        break;
      default:
        resposta = `Selecione uma operação válida`;
        break;
    }

    res.end(resposta);
  })
  .listen(3000); //porta de conexão

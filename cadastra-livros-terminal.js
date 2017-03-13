var http = require('http');

var configuracoes = {

	hostname:'localhost',
	port:3000,
	path:'/produtos',
	method: 'post',
	headers: {
		'Accept': 'application/json',
		'Content-type': 'application/json'
	}

};

var client = http.request(configuracoes, function(res){
	console.log(res.statusCode);
	res.on('data', function(body){
		console.log('Corpo'+body);
	});
});

var produto = {
	titulo: '',
	descricao: 'node, isso eh loko 2',
	preco: 400
};

client.end(JSON.stringify(produto));

console.log('Sem func:'+produto);
console.log('Com func:'+JSON.stringify(produto))
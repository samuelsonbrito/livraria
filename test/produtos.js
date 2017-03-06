var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController',function(){

    it('listagem json',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        //.expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('cadastro', function(done){
    	request.post('/produtos')
    	.send({titulo: "Test", descricao: "Oi", preco: 2.0 })
    	.expect(200,done);
    });
});
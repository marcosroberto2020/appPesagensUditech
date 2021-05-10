'use strict';

const mysql = require('../../db').pool;

const strSql = " SELECT pesagem.Pes_Codigo, pesagem.Pes_DataSaida, prd_Descricao AS produto, pesagem.pes_placa, " +
    "pesagem.Pes_PesoSaida, Pes_PesoEntrada, Pes_PesoSaida-Pes_PesoEntrada AS PesoLiquido, dbo_tb_cliente.Nome " +
    "as Cliente FROM (dbo_tb_cliente INNER JOIN " +
    "(produto INNER JOIN pesagem ON produto.prd_codigo = pesagem.Cad_CodigoProduto) " +
    "ON dbo_tb_cliente.CodCliente = pesagem.Cad_Cliente) INNER JOIN motoristas ON " +
    "pesagem.Pes_CodMotorista = motoristas.CodMotorista";

//finalizar essa parte de conexao com o pool, retirar do try cathc conforme video https://www.youtube.com/watch?v=642J5YzLXDk&ab_channel=Maransatto

exports.get = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error })
        }
        conn.query(strSql,
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send(resultado)
            } );
    });
}
    
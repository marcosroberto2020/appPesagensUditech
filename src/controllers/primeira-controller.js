'use strict';

const conectar = require('../../db');

exports.get = async(req, res, next) => {
    try {
        const conn = await conectar.connect();
        const strSql = " SELECT pesagem.Pes_Codigo, pesagem.Pes_DataSaida, prd_Descricao AS produto, pesagem.pes_placa, " +
                         "pesagem.Pes_PesoSaida, Pes_PesoEntrada, Pes_PesoSaida-Pes_PesoEntrada AS PesoLiquido, dbo_tb_cliente.Nome " + 
                         "as Cliente FROM (dbo_tb_cliente INNER JOIN " +
                          "(produto INNER JOIN pesagem ON produto.prd_codigo = pesagem.Cad_CodigoProduto) " +
                          "ON dbo_tb_cliente.CodCliente = pesagem.Cad_Cliente) INNER JOIN motoristas ON " +
                          "pesagem.Pes_CodMotorista = motoristas.CodMotorista";
    
        
        const [rows] = await conn.query(strSql);     
        res.status(200).send(rows);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição' 
        });
    }
}


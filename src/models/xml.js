module.exports = class Xml {
    constructor(nome, codigo, descricao, qtde, vlr, data) {
        this.nome = nome;
        this.codigo = codigo;
        this.descricao = descricao;
        this.qtde = qtde;
        this.vlr_unit = vlr/qtde;
        this.vlr = vlr;
        this.data = data;
    }

    getXmlModel(){
        var xml = '<?xml version="1.0" encoding="UTF-8"?>'
        +'<pedido>'
        + '<data>22/07/2020</data>'
        + '<cliente>'
        + '<nome>' + this.nome + '</nome>'
        + '</cliente>'
        + '<itens>'
        + '<item>'
        + '<codigo>' + this.codig + '</codigo>'
        + '<descricao>' + this.nome + '</descricao>'
        + '<qtde>' + this.qtde+ '</qtde>'
        + '<vlr_unit>' + this.vlr_unit + '</vlr_unit>'
        + '</item>'
        + '</itens>'
        + '<parcelas>'
        + '<parcela>'
        + '<vlr>' + this.vlr + '</vlr>'
        + '</parcela>'
        + '</parcelas>'
        +'</pedido>';

        //URL ENCODE - REQUIRED FORMAT FOR POST REQUEST
        return encodeURIComponent(xml);
    }
}
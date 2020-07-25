module.exports = class Xml {
    constructor(nome, codigo, descricao, qtde, vlr, data) {
        this.nome = nome;
        this.codigo = codigo;
        this.descricao = descricao;
        this.qtde = qtde;
        this.vlr_unit = vlr/qtde;
        this.vlr = vlr;
        this.data = dateFormat(data);
    }
    
    // It's a basic xml model with mandatory fields to send data to the BLING plataform
    dealXmlModel(){
        var xml = '<?xml version="1.0" encoding="UTF-8"?>'
        +'<pedido>'
        + '<data>' + this.data + '</data>'
        + '<cliente>'
        + '<nome>' + this.nome + '</nome>'
        + '</cliente>'
        + '<itens>'
        + '<item>'
        + '<codigo>' + this.codigo + '</codigo>'
        + '<descricao>' + this.descricao + '</descricao>'
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

        //Url Econde - Required format for POST request
        return encodeURIComponent(xml);
    }
}

// This method changes the date to the Utc format, we need to do it, to be compatible with the BLING platform
function dateFormat(data){
    var date = new Date(data);
    return dateUtc = (date.getUTCDate() +'/'+ (date.getUTCMonth()+1) +'/'+ date.getFullYear());
}

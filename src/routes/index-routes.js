const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'MentionsAPI',
    version: '1.0.0'
  });
});


router.post('/',async (req, res) => {
  var querystring = require('querystring');
  var request = require('request');
  
  var form = {
      apikey: '105d0ca9d4d27157f194dac7c4f340a7342ea9a3ed78f00d021f45fc2afed8bf41a88ff5',
      xml: '%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0D%0A%3Cpedido%3E%0D%0A%20%3Ccliente%3E%0D%0A%20%3Cnome%3EOrganisys%20Software%3C%2Fnome%3E%0D%0A%20%3CtipoPessoa%3EJ%3C%2FtipoPessoa%3E%0D%0A%20%3Cendereco%3ERua%20Visconde%20de%20S%C3%A3o%20Gabriel%3C%2Fendereco%3E%0D%0A%20%3Ccpf_cnpj%3E00000000000000%3C%2Fcpf_cnpj%3E%0D%0A%20%3Cie_rg%3E3067663000%3C%2Fie_rg%3E%0D%0A%20%3Cnumero%3E392%3C%2Fnumero%3E%0D%0A%20%3Ccomplemento%3ESala%2054%3C%2Fcomplemento%3E%0D%0A%20%3Cbairro%3ECidade%20Alta%3C%2Fbairro%3E%0D%0A%20%3Ccep%3E95.700-000%3C%2Fcep%3E%0D%0A%20%3Ccidade%3EBento%20Gon%C3%A7alves%3C%2Fcidade%3E%0D%0A%20%3Cuf%3ERS%3C%2Fuf%3E%0D%0A%20%3Cfone%3E5481153376%3C%2Ffone%3E%0D%0A%20%3Cemail%3Eteste%40teste.com.br%3C%2Femail%3E%0D%0A%20%3C%2Fcliente%3E%0D%0A%20%3Ctransporte%3E%0D%0A%20%3Ctransportadora%3ETransportadora%20XYZ%3C%2Ftransportadora%3E%0D%0A%20%3Ctipo_frete%3ER%3C%2Ftipo_frete%3E%0D%0A%20%3Cservico_correios%3ESEDEX%20-%20CONTRATO%3C%2Fservico_correios%3E%0D%0A%20%3Cdados_etiqueta%3E%0D%0A%20%3Cnome%3EEndere%C3%A7o%20de%20entrega%3C%2Fnome%3E%0D%0A%20%3Cendereco%3ERua%20Visconde%20de%20S%C3%A3o%20Gabriel%3C%2Fendereco%3E%0D%0A%20%3Cnumero%3E392%3C%2Fnumero%3E%0D%0A%20%3Ccomplemento%3ESala%2059%3C%2Fcomplemento%3E%0D%0A%20%3Cmunicipio%3EBento%20Gon%C3%A7alves%3C%2Fmunicipio%3E%0D%0A%20%3Cuf%3ERS%3C%2Fuf%3E%0D%0A%20%3Ccep%3E95.700-000%3C%2Fcep%3E%0D%0A%20%3Cbairro%3ECidade%20Alta%3C%2Fbairro%3E%0D%0A%20%3C%2Fdados_etiqueta%3E%0D%0A%20%3Cvolumes%3E%0D%0A%20%3Cvolume%3E%0D%0A%20%3Cservico%3ESEDEX%20-%20CONTRATO%3C%2Fservico%3E%0D%0A%20%3CcodigoRastreamento%3E%3C%2FcodigoRastreamento%3E%0D%0A%20%3C%2Fvolume%3E%0D%0A%20%3Cvolume%3E%0D%0A%20%3Cservico%3EPAC%20-%20CONTRATO%3C%2Fservico%3E%0D%0A%20%3CcodigoRastreamento%3E%3C%2FcodigoRastreamento%3E%0D%0A%20%3C%2Fvolume%3E%0D%0A%20%3C%2Fvolumes%3E%0D%0A%20%3C%2Ftransporte%3E%0D%0A%20%3Citens%3E%0D%0A%20%3Citem%3E%0D%0A%20%3Ccodigo%3E001%3C%2Fcodigo%3E%0D%0A%20%3Cdescricao%3ECaneta%20001%3C%2Fdescricao%3E%0D%0A%20%3Cun%3EP%C3%A7%3C%2Fun%3E%0D%0A%20%3Cqtde%3E10%3C%2Fqtde%3E%0D%0A%20%3Cvlr_unit%3E1.68%3C%2Fvlr_unit%3E%0D%0A%20%3C%2Fitem%3E%0D%0A%20%3Citem%3E%0D%0A%20%3Ccodigo%3E002%3C%2Fcodigo%3E%0D%0A%20%3Cdescricao%3ECaderno%20002%3C%2Fdescricao%3E%0D%0A%20%3Cun%3EUn%3C%2Fun%3E%0D%0A%20%3Cqtde%3E3%3C%2Fqtde%3E%0D%0A%20%3Cvlr_unit%3E3.75%3C%2Fvlr_unit%3E%0D%0A%20%3C%2Fitem%3E%0D%0A%20%3Citem%3E%0D%0A%20%3Ccodigo%3E003%3C%2Fcodigo%3E%0D%0A%20%3Cdescricao%3ETeclado%20003%3C%2Fdescricao%3E%0D%0A%20%3Cun%3ECx%3C%2Fun%3E%0D%0A%20%3Cqtde%3E7%3C%2Fqtde%3E%0D%0A%20%3Cvlr_unit%3E18.65%3C%2Fvlr_unit%3E%0D%0A%20%3C%2Fitem%3E%0D%0A%20%3C%2Fitens%3E%0D%0A%20%3Cparcelas%3E%0D%0A%20%3Cparcela%3E%0D%0A%20%3Cdata%3E01%2F09%2F2009%3C%2Fdata%3E%0D%0A%20%3Cvlr%3E100%3C%2Fvlr%3E%0D%0A%20%3Cobs%3ETeste%20obs%201%3C%2Fobs%3E%0D%0A%20%3C%2Fparcela%3E%0D%0A%20%3Cparcela%3E%0D%0A%20%3Cdata%3E06%2F09%2F2009%3C%2Fdata%3E%0D%0A%20%3Cvlr%3E50%3C%2Fvlr%3E%0D%0A%20%3Cobs%3E%3C%2Fobs%3E%0D%0A%20%3C%2Fparcela%3E%0D%0A%20%3Cparcela%3E%0D%0A%20%3Cdata%3E11%2F09%2F2009%3C%2Fdata%3E%0D%0A%20%3Cvlr%3E50%3C%2Fvlr%3E%0D%0A%20%3Cobs%3ETeste%20obs%203%3C%2Fobs%3E%0D%0A%20%3C%2Fparcela%3E%0D%0A%20%3C%2Fparcelas%3E%0D%0A%20%3Cvlr_frete%3E15%3C%2Fvlr_frete%3E%0D%0A%20%3Cvlr_desconto%3E10%3C%2Fvlr_desconto%3E%0D%0A%20%3Cobs%3ETestando%20o%20campo%20observa%C3%A7%C3%B5es%20do%20pedido%3C%2Fobs%3E%0D%0A%20%3Cobs_internas%3ETestando%20o%20campo%20observa%C3%A7%C3%B5es%20internas%20do%20pedido%3C%2Fobs_internas%3E%0D%0A%3C%2Fpedido%3E'
  };
  
  var formData = querystring.stringify(form);

  
  var request = require('request');

  request.post('https://bling.com.br/Api/v2/pedido/json/', { form }
  ,function(err, res) {
    console.log(err, res);
  });
});

module.exports = router;
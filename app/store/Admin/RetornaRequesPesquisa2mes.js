Ext.define('ConLogin.store.Admin.RetornaRequesPesquisa2mes', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LogRequestPesquisa',

    alias: 'store.LogRequestmes',

    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Pesquisa-mes_ant_lavagem/CarregaRequestPesquisa.php',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});
Ext.define('ConLogin.store.Admin.RetornaRequesPesquisa', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LogRequestPesquisa',

    alias: 'store.LogRequest',

    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Pesquisa/CarregaRequestPesquisa.php',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});
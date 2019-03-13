Ext.define('ConLogin.store.Admin.RetornaRequestPesquisa2Dates', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LogRequestPesquisa',

    alias: 'store.LogRequest2M',

    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Pesquisa-mes_ant_lavagem/Pesquisa2Dates.php',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});